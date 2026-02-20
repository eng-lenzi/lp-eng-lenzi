import { motion } from "framer-motion";
import { User, Phone, MapPin } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

export function Contact() {
	return (
		<AnimatedSection id="contato" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<EmojiRenderer emoji="📞" />
					Contato
				</Badge>
				<Title size="lg" className="font-heading">
					Envie os dados do caso para avaliação
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Canal direto para perícia judicial e assistência técnica em
					engenharia mecânica, com retorno orientado por escopo e urgência.
				</Text>
			</div>

			<div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
				<div className="space-y-6">
					<AnimatedCard delay={0.2}>
						<Card className="border-border/60 bg-gradient-to-br from-muted/40 via-muted/20 to-transparent">
							<CardContent className="space-y-6 p-5 sm:space-y-8 sm:p-8">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
									className="flex items-center gap-4 sm:gap-5"
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25">
										<User className="size-6 sm:size-8" />
									</div>
									<div>
										<Text className="text-xl font-semibold">
											Fernando Eugênio Lenzi
										</Text>
										<Text size="sm" tone="subtle">
											Engenheiro Mecânico - Perito Judicial
										</Text>
									</div>
								</motion.div>

								<div className="h-px bg-border/60" />

								<a
									href="tel:+5519997110785"
									className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted sm:p-4"
								>
									<div className="flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 bg-primary/10">
										<Phone className="size-5 text-primary sm:size-6" />
									</div>
									<div>
										<Text size="xs" tone="muted">
											Telefone
										</Text>
										<Text className="text-lg font-semibold">
											(19) 99711-0785
										</Text>
									</div>
								</a>

								<a
									href="https://maps.google.com/?q=Rua+Sao+Benedito+107+Amparo+SP"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted sm:p-4"
								>
									<div className="flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 bg-primary/10">
										<MapPin className="size-5 text-primary sm:size-6" />
									</div>
									<div>
										<Text size="xs" tone="muted">
											Endereço
										</Text>
										<Text className="text-lg font-semibold">
											Rua São Benedito nº 107, Centro
										</Text>
										<Text size="sm" tone="subtle">
											Amparo - SP, CEP 13900-250
										</Text>
									</div>
								</a>
							</CardContent>
						</Card>
					</AnimatedCard>
				</div>

				<AnimatedCard delay={0.3}>
					<ContactForm
						title="Formulário de contato"
						description="Descreva o caso, local da ocorrência e documentos já disponíveis."
					/>
				</AnimatedCard>
			</div>
		</AnimatedSection>
	);
}
