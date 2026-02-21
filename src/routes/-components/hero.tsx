import { motion, useInView } from "framer-motion";
import {
	CheckCircle2,
	ChevronRight,
	Phone,
	ShieldCheck,
	Zap,
} from "lucide-react";
import { useRef } from "react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	AnimatedNumber,
	AnimatedSection,
	FloatingElement,
	GlowingOrb,
	HeroParticles,
} from "./animation-helpers";

const stats = [
	{ value: "35+", label: "Anos de experiência", suffix: "" },
	{ value: "12", label: "Anos no CREA-SP", suffix: "" },
	{ value: "1000", label: "Perícias realizadas", suffix: "+" },
	{ value: "98", label: "Satisfação", suffix: "%" },
] as const;

export function Hero() {
	const heroRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true });

	return (
		<section
			ref={heroRef}
			id="inicio"
			className="relative pt-8 pb-8 sm:pt-16 sm:pb-10 lg:py-20"
		>
			<HeroParticles />
			<GlowingOrb className="left-[-10%] top-[20%] h-96 w-96" />
			<GlowingOrb className="right-[-5%] bottom-[20%] h-64 w-64" color="blue" />

			<div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
				<div className="relative z-10 space-y-8 lg:space-y-10">
					<AnimatedSection delay={0.1}>
						<Badge
							variant="outline"
							className="border-primary/30 bg-primary/5 px-3 py-1 text-sm sm:px-4 sm:py-1.5"
						>
							<Zap className="mr-1.5 size-3" />
							Perícia Judicial e Assistência Técnica
						</Badge>
					</AnimatedSection>

					<AnimatedSection delay={0.2}>
						<Title
							size="xl"
							className="font-heading text-3xl sm:text-4xl lg:text-[3.5rem] leading-[1.1]"
						>
							Perito em{" "}
							<span className="bg-gradient-to-r from-primary via-primary/80 to-blue-500 bg-clip-text text-transparent">
								engenharia mecânica
							</span>
                                          {" "}aplicada à prova técnica.
						</Title>
					</AnimatedSection>

					<AnimatedSection delay={0.3}>
						<Text
							size="sm"
							tone="subtle"
							className="max-w-xl leading-relaxed sm:text-base"
						>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								35 anos de experiência em análise de falhas, acidentes e eventos
								críticos. Atuação como Perito Judicial e Assistente Técnico com
								foco em elevadores e caldeiras.
							</motion.span>
						</Text>
					</AnimatedSection>

					<AnimatedSection delay={0.4}>
						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								size="sm"
								className="gap-2 shadow-lg shadow-primary/20 sm:size-lg"
							>
								<a href="tel:+5519997110785">
									<Phone className="size-4" />
									Falar por telefone
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="sm"
								className="gap-2 sm:size-lg"
							>
								<a href="#contato">
									Enviar mensagem
									<ChevronRight className="size-4" />
								</a>
							</Button>
						</div>
					</AnimatedSection>

					<AnimatedSection delay={0.5}>
						<div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:flex sm:flex-wrap sm:gap-8 pt-2 sm:pt-4">
							{stats.map((stat, idx) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: 0.6 + idx * 0.1 }}
									className="space-y-1"
								>
									<Text className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
										<AnimatedNumber value={stat.value} suffix={stat.suffix} />
									</Text>
									<Text size="xs" tone="muted">
										{stat.label}
									</Text>
								</motion.div>
							))}
						</div>
					</AnimatedSection>
				</div>

				<div className="relative lg:block">
					<motion.div
						initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
						animate={isHeroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative h-full"
					>
						<FloatingElement className="absolute -right-2 top-[15%] z-10 sm:right-0 sm:top-1/4">
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.8, duration: 0.5 }}
								className="rounded-xl bg-card p-2 shadow-xl sm:p-3"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 sm:h-10 sm:w-10">
									<CheckCircle2 className="size-4 text-emerald-600 sm:size-5" />
								</div>
							</motion.div>
						</FloatingElement>
						<FloatingElement
							className="absolute -left-2 bottom-[20%] z-10 sm:left-0 sm:bottom-1/3"
							style={{ animationDelay: "1s" }}
						>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 1, duration: 0.5 }}
								className="rounded-xl bg-card p-2 shadow-xl sm:p-3"
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 sm:h-10 sm:w-10">
									<ShieldCheck className="size-4 text-blue-600 sm:size-5" />
								</div>
							</motion.div>
						</FloatingElement>
						<div className="relative h-full flex items-center justify-center">
							<div className="relative w-full max-w-[280px] sm:max-w-sm">
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
									transition={{ delay: 0.6, duration: 0.6 }}
									className="relative"
								>
									<div className="relative rounded-2xl bg-card p-1.5 shadow-2xl sm:p-2">
										<div className="relative overflow-hidden rounded-xl">
											<img
												src="/profile_fernando_lenzi.webp"
												alt="Fernando Lenzi - Engenheiro Mecânico"
												className="w-full aspect-[3/4] object-cover object-top"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
											<div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
												<Text className="text-lg font-bold text-white sm:text-xl">
													Fernando Lenzi
												</Text>
												<Text size="xs" className="text-white/80 sm:text-sm">
													Engenheiro Mecânico
												</Text>
												<div className="mt-1 inline-block rounded-lg bg-primary/90 px-2 py-0.5 sm:mt-1.5 sm:px-3 sm:py-1">
													<Text size="xs" className="font-semibold text-white">
														CREA-SP: 123.456
													</Text>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
