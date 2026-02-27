import { motion } from "framer-motion";
import { FlaskConical, Microscope, Beaker, ChevronRight } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection, AnimatedCard } from "./animation-helpers";
import { scrollToSection } from "@/lib/utils";

const technicalFocus = [
	{ label: "Falhas mecânicas", icon: Beaker },
	{ label: "Acidentes críticos", icon: FlaskConical },
	{ label: "Análise de fratura", icon: Microscope },
	{ label: "Compressores", icon: FlaskConical },
] as const;

const destructiveTests = [
	"Tração",
	"Dureza",
	"Fadiga",
	"Fluência",
	"Torção",
	"Flexão",
	"Impacto",
	"Tenacidade",
	"Fratura",
] as const;

const nonDestructiveTests = [
	"Ultrassom",
	"Raios-X",
	"Partículas magnéticas",
	"Líquidos penetrantes",
	"Microdureza",
	"Tomografia",
] as const;

function TestChip({ name, color }: { name: string; color: "red" | "emerald" }) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:brightness-95 ${
				color === "red"
					? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
					: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
			}`}
		>
			{name}
		</div>
	);
}

export function MechanicalTests() {
	return (
		<AnimatedSection id="ensaios" aria-labelledby="ensaios-title" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<Microscope className="mr-1.5 size-3" />
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

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
				{technicalFocus.map((item, idx) => (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.05 }}
						className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4"
					>
						<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
							<item.icon className="size-4 text-primary" />
						</div>
						<Text size="sm" className="font-medium">
							{item.label}
						</Text>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="mb-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4"
			>
				<div className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20">
						<FlaskConical className="size-4 text-amber-600" />
					</div>
					<Text size="sm" className="text-amber-800 dark:text-amber-200">
						Ensaios realizados em laboratórios parceiros, conforme necessidade do caso.
					</Text>
				</div>
			</motion.div>

			<div className="grid gap-6 md:grid-cols-2 md:items-stretch">
				<AnimatedCard delay={0.2}>
					<Card className="h-full border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30">
						<CardHeader className="pb-4">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
									<FlaskConical className="size-5 text-red-600" />
								</div>
								<div>
									<Title as="h3" size="md" className="font-heading">
										Ensaios Destrutivos
									</Title>
									<Text size="xs" tone="muted">
										9 tipos disponíveis
									</Text>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{destructiveTests.map((test, idx) => (
									<motion.div
										key={test}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: idx * 0.02 }}
									>
										<TestChip name={test} color="red" />
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</AnimatedCard>

				<AnimatedCard delay={0.3}>
					<Card className="h-full border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30">
						<CardHeader className="pb-4">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
									<Microscope className="size-5 text-emerald-600" />
								</div>
								<div>
									<Title as="h3" size="md" className="font-heading">
										Ensaios Não Destrutivos
									</Title>
									<Text size="xs" tone="muted">
										6 tipos disponíveis
									</Text>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-2">
								{nonDestructiveTests.map((test, idx) => (
									<motion.div
										key={test}
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ delay: idx * 0.02 }}
									>
										<TestChip name={test} color="emerald" />
									</motion.div>
								))}
							</div>
						</CardContent>
					</Card>
				</AnimatedCard>
			</div>

			<nav aria-label="Links internos de ensaios" className="mt-8 rounded-lg border border-border/60 bg-muted/30 p-4">
				<Text size="xs" tone="muted" className="mb-2 uppercase tracking-wide">Veja também</Text>
				<div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 text-sm">
					<a href="#areas" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "areas")}>
						<span>Áreas de atuação</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#outras-areas" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "outras-areas")}>
						<span>Outras especialidades</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
					<a href="#contato" className="flex items-center justify-between py-2 text-primary hover:underline sm:py-0 sm:gap-4" onClick={(e) => scrollToSection(e, "contato")}>
						<span>Enviar detalhes do caso</span>
						<ChevronRight className="size-4 sm:hidden" />
					</a>
				</div>
			</nav>
		</AnimatedSection>
	);
}
