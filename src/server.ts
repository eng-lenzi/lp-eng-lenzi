import { fileURLToPath } from "node:url";
import path from "node:path";
import tailwind from "bun-plugin-tailwind";

const preferredPort = 3178;
const hostname = "localhost";
const buildOutdir = "/tmp/lp-eng-lenzi-dev";
const mainEntrypoint = fileURLToPath(new URL("./main.tsx", import.meta.url));
const cssEntrypoint = fileURLToPath(new URL("./index.css", import.meta.url));
const htmlFilePath = fileURLToPath(new URL("./index.html", import.meta.url));
const sourceIndexHtml = await Bun.file(htmlFilePath).text();
const indexHtml = sourceIndexHtml
  .replace("./index.css", "/index.css")
  .replace("./main.tsx", "/main.js");

function isAddressInUseError(error: unknown) {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "EADDRINUSE"
  );
}

async function buildMainJs() {
  const buildResult = await Bun.build({
    entrypoints: [mainEntrypoint],
    outdir: buildOutdir,
    target: "browser",
    format: "esm",
    minify: false,
    sourcemap: "inline",
  });
  const output = buildResult.outputs.find((file) => file.path.endsWith("/main.js"));

  if (!buildResult.success || !output) {
    throw new Error("Falha ao gerar main.js");
  }

  return Bun.file(output.path);
}

async function buildCss() {
  const buildResult = await Bun.build({
    entrypoints: [cssEntrypoint],
    outdir: buildOutdir,
    minify: false,
    sourcemap: "inline",
    plugins: [tailwind],
  });
  const output = buildResult.outputs.find((file) => file.path.endsWith("/index.css"));

  if (!buildResult.success || !output) {
    throw new Error("Falha ao gerar index.css");
  }

  return Bun.file(output.path);
}

function startServer() {
  let port = preferredPort;

  const contentTypes: Record<string, string> = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
  };

  async function handleStatic(req: Request): Promise<Response | null> {
    const url = new URL(req.url);
    const pathname = url.pathname;

    if (pathname === "/main.js") {
      return new Response(await buildMainJs(), {
        headers: {
          "Content-Type": "application/javascript; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    if (pathname === "/index.css") {
      return new Response(await buildCss(), {
        headers: {
          "Content-Type": "text/css; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    }

    const filePath = path.join(process.cwd(), "public", pathname);
    const file = Bun.file(filePath);
    if (await file.exists()) {
      const ext = path.extname(pathname).toLowerCase();
      return new Response(file, {
        headers: {
          "Content-Type": contentTypes[ext] || "application/octet-stream",
          "Cache-Control": "no-store",
        },
      });
    }

    return null;
  }

  while (true) {
    try {
      return Bun.serve({
        port,
        hostname,
        development: {
          hmr: true,
          console: true,
        },
        async fetch(req) {
          const staticResponse = await handleStatic(req);
          if (staticResponse) return staticResponse;

          return new Response(indexHtml, {
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "no-store",
            },
          });
        },
      });
    } catch (error) {
      if (!isAddressInUseError(error)) {
        throw error;
      }

      port += 1;
    }
  }
}

const server = startServer();
const appUrl = `http://${hostname}:${server.port}`;
const clickableAppUrl = `\u001B]8;;${appUrl}\u0007${appUrl}\u001B]8;;\u0007`;

console.log(`App rodando em ${clickableAppUrl}`);
