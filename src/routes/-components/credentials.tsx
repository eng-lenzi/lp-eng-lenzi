import { Award, ShieldCheck, TrendingUp } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedCard } from "./animation-helpers";

const credentials = [
	"Engenheiro Mecânico",
	"Perito Judicial e Assistente Técnico",
	"35 anos de experiência profissional",
	"Coordenador da Câmara de Engenharia Mecânica do CREA-SP (2021)",
	"12 anos como Conselheiro do CREA-SP (CEEMM)",
	"6 anos como Presidente da Associação dos Engenheiros de Amparo",
] as const;

const timeline = [
	{ year: "2013", description: "Início como Conselheiro do CREA-SP (CEEMM)" },
	{ year: "2019", description: "Eleito Presidente da Associação dos Engenheiros de Amparo" },
	{ year: "2021", description: "Coordenador da Câmara de Engenharia Mecânica do CREA-SP" },
] as const;

export function Credentials() {
	return (
		<AnimatedSection id="credenciais" aria-labelledby="credenciais-title" className="border-t py-8 sm:py-12 lg:py-16" delay={0.1}>
			<div className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5"
				>
					<Award className="mr-1.5 size-3" />
					Autoridade técnica
				</Badge>
				<Title as="h2" id="credenciais-title" size="lg" className="font-heading">
					Credenciais e experiência profissional
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm">
					Experiência acumulada em engenharia mecânica aplicada à prova técnica,
					com atuação ética e fundamentada.
				</Text>
			</div>

			<div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
				{credentials.map((cred, idx) => (
					<AnimatedCard key={cred} delay={idx * 0.05}>
						<div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-3 sm:p-4 transition-all hover:shadow-sm hover:border-primary/30">
							<div
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5"
							>
								<Award className="size-4 text-primary" />
							</div>
							<Text size="xs" className="font-medium leading-tight sm:text-sm">
								{cred}
							</Text>
						</div>
					</AnimatedCard>
				))}
			</div>

			<AnimatedCard delay={0.25}>
				<div className="mt-6 sm:mt-8 rounded-xl border border-border/70 bg-card/70 p-4 sm:p-5">
					<div className="mb-3 flex items-center gap-2">
						<TrendingUp className="size-4 text-primary" />
						<Title as="h3" size="sm" className="font-heading">
							Linha do tempo
						</Title>
					</div>
					<div className="relative pl-5 before:absolute before:left-1.5 before:top-1.5 before:h-full before:w-px before:bg-border">
						<div className="space-y-3">
							{timeline.map((item) => (
								<div key={item.year} className="relative">
									<div className="absolute -left-[1.02rem] top-1 h-2.5 w-2.5 rounded-full bg-primary/70" />
									<Text size="xs" className="font-semibold text-primary">
										{item.year}
									</Text>
									<Text size="xs" tone="subtle" className="leading-tight">
										{item.description}
									</Text>
								</div>
							))}
						</div>
					</div>
				</div>
			</AnimatedCard>

			<AnimatedCard delay={0.3}>
				<div
					className="mt-6 sm:mt-8 rounded-xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 p-3 sm:p-4 transition-all hover:border-amber-500/30"
				>
					<div className="flex gap-3">
						<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20">
							<ShieldCheck className="size-4 text-amber-600" />
						</div>
						<div className="space-y-2">
							<Text size="sm" className="font-medium">
								Atuação técnica dentro de normas e limites legais
							</Text>
							<Text size="xs" tone="subtle">
								A atividade pericial é conduzida com rigor metodológico, linguagem
								juridicamente adequada e respeito aos limites técnicos da prova,
								sem promessa de resultado processual. Cada laudo é elaborado com
								base em evidências técnicas e normativas vigentes.
							</Text>
						</div>
					</div>
				</div>
			</AnimatedCard>

			<AnimatedCard delay={0.35}>
				<div className="mt-4 sm:mt-6 rounded-lg border border-muted bg-muted/30 p-3 sm:p-4">
					<Text size="xs" tone="subtle">
						<strong className="text-foreground">Atuação em esfera cível e empresarial.</strong>{" "}
						Não realizo perícias em foro trabalhista.
					</Text>
				</div>
			</AnimatedCard>
		</AnimatedSection>
	);
}
