import { mkdir, copyFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import tailwind from "bun-plugin-tailwind";

const outdir = fileURLToPath(new URL("../dist", import.meta.url));
const mainEntrypoint = fileURLToPath(new URL("../src/main.tsx", import.meta.url));
const cssEntrypoint = fileURLToPath(new URL("../src/index.css", import.meta.url));
const htmlFilePath = fileURLToPath(new URL("../src/index.html", import.meta.url));
const publicDir = fileURLToPath(new URL("../public", import.meta.url));

await mkdir(outdir, { recursive: true });

const mainBuild = await Bun.build({
  entrypoints: [mainEntrypoint],
  outdir,
  target: "browser",
  format: "esm",
  minify: true,
});

if (!mainBuild.success) {
  mainBuild.logs.forEach((log) => console.error(log));
  process.exit(1);
}

const cssBuild = await Bun.build({
  entrypoints: [cssEntrypoint],
  outdir,
  plugins: [tailwind],
  minify: true,
});

if (!cssBuild.success) {
  cssBuild.logs.forEach((log) => console.error(log));
  process.exit(1);
}

const sourceIndexHtml = await Bun.file(htmlFilePath).text();
const indexHtml = sourceIndexHtml
  .replace("./index.css", "./index.css")
  .replace("./main.tsx", "./main.js");

await Bun.write(`${outdir}/index.html`, indexHtml);

const copyPublicFiles = async () => {
  try {
    const files = await readdir(publicDir);
    for (const file of files) {
      await copyFile(path.join(publicDir, file), path.join(outdir, file));
    }
  } catch {
    // public dir vazio ou não existe
  }
};
await copyPublicFiles();

console.log(`Build concluido em ${outdir}`);
