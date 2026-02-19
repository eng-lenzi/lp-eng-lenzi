import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

const credentials = [
	"Engenheiro Mecânico",
	"Perito Judicial e Assistente Técnico",
	"35 anos de experiência profissional",
	"12 anos como Relator do CREA-SP",
	"Rigor metodológico e ética",
] as const;

export function Credentials() {
	return (
		<AnimatedSection id="credenciais" className="border-t py-16 sm:py-20 lg:py-32" delay={0.1}>
			<div className="space-y-4 mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
				>
					<EmojiRenderer emoji="🏆" />
					Autoridade técnica
				</Badge>
				<Title size="lg" className="font-heading">
					Credenciais e experiência profissional
				</Title>
				<Text tone="subtle" className="max-w-2xl">
					Experiência acumulada em engenharia mecânica aplicada à prova técnica,
					com atuação ética e fundamentada.
				</Text>
			</div>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{credentials.map((cred, idx) => (
					<AnimatedCard key={cred} delay={idx * 0.05}>
						<div className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:shadow-md hover:border-primary/30">
							<motion.div
								animate={{
									rotate: [0, 360],
								}}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}
								className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5"
							>
								<Star className="size-5 text-primary" />
							</motion.div>
							<Text size="sm" className="font-medium">
								{cred}
							</Text>
						</div>
					</AnimatedCard>
				))}
			</div>

			<AnimatedCard delay={0.3}>
				<motion.div
					className="mt-10 rounded-2xl border-2 border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 p-8 transition-all hover:border-amber-500/30"
				>
					<div className="flex flex-col gap-6 sm:flex-row sm:items-start">
						<motion.div
							animate={{
								scale: [1, 1.1, 1],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
							}}
							className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20"
						>
							<ShieldCheck className="size-7 text-amber-600" />
						</motion.div>
						<div className="space-y-3">
							<Title size="md" className="font-heading">
								Atuação técnica dentro de normas e limites legais
							</Title>
							<Text size="md" tone="subtle">
								A atividade pericial é conduzida com rigor metodológico, linguagem
								juridicamente adequada e respeito aos limites técnicos da prova,
								sem promessa de resultado processual. Cada laudo é elaborado com
								base em evidências técnicas e normativas vigentes.
							</Text>
						</div>
					</div>
				</motion.div>
			</AnimatedCard>
		</AnimatedSection>
	);
}
