# PROJECT_PROFILE

## Contexto

- Projeto: `Lp-EngLenzi`
- Tipo: landing page de serviços profissionais
- Foco: perícia judicial e assistência técnica em engenharia mecânica
- Nicho principal: casos com elevadores e caldeiras

## Intenção do Produto

- Objetivo: captar contatos qualificados para atuação como perito judicial e assistente técnico
- Público-alvo: empresas e pessoas físicas com processos jurídicos envolvendo máquinas e ferramentas na engenharia mecânica
- Problema: dificuldade em converter falhas mecânicas em prova técnica clara, confiável e juridicamente adequada
- Proposta de valor: laudos e pareceres técnicos mecânicos com rigor pericial, linguagem jurídica adequada e foco em evidência técnica

## Escopo e Limites

### Escopo V1

- Hero com posicionamento (perícia judicial e assistência técnica)
- Seção de serviços (Perito Judicial, Assistente Técnico, Parecer Técnico)
- Áreas de atuação com foco em elevadores e caldeiras
- Credenciais técnicas e profissionais
- Chamada para ação de contato direto
- Aviso de atuação técnica dentro de normas e limites legais

### Não-objetivos

- Blog e calendário de conteúdo
- Área do cliente com login
- Agendamento online complexo
- Ferramentas e simuladores técnicos interativos
- Versão multilíngue

### Restrições

- Comunicação estritamente profissional e juridicamente adequada
- Sem promessa de resultado processual
- Entrega inicial enxuta em página única
- Prioridade para conversão em contato rápido
- Terminologia técnica consistente com prática pericial

## Direção de UI

- Direção: `editorial`
- Densidade: `balanced`
- Radius: `0.5rem`

## Tipografia (tokens sugeridos)

- `sans`: `"IBM Plex Sans", "Segoe UI", sans-serif`
- `heading`: `"IBM Plex Serif", "Georgia", serif`
- `mono`: `"IBM Plex Mono", "SFMono-Regular", monospace`

## Theme Tokens

### Light

- `background`: `oklch(0.985 0.004 240)`
- `foreground`: `oklch(0.22 0.02 250)`
- `card`: `oklch(0.995 0.002 240)`
- `cardForeground`: `oklch(0.22 0.02 250)`
- `popover`: `oklch(0.995 0.002 240)`
- `popoverForeground`: `oklch(0.22 0.02 250)`
- `select`: `oklch(0.965 0.01 245)`
- `selectForeground`: `oklch(0.26 0.02 248)`
- `primary`: `oklch(0.36 0.07 240)`
- `primaryForeground`: `oklch(0.98 0.005 240)`
- `secondary`: `oklch(0.92 0.012 240)`
- `secondaryForeground`: `oklch(0.3 0.02 244)`
- `muted`: `oklch(0.95 0.008 240)`
- `mutedForeground`: `oklch(0.5 0.015 245)`
- `accent`: `oklch(0.78 0.09 85)`
- `accentForeground`: `oklch(0.26 0.02 248)`
- `destructive`: `oklch(0.57 0.21 25)`
- `destructiveForeground`: `oklch(0.985 0.005 240)`
- `warning`: `oklch(0.82 0.14 82)`
- `warningForeground`: `oklch(0.26 0.02 248)`
- `success`: `oklch(0.72 0.13 155)`
- `successForeground`: `oklch(0.26 0.02 248)`
- `border`: `oklch(0.86 0.01 245)`
- `input`: `oklch(0.86 0.01 245)`
- `ring`: `oklch(0.52 0.08 240)`

### Dark

- `background`: `oklch(0.19 0.015 245)`
- `foreground`: `oklch(0.95 0.005 240)`
- `card`: `oklch(0.23 0.015 245)`
- `cardForeground`: `oklch(0.95 0.005 240)`
- `popover`: `oklch(0.23 0.015 245)`
- `popoverForeground`: `oklch(0.95 0.005 240)`
- `select`: `oklch(0.27 0.02 245)`
- `selectForeground`: `oklch(0.93 0.005 240)`
- `primary`: `oklch(0.78 0.09 235)`
- `primaryForeground`: `oklch(0.2 0.02 245)`
- `secondary`: `oklch(0.31 0.02 245)`
- `secondaryForeground`: `oklch(0.93 0.005 240)`
- `muted`: `oklch(0.28 0.018 245)`
- `mutedForeground`: `oklch(0.74 0.01 242)`
- `accent`: `oklch(0.74 0.11 82)`
- `accentForeground`: `oklch(0.23 0.015 245)`
- `destructive`: `oklch(0.64 0.2 27)`
- `destructiveForeground`: `oklch(0.96 0.005 240)`
- `warning`: `oklch(0.79 0.12 83)`
- `warningForeground`: `oklch(0.23 0.015 245)`
- `success`: `oklch(0.75 0.12 154)`
- `successForeground`: `oklch(0.23 0.015 245)`
- `border`: `oklch(0.34 0.02 245)`
- `input`: `oklch(0.34 0.02 245)`
- `ring`: `oklch(0.66 0.09 235)`

## Modelo Canônico

```json
{
  "project": {
    "name": "Lp-EngLenzi",
    "objective": "Landing page para captação de serviços de perícia judicial e assistência técnica em engenharia mecânica",
    "audience": "Empresas e pessoas físicas com processos jurídicos envolvendo máquinas e ferramentas, com foco em elevadores e caldeiras",
    "problem": "Dificuldade de transformar falhas mecânicas em evidência técnica clara e juridicamente adequada para o processo",
    "valueProposition": "Laudos e pareceres técnicos mecânicos com rigor pericial, linguagem jurídica adequada e foco em evidência técnica",
    "scopeV1": [
      "Hero com posicionamento",
      "Seção de serviços",
      "Áreas de atuação com foco em elevadores e caldeiras",
      "Credenciais",
      "CTA de contato direto",
      "Aviso de atuação técnica dentro de normas e limites legais"
    ],
    "nonGoals": [
      "Blog",
      "Área do cliente com login",
      "Agendamento online complexo",
      "Simuladores técnicos interativos",
      "Multilíngue"
    ],
    "constraints": [
      "Comunicação juridicamente adequada",
      "Sem promessa de resultado processual",
      "Landing page única para V1",
      "Foco em contato rápido",
      "Terminologia técnica consistente com prática pericial"
    ]
  },
  "ui": {
    "direction": "editorial",
    "density": "balanced",
    "radius": "0.5rem",
    "fonts": {
      "sans": "\"IBM Plex Sans\", \"Segoe UI\", sans-serif",
      "heading": "\"IBM Plex Serif\", \"Georgia\", serif",
      "mono": "\"IBM Plex Mono\", \"SFMono-Regular\", monospace"
    }
  },
  "theme": {
    "light": {
      "background": "oklch(0.985 0.004 240)",
      "foreground": "oklch(0.22 0.02 250)",
      "card": "oklch(0.995 0.002 240)",
      "cardForeground": "oklch(0.22 0.02 250)",
      "popover": "oklch(0.995 0.002 240)",
      "popoverForeground": "oklch(0.22 0.02 250)",
      "select": "oklch(0.965 0.01 245)",
      "selectForeground": "oklch(0.26 0.02 248)",
      "primary": "oklch(0.36 0.07 240)",
      "primaryForeground": "oklch(0.98 0.005 240)",
      "secondary": "oklch(0.92 0.012 240)",
      "secondaryForeground": "oklch(0.3 0.02 244)",
      "muted": "oklch(0.95 0.008 240)",
      "mutedForeground": "oklch(0.5 0.015 245)",
      "accent": "oklch(0.78 0.09 85)",
      "accentForeground": "oklch(0.26 0.02 248)",
      "destructive": "oklch(0.57 0.21 25)",
      "destructiveForeground": "oklch(0.985 0.005 240)",
      "warning": "oklch(0.82 0.14 82)",
      "warningForeground": "oklch(0.26 0.02 248)",
      "success": "oklch(0.72 0.13 155)",
      "successForeground": "oklch(0.26 0.02 248)",
      "border": "oklch(0.86 0.01 245)",
      "input": "oklch(0.86 0.01 245)",
      "ring": "oklch(0.52 0.08 240)"
    },
    "dark": {
      "background": "oklch(0.19 0.015 245)",
      "foreground": "oklch(0.95 0.005 240)",
      "card": "oklch(0.23 0.015 245)",
      "cardForeground": "oklch(0.95 0.005 240)",
      "popover": "oklch(0.23 0.015 245)",
      "popoverForeground": "oklch(0.95 0.005 240)",
      "select": "oklch(0.27 0.02 245)",
      "selectForeground": "oklch(0.93 0.005 240)",
      "primary": "oklch(0.78 0.09 235)",
      "primaryForeground": "oklch(0.2 0.02 245)",
      "secondary": "oklch(0.31 0.02 245)",
      "secondaryForeground": "oklch(0.93 0.005 240)",
      "muted": "oklch(0.28 0.018 245)",
      "mutedForeground": "oklch(0.74 0.01 242)",
      "accent": "oklch(0.74 0.11 82)",
      "accentForeground": "oklch(0.23 0.015 245)",
      "destructive": "oklch(0.64 0.2 27)",
      "destructiveForeground": "oklch(0.96 0.005 240)",
      "warning": "oklch(0.79 0.12 83)",
      "warningForeground": "oklch(0.23 0.015 245)",
      "success": "oklch(0.75 0.12 154)",
      "successForeground": "oklch(0.23 0.015 245)",
      "border": "oklch(0.34 0.02 245)",
      "input": "oklch(0.34 0.02 245)",
      "ring": "oklch(0.66 0.09 235)"
    }
  },
  "files": {
    "agentsPath": "AGENTS.md",
    "projectProfilePath": "PROJECT_PROFILE.md",
    "cssGlobalPath": "src/index.css"
  }
}
```

## Change Log

- 2026-02-18: Bootstrap inicial `koworker-bootstrap` com definição de perfil do projeto, direção visual e tokens globais.
