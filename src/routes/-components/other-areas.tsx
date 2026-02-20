import { Award, Factory, Truck, CheckCircle2 } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

const otherAreas = [
	{
		title: "Patentes e Propriedade Industrial",
		items: [
			"Análise técnica de violação de patentes",
			"Exame comparativo de invenções",
			"Perícias em ações de cópia técnica",
			"Suporte em disputas empresariais",
		],
		icon: Award,
	},
	{
		title: "Avaliação de Máquinas",
		items: [
			"Avaliação técnica de equipamentos",
			"Estado de conservação e obsolescência",
			"Suporte em falências e recuperações",
			"Pareceres para alienação",
		],
		icon: Factory,
	},
	{
		title: "Acidentes de Trânsito",
		items: [
			"Análise da dinâmica de acidentes",
			"Estudos de impacto e frenagem",
			"Perícias em veículos leves e pesados",
			"Correlação danos-velocidade",
		],
		icon: Truck,
	},
] as const;

export function OtherAreas() {
	return (
		<AnimatedSection className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="💼" />
					Atuação complementar
				</Badge>
				<Title size="lg" className="font-heading">
					Outras áreas de atuação pericial
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Apoio técnico especializado em demandas que exigem leitura mecânica,
					interpretação normativa e fundamentação probatória.
				</Text>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{otherAreas.map((area, idx) => (
					<AnimatedCard key={area.title} delay={idx * 0.1}>
						<Card className="group border-border/60 bg-card h-full transition-all hover:shadow-lg hover:border-primary/30">
							<CardHeader className="space-y-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
									<area.icon className="size-6 text-primary" />
								</div>
								<Title size="md" className="font-heading">
									{area.title}
								</Title>
							</CardHeader>
							<CardContent className="space-y-3">
								{area.items.map((item) => (
									<div key={item} className="flex items-start gap-2">
										<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary/70" />
										<Text size="xs" tone="subtle">
											{item}
										</Text>
									</div>
								))}
							</CardContent>
						</Card>
					</AnimatedCard>
				))}
			</div>
		</AnimatedSection>
	);
}
