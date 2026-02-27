import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedCard } from "./animation-helpers";
import { ContactForm } from "./contact-form";

export function Contact() {
	return (
		<AnimatedSection id="contato" aria-labelledby="contato-title" className="border-t py-12 sm:py-16 lg:py-24" delay={0.1}>
			<div className="space-y-3 mb-8 sm:space-y-4 sm:mb-10 lg:mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
				>
					<MessageCircle className="mr-1.5 size-3" />
					WhatsApp e formulário
				</Badge>
				<Title as="h2" id="contato-title" size="lg" className="font-heading">
					Fale no WhatsApp ou envie os dados do caso
				</Title>
				<Text tone="subtle" className="max-w-2xl text-sm sm:text-base">
					Canal direto para perícia judicial e assistência técnica em
					engenharia mecânica, com retorno orientado por escopo e urgência.
				</Text>
			</div>

			<div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
				<div className="space-y-6">
					<AnimatedCard delay={0.2}>
						<div className="space-y-4 p-4 sm:space-y-5 sm:p-6">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.3 }}
								className="flex items-center gap-4 sm:gap-5"
							>
								<div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
									<img
										src="/brand/logo.svg"
										alt=""
										className="h-full w-full object-contain"
									/>
								</div>
								<div>
									<Text className="text-xl font-semibold">
										Fernando Eugenio Lenzi
									</Text>
									<Text size="sm" tone="subtle">
										Engenheiro Mecânico - Perito Judicial
									</Text>
								</div>
							</motion.div>

							<div className="h-px bg-border/60" />

							<a
								href="https://wa.me/5519997110785?text=Ol%C3%A1%2C%20Eng.%20Fernando%20Lenzi.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20uma%20per%C3%ADcia%2Fassist%C3%AAncia%20t%C3%A9cnica."
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted sm:gap-4 sm:p-3"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 bg-primary/10">
									<Phone className="size-4 text-primary sm:size-5" />
								</div>
								<div>
									<Text size="xs" tone="muted">
										WhatsApp
									</Text>
									<Text className="text-base font-semibold sm:text-lg">
										(19) 99711-0785
									</Text>
								</div>
							</a>

							<a
								href="https://maps.google.com/?q=Rua+Sao+Benedito+107+Amparo+SP"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted sm:gap-4 sm:p-3"
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-11 sm:w-11 bg-primary/10">
									<MapPin className="size-4 text-primary sm:size-5" />
								</div>
								<div>
									<Text size="xs" tone="muted">
										Endereço
									</Text>
									<Text className="text-base font-semibold sm:text-lg">
										Rua São Benedito nº 107, Centro
									</Text>
									<Text size="sm" tone="subtle">
										Amparo - SP, CEP 13900-250
									</Text>
								</div>
							</a>
						</div>
					</AnimatedCard>
				</div>

				<AnimatedCard delay={0.3}>
					<ContactForm
						title="Formulário de pré-avaliação"
						description="Descreva o caso, local da ocorrência e documentos já disponíveis."
					/>
				</AnimatedCard>
			</div>
		</AnimatedSection>
	);
}
