import { ArrowRight, Building2, Landmark, Scale, ShieldCheck, Star } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projectData } from "@/lib/project-data";
import { ContactForm } from "./contact-form";

const businessName = projectData.businessName;
const heroTitle = projectData.hero.title;
const heroSubtitle = projectData.hero.subtitle;
const primaryCtaLabel = projectData.cta.label;
const primaryCtaHref = projectData.cta.href;
const menuItems = projectData.menu.singlePage;
const serviceItems = projectData.sections.services;
const testimonials = projectData.sections.testimonials;
const faqs = projectData.sections.faqs;

export function LandingSinglePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Text size="md" className="font-semibold">
            {businessName}
          </Text>
          <nav className="hidden items-center gap-4 md:flex">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href}>
                <Text size="xs" tone="muted" className="hover:text-foreground">
                  {item.label}
                </Text>
              </a>
            ))}
          </nav>
          <a href={primaryCtaHref} target="_blank" rel="noreferrer">
            <Button size="sm">
              {primaryCtaLabel}
              <ArrowRight />
            </Button>
          </a>
        </div>
      </header>

      <main id="inicio" className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-14 md:py-20">
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-5">
            <Text tone="muted">{businessName}</Text>
            <Title size="xl" className="text-4xl leading-tight md:text-5xl">
              {heroTitle}
            </Title>
            <Text size="md" tone="subtle" className="max-w-2xl">
              {heroSubtitle}
            </Text>
            <div className="flex flex-wrap gap-3">
              <a href={primaryCtaHref} target="_blank" rel="noreferrer">
                <Button size="lg">{primaryCtaLabel}</Button>
              </a>
              <a href="#contato">
                <Button variant="outline" size="lg">
                  Solicitar retorno
                </Button>
              </a>
            </div>
          </div>
          <Card variant="outline" className="border-border/60">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2">
                <Landmark className="size-5 text-primary" />
                <Text className="font-medium">Estrutura pronta para converter</Text>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="size-5 text-primary" />
                <Text className="font-medium">Comunicação direta e profissional</Text>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-primary" />
                <Text className="font-medium">Foco em confiança e clareza</Text>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="sobre" className="space-y-6">
          <Title size="lg">Sobre</Title>
          <Text size="md" tone="subtle" className="max-w-4xl">
            Estrutura inspirada em landing pages profissionais: posicionamento claro,
            prova de autoridade e caminho simples até o contato.
          </Text>
          <div className="grid gap-4 md:grid-cols-3">
            <Card variant="outline">
              <CardContent className="space-y-3 p-5">
                <Building2 className="size-5 text-primary" />
                <Title size="md">Posicionamento</Title>
                <Text tone="subtle">Mensagem alinhada ao público certo.</Text>
              </CardContent>
            </Card>
            <Card variant="outline">
              <CardContent className="space-y-3 p-5">
                <Star className="size-5 text-primary" />
                <Title size="md">Autoridade</Title>
                <Text tone="subtle">Seções de prova e diferenciais desde o início.</Text>
              </CardContent>
            </Card>
            <Card variant="outline">
              <CardContent className="space-y-3 p-5">
                <ShieldCheck className="size-5 text-primary" />
                <Title size="md">Conversão</Title>
                <Text tone="subtle">CTAs distribuídos ao longo da navegação.</Text>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="servicos" className="space-y-6">
          <Title size="lg">Serviços</Title>
          <div className="grid gap-4 md:grid-cols-3">
            {serviceItems.map((item) => (
              <Card key={item} variant="outline">
                <CardContent className="p-5">
                  <Text>{item}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="depoimentos" className="space-y-6">
          <Title size="lg">Depoimentos</Title>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.author} variant="outline">
                <CardContent className="space-y-3 p-5">
                  <Text tone="subtle">"{item.text}"</Text>
                  <Text size="xs" tone="muted">
                    {item.author}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-6">
          <Title size="lg">Perguntas frequentes</Title>
          <div className="space-y-3">
            {faqs.map((item) => (
              <Card key={item.question} variant="outline">
                <CardContent className="space-y-2 p-5">
                  <Title size="sm">{item.question}</Title>
                  <Text tone="subtle">{item.answer}</Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <ContactForm
            sectionId="contato"
            title="Contato"
            description="Envie sua mensagem ou use o CTA principal."
          />
        </section>
      </main>
    </div>
  );
}
