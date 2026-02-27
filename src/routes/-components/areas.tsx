import { ChevronRight, Target } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	AnimatedCard,
	AnimatedSection,
} from "./animation-helpers";
import { scrollToSection } from "@/lib/utils";

function AreaIcon({ src, alt }: { src: string; alt: string }) {
	return (
		<img
			src={src}
			alt={alt}
			className="h-full w-full rounded-lg border border-border/30 object-contain p-1"
			loading="lazy"
		/>
	);
}

const focusAreas: Array<{
	title: string;
	description: string;
	items: string[];
	iconSrc: string;
	iconAlt: string;
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
		iconSrc: "/lp-elevador.webp",
		iconAlt: "Diagrama técnico de elevador",
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
		iconSrc: "/lp-caldeira.webp",
		iconAlt: "Diagrama técnico de caldeira",
		gradient: "from-blue-500 via-blue-400 to-cyan-400",
		bgGradient: "from-blue-500/10 via-blue-400/5 to-transparent",
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
					<Target className="mr-1.5 size-3" />
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
								className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${area.gradient}`}
							/>
							<CardHeader className="space-y-3 sm:space-y-5">
								<div className="flex items-start gap-3 sm:gap-5">
									<div
										className="flex aspect-square h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-lg"
									>
										<AreaIcon src={area.iconSrc} alt={area.iconAlt} />
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
										<li key={item} className="flex items-center gap-3">
											<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
				<div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 text-sm">
					<a href="#servicos" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "servicos")}>
						<span>Serviços periciais</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#ensaios" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "ensaios")}>
						<span>Ensaios aplicados</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#credenciais" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "credenciais")}>
						<span>Credenciais</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
				</div>
			</nav>
		</AnimatedSection>
	);
}
