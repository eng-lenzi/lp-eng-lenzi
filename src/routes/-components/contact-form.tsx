import { type FormEvent, useState } from "react";
import { Loader2, MessageCircle, Send } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { emailjs } from "@/lib/emailjs";
import { projectData } from "@/lib/project-data";

const businessName = projectData.businessName;
const fallbackHref = projectData.cta.href;
const fallbackLabel = projectData.cta.label;
const hasEmailJsConfig = emailjs.isConfigured();

function buildWhatsAppUrl(values: ContactValues): string {
  const message = buildWhatsAppMessage(values);
  const baseUrl = fallbackHref.split("?text=")[0];

  if (!message) {
    return fallbackHref;
  }

  return `${baseUrl}?text=%0A%0A${message}`;
}

function buildWhatsAppMessage(values: ContactValues): string {
  const parts: string[] = [];

  if (values.name) {
    parts.push(`*Nome:* ${values.name}`);
  }
  if (values.email) {
    parts.push(`*Email:* ${values.email}`);
  }
  if (values.phone) {
    parts.push(`*Telefone:* ${values.phone}`);
  }
  if (values.message) {
    parts.push(`*Mensagem:* ${values.message}`);
  }

  if (parts.length === 0) {
    return "";
  }

  return parts.join("%0A%0A");
}

type ContactFormProps = {
  sectionId?: string;
  title?: string;
  description?: string;
};

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm({
  sectionId,
  title = "Fale com a nossa equipe",
  description = "Preencha o formulário e retornaremos o contato.",
}: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      if (hasEmailJsConfig) {
        await emailjs.sendContact({
          businessName,
          fromName: values.name,
          fromEmail: values.email,
          phone: values.phone,
          message: values.message,
        });
        setSuccessMessage("Mensagem enviada. Obrigado pelo contato.");
        setValues(initialValues);
      }

      if (!hasEmailJsConfig) {
        window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
        setSuccessMessage("Abrimos o WhatsApp para você continuar o atendimento.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }

      if (!(error instanceof Error)) {
        setErrorMessage("Não foi possível enviar agora. Tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  let submitLabel = "Enviar mensagem";
  if (isSubmitting) {
    submitLabel = "Enviando...";
  }

  return (
    <Card id={sectionId} variant="outline" className="border-border/60">
      <CardHeader className="space-y-2">
        <Title as="h3" size="lg">{title}</Title>
        <Text tone="subtle">{description}</Text>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            placeholder="Seu nome"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            required
          />
          <Input
            placeholder="Seu e-mail"
            type="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            required
          />
          <Input
            placeholder="Seu telefone"
            value={values.phone}
            onChange={(event) =>
              setValues((current) => ({ ...current, phone: event.target.value }))
            }
            required
          />
          <textarea
            className="flex min-h-28 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Como podemos ajudar?"
            value={values.message}
            onChange={(event) =>
              setValues((current) => ({ ...current, message: event.target.value }))
            }
            required
          />

          {successMessage && (
            <Text size="xs" className="text-green-600">
              {successMessage}
            </Text>
          )}

          {errorMessage && (
            <Text size="xs" className="text-red-600">
              {errorMessage}
            </Text>
          )}

          <Button
            type="button"
            disabled={isSubmitting}
            className="w-full"
            onClick={() => {
              window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
            }}
          >
            <MessageCircle />
            {fallbackLabel}
          </Button>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && <Loader2 className="size-4 animate-spin" />}
            <Send />
            {submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
