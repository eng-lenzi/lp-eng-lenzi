import { Gavel, Scale, FileCheck2, CheckCircle2, ChevronRight } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard } from "./animation-helpers";
import { scrollToSection } from "@/lib/utils";

const services = [
	{
		title: "Perito Judicial",
		description:
			"Nomeação judicial em processos cíveis. Laudos técnicos com rigor metodológico e fundamentação normativa.",
		features: [
			"Análise técnica de equipamentos e sistemas",
			"Investigação de causa raiz",
			"Laudos com linguagem jurídica adequada",
		],
		icon: Gavel,
		badge: "Prova técnica",
	},
	{
		title: "Assistente Técnico",
		description:
			"Apoio técnico às partes durante todo o processo. Formulação de quesitos e análise crítica de laudos.",
		features: [
			"Formulação de quesitos técnicos",
			"Análise de laudos periciais",
			"Pareceres estratégicos",
		],
		icon: Scale,
		badge: "Defesa técnica",
	},
	{
		title: "Parecer Técnico",
		description:
			"Pareceres técnicos para instrução processual, com foco em investigação de falhas e conformidade normativa.",
		features: [
			"Análise de conformidade",
			"Investigação técnica",
			"Documentação para processo",
		],
		icon: FileCheck2,
		badge: "Documentação",
	},
] as const;

export function Services() {
	return (
		<AnimatedSection
			id="servicos"
			aria-labelledby="servicos-title"
			className="border-t py-12 sm:py-16 lg:py-24"
			delay={0.1}
		>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<Scale className="mr-1.5 size-3" />
					Estrutura de atuação
				</Badge>
				<Title as="h2" id="servicos-title" size="lg" className="font-heading">
					Serviços periciais para cada etapa do processo
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Atuação técnica completa, desde a nomeação judicial até a conclusão do
					processo, com foco na produção de prova técnica consistente.
				</Text>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{services.map((service, idx) => (
					<AnimatedCard key={service.title} delay={idx * 0.1}>
						<Card className="group relative overflow-hidden border-border/60 bg-card h-full transition-all hover:shadow-lg hover:border-primary/30">
						<CardHeader className="space-y-4 pb-3 sm:space-y-5 sm:pb-4">
								<div className="flex items-start justify-between">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500/20 sm:h-12 sm:w-12 sm:rounded-2xl">
										<service.icon className="size-5 text-slate-600 sm:size-6 sm:text-slate-600" />
									</div>
									<Badge
										variant="secondary"
										size="sm"
										className="bg-muted text-muted-foreground"
									>
										{service.badge}
									</Badge>
								</div>
								<div className="space-y-2">
									<Title as="h3" size="md" className="font-heading">
										{service.title}
									</Title>
									<Text size="sm" tone="subtle" className="leading-relaxed">
										{service.description}
									</Text>
								</div>
							</CardHeader>
							<CardContent className="space-y-3 pt-0">
								<div className="h-px bg-border/60" />
								<div className="space-y-2.5">
									{service.features.map((feature) => (
										<div key={feature} className="flex items-start gap-2.5">
											<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
											<Text size="xs" tone="subtle">
												{feature}
											</Text>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</AnimatedCard>
				))}
			</div>

			<nav aria-label="Links internos de serviços" className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-4">
				<Text size="xs" tone="muted" className="mb-2 uppercase tracking-wide">
					Veja também
				</Text>
				<div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 text-sm">
					<a href="#areas" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "areas")}>
						<span>Áreas prioritárias</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#ensaios" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "ensaios")}>
						<span>Ensaios técnicos</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#contato" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "contato")}>
						<span>Solicitar atendimento</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
				</div>
			</nav>
		</AnimatedSection>
	);
}
