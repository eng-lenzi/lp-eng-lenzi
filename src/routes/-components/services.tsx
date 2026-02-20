import { Gavel, Scale, FileCheck2, CheckCircle2 } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

const services = [
	{
		title: "Perito Judicial",
		description:
			"Nomeação judicial em processos cíveis e trabalhistas. Laudos técnicos com rigor metodológico e fundamentação normativa.",
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
		<AnimatedSection id="servicos" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="⚖️" />
					Estrutura de atuação
				</Badge>
				<Title size="lg" className="font-heading">
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
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 opacity-50" />
							<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
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
									<Title size="md" className="font-heading">
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
		</AnimatedSection>
	);
}
