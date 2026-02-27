import { motion } from "framer-motion";
import { FlaskConical, Zap, CheckCircle2 } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

const technicalActs = [
	"Análise de falhas mecânicas em máquinas e equipamentos",
	"Investigação de acidentes técnicos e eventos críticos",
	"Avaliação de sistemas submetidos a tração, flexão, torção e fadiga",
	"Exame de componentes fraturados e mecanismos de ruptura",
	"Perícias em compressores e sistemas industriais",
] as const;

const destructiveTests = [
	{ name: "Tração", desc: "Resistência à tração" },
	{ name: "Dureza", desc: "Resistência à penetração" },
	{ name: "Fadiga", desc: "Ciclo de carga" },
	{ name: "Fluência", desc: "Deformação temporal" },
	{ name: "Torção", desc: "Resistência à torção" },
	{ name: "Flexão", desc: "Resistência à flexão" },
	{ name: "Impacto", desc: "Resistência ao impacto" },
	{ name: "Tenacidade", desc: "Resistência à fratura" },
	{ name: "Fratura", desc: "Análise de superfície" },
] as const;

const nonDestructiveTests = [
	{ name: "Ultrassom", desc: "Detecção interna" },
	{ name: "Raios-X", desc: "Inspeção radiográfica" },
	{ name: "Partículas", desc: "Inspeção superficial" },
	{ name: "Líquidos", desc: "Detecção de trincas" },
	{ name: "Microdureza", desc: "Dureza local" },
	{ name: "Tomografia", desc: "3D volumétrico" },
] as const;

export function MechanicalTests() {
	return (
		<AnimatedSection id="ensaios" aria-labelledby="ensaios-title" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="🔬" />
					Suporte laboratorial
				</Badge>
				<Title as="h2" id="ensaios-title" size="lg" className="font-heading">
					Atuação técnica e ensaios mecânicos
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Metodologia orientada por evidências para investigação de falhas,
					validação de hipóteses técnicas e fundamentação de laudos.
				</Text>
			</div>

			<AnimatedCard delay={0.2}>
				<Card className="mb-8 border-border/60 bg-gradient-to-br from-muted/30 via-muted/20 to-transparent sm:mb-10">
					<CardContent className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:p-8">
						{technicalActs.map((act, idx) => (
							<motion.div
								key={act}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: idx * 0.05 }}
								className="flex items-start gap-2.5"
							>
								<motion.div
									animate={{
										scale: [1, 1.2, 1],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										delay: idx * 0.3,
									}}
								>
									<CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary sm:size-5" />
								</motion.div>
								<Text size="xs" tone="subtle" className="sm:text-sm">
									{act}
								</Text>
							</motion.div>
						))}
					</CardContent>
				</Card>
			</AnimatedCard>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 sm:mb-10 sm:p-5 sm:rounded-2xl"
			>
				<div className="flex items-center gap-3 sm:gap-4">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl bg-amber-500/20">
						<Zap className="size-5 text-amber-600 sm:size-6" />
					</div>
					<div>
						<Text className="font-medium text-amber-800 dark:text-amber-200">
							Importante
						</Text>
						<Text size="sm" className="text-amber-700/80 dark:text-amber-300/80">
							Os laudos técnicos podem incluir ensaios realizados em laboratórios
							contratados, conforme a necessidade do caso.
						</Text>
					</div>
				</div>
			</motion.div>

			<div className="grid gap-6 md:grid-cols-2">
				<AnimatedCard delay={0.2}>
					<Card className="group border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30 overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
						<CardHeader className="space-y-3 sm:space-y-5">
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl bg-red-500/10">
									<FlaskConical className="size-5 text-red-600 sm:size-6" />
								</div>
								<div>
									<Title as="h3" size="md" className="font-heading">
										Ensaios Destrutivos
									</Title>
									<Text size="xs" tone="muted">
										9 tipos de ensaio
									</Text>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3 sm:grid-cols-2">
								{destructiveTests.map((test, idx) => (
									<motion.div
										key={test.name}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: idx * 0.03 }}
										className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
									>
										<div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400">
											{idx + 1}
										</div>
										<Text size="sm" className="font-medium">
											{test.name}
										</Text>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</AnimatedCard>

				<AnimatedCard delay={0.3}>
					<Card className="group border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30 overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
						<CardHeader className="space-y-3 sm:space-y-5">
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl bg-emerald-500/10">
									<FlaskConical className="size-5 text-emerald-600 sm:size-6" />
								</div>
								<div>
									<Title as="h3" size="md" className="font-heading">
										Ensaios Não Destrutivos
									</Title>
									<Text size="xs" tone="muted">
										6 tipos de ensaio
									</Text>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="grid gap-3 sm:grid-cols-2">
								{nonDestructiveTests.map((test, idx) => (
									<motion.div
										key={test.name}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: idx * 0.05 }}
										className="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted"
									>
										<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
											{idx + 1}
										</div>
										<Text size="sm" className="font-medium">
											{test.name}
										</Text>
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</AnimatedCard>
			</div>

			<nav aria-label="Links internos de ensaios" className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-4">
				<Text size="xs" tone="muted" className="mb-2 uppercase tracking-wide">Veja também</Text>
				<div className="flex flex-wrap gap-4 text-sm">
					<a href="#areas" className="text-primary hover:underline">Áreas de atuação</a>
					<a href="#outras-areas" className="text-primary hover:underline">Outras especialidades</a>
					<a href="#contato" className="text-primary hover:underline">Enviar detalhes do caso</a>
				</div>
			</nav>
		</AnimatedSection>
	);
}
