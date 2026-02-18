type EnvMap = Record<string, string | undefined>;

export type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

export type EmailJsTemplateParams = Record<string, unknown>;

export type EmailJsTemplateRequest = {
  templateParams: EmailJsTemplateParams;
  serviceId?: string;
  templateId?: string;
  publicKey?: string;
  timeoutMs?: number;
};

export type EmailJsContactInput = {
  businessName: string;
  fromName: string;
  fromEmail: string;
  phone: string;
  message: string;
};

export type EmailJsSendResult = {
  status: number;
  body: string;
};

const endpoint = "https://api.emailjs.com/api/v1.0/email/send";
const defaultTimeoutMs = 12000;

function getEnv() {
  const meta = import.meta as ImportMeta & { env?: EnvMap };
  return meta.env ?? {};
}

function normalizeValue(value: string | undefined) {
  return value?.trim() ?? "";
}

function getEmailJsConfig(): EmailJsConfig {
  const env = getEnv();

  return {
    serviceId: normalizeValue(env.VITE_EMAILJS_SERVICE_ID),
    templateId: normalizeValue(env.VITE_EMAILJS_TEMPLATE_ID),
    publicKey: normalizeValue(env.VITE_EMAILJS_PUBLIC_KEY),
  };
}

function listMissingFields(config: EmailJsConfig) {
  const fields: string[] = [];

  if (!config.serviceId) {
    fields.push("VITE_EMAILJS_SERVICE_ID");
  }
  if (!config.templateId) {
    fields.push("VITE_EMAILJS_TEMPLATE_ID");
  }
  if (!config.publicKey) {
    fields.push("VITE_EMAILJS_PUBLIC_KEY");
  }

  return fields;
}

function resolveConfig(overrides: Partial<EmailJsConfig> = {}) {
  const config = getEmailJsConfig();

  return {
    serviceId: overrides.serviceId ?? config.serviceId,
    templateId: overrides.templateId ?? config.templateId,
    publicKey: overrides.publicKey ?? config.publicKey,
  };
}

function getConfigOrThrow(overrides: Partial<EmailJsConfig> = {}) {
  const config = resolveConfig(overrides);
  const missingFields = listMissingFields(config);

  if (missingFields.length > 0) {
    throw new Error(`EmailJS config missing: ${missingFields.join(", ")}`);
  }

  return config;
}

function parseErrorBody(body: string) {
  const normalized = body.trim();
  if (!normalized) {
    return "unknown error";
  }

  if (normalized.length > 300) {
    return `${normalized.slice(0, 297)}...`;
  }

  return normalized;
}

function isConfigured() {
  return listMissingFields(getEmailJsConfig()).length === 0;
}

async function sendRequest(body: Record<string, unknown>, timeoutMs: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const responseBody = await response.text();

    if (!response.ok) {
      throw new Error(
        `EmailJS request failed (${response.status}): ${parseErrorBody(responseBody)}`,
      );
    }

    return {
      status: response.status,
      body: responseBody,
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("EmailJS request timed out");
    }

    if (error instanceof Error) {
      throw new Error(`EmailJS request failed: ${error.message}`);
    }

    throw new Error("EmailJS request failed");
  } finally {
    clearTimeout(timeoutId);
  }
}

function createContactTemplateParams(input: EmailJsContactInput) {
  return {
    business_name: input.businessName,
    from_name: input.fromName,
    from_email: input.fromEmail,
    phone: input.phone,
    message: input.message,
  };
}

async function sendTemplate({
  templateParams,
  serviceId,
  templateId,
  publicKey,
  timeoutMs = defaultTimeoutMs,
}: EmailJsTemplateRequest): Promise<EmailJsSendResult> {
  const config = getConfigOrThrow({
    serviceId,
    templateId,
    publicKey,
  });

  return sendRequest(
    {
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: templateParams,
    },
    timeoutMs,
  );
}

async function sendContact(
  input: EmailJsContactInput,
  options: { timeoutMs?: number } = {},
) {
  return sendTemplate({
    templateParams: createContactTemplateParams(input),
    timeoutMs: options.timeoutMs ?? defaultTimeoutMs,
  });
}

export const emailjs = {
  endpoint,
  isConfigured,
  getConfig: getEmailJsConfig,
  sendTemplate,
  createContactTemplateParams,
  sendContact,
};
