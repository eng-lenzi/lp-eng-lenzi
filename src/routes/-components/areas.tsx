import { ChevronRight } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	AnimatedCard,
	AnimatedSection,
	ElevatorDiagram,
	EmojiRenderer,
	PressureVesselDiagram,
} from "./animation-helpers";

const focusAreas: Array<{
	title: string;
	description: string;
	items: string[];
	icon: React.ComponentType<{ className?: string }>;
	gradient: string;
	bgGradient: string;
}> = [
	{
		title: "Elevadores",
		description:
			"Análise técnica completa de sistemas de transporte vertical, desde falhas mecânicas até investigação de acidentes.",
		items: [
			"Falhas de projeto, instalação e manutenção",
			"Investigação de panes e quedas",
			"Análise de sistema de freio e tração",
			"Estudo de conformidade com normas técnicas",
			"Avaliação de contratos de manutenção",
			"Determinação de causa raiz",
		],
		icon: ElevatorDiagram,
		gradient: "from-blue-500 via-blue-400 to-cyan-400",
		bgGradient: "from-blue-500/10 via-blue-400/5 to-transparent",
	},
	{
		title: "Caldeiras e Vasos de Pressão",
		description:
			"Perícias técnicas em equipamentos pressurizados, com análise de integridade estrutural e operacional.",
		items: [
			"Explosões e falhas catastróficas",
			"Análise estrutural e de integridade",
			"Verificação NR-13 e inspeções",
			"Avaliação de dispositivos de segurança",
			"Análise de histórico operacional",
			"Laudos para processos judiciais",
		],
		icon: PressureVesselDiagram,
		gradient: "from-orange-500 via-red-400 to-amber-400",
		bgGradient: "from-orange-500/10 via-red-400/5 to-transparent",
	},
] as const;

export function Areas() {
	return (
		<AnimatedSection
			id="areas"
			aria-labelledby="areas-title"
			className="border-t py-12 sm:py-16 lg:py-24"
			delay={0.1}
		>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="🎯" />
					Foco técnico
				</Badge>
				<Title as="h2" id="areas-title" size="lg" className="font-heading">
					Áreas de atuação prioritárias
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Especialização em sistemas de maior criticidade mecânica, com
					enquadramento normativo e leitura técnica para produção de prova.
				</Text>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{focusAreas.map((area, idx) => (
					<AnimatedCard key={area.title} delay={idx * 0.15}>
						<Card className="group relative overflow-hidden border-border/60 bg-card h-full transition-all hover:shadow-lg hover:border-primary/30">
							<div
								className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 transition-opacity group-hover:opacity-100`}
							/>
							<div
								className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${area.gradient}`}
							/>
							<CardHeader className="space-y-3 sm:space-y-5">
								<div className="flex items-start gap-3 sm:gap-5">
									<div
										className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-md bg-gradient-to-br ${area.gradient}/10 `}
									>
										<area.icon className="size-10 sm:size-12" />
									</div>
									<div className="space-y-1 pt-1">
										<Title as="h3" size="lg" className="font-heading">
											{area.title}
										</Title>
										<Text size="sm" tone="subtle">
											{area.description}
										</Text>
									</div>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="h-px bg-border/60" />
								<ul className="space-y-3">
									{area.items.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
												<ChevronRight className="size-3 text-primary" />
											</div>
											<Text size="sm" tone="subtle">
												{item}
											</Text>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</AnimatedCard>
				))}
			</div>

			<nav aria-label="Links internos de áreas" className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-4">
				<Text size="xs" tone="muted" className="mb-2 uppercase tracking-wide">Veja também</Text>
				<div className="flex flex-wrap gap-4 text-sm">
					<a href="#servicos" className="text-primary hover:underline">Serviços periciais</a>
					<a href="#ensaios" className="text-primary hover:underline">Ensaios aplicados</a>
					<a href="#credenciais" className="text-primary hover:underline">Credenciais</a>
				</div>
			</nav>
		</AnimatedSection>
	);
}
