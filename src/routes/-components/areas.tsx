import { TrendingUp, ChevronRight } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard, EmojiRenderer, Flame } from "./animation-helpers";

const focusAreas = [
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
		icon: TrendingUp,
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
		icon: Flame,
		gradient: "from-orange-500 via-red-400 to-amber-400",
		bgGradient: "from-orange-500/10 via-red-400/5 to-transparent",
	},
] as const;

export function Areas() {
	return (
		<AnimatedSection id="areas" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="🎯" />
					Foco técnico
				</Badge>
				<Title size="lg" className="font-heading">
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
							<div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 transition-opacity group-hover:opacity-100`} />
							<div
								className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${area.gradient}`}
							/>
							<CardHeader className="space-y-3 sm:space-y-5">
								<div className="flex items-start gap-3 sm:gap-5">
									<div className={`flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl bg-gradient-to-br ${area.gradient}/20`}>
										<area.icon className={`size-6 sm:size-7 bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`} />
									</div>
									<div className="space-y-1 pt-1">
										<Title size="lg" className="font-heading">
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
		</AnimatedSection>
	);
}
