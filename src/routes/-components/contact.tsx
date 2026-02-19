import { motion } from "framer-motion";
import { User, Phone, MapPin } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";
import { AnimatedSection, AnimatedCard, EmojiRenderer } from "./animation-helpers";

export function Contact() {
	return (
		<AnimatedSection id="contato" className="border-t py-16 sm:py-20 lg:py-32" delay={0.1}>
			<div className="space-y-4 mb-14">
				<Badge
					variant="outline"
					className="border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
				>
					<EmojiRenderer emoji="📞" />
					Contato
				</Badge>
				<Title size="lg" className="font-heading">
					Envie os dados do caso para avaliação
				</Title>
				<Text tone="subtle" className="max-w-2xl">
					Canal direto para perícia judicial e assistência técnica em
					engenharia mecânica, com retorno orientado por escopo e urgência.
				</Text>
			</div>

			<div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
				<div className="space-y-6">
					<AnimatedCard delay={0.2}>
						<Card className="border-border/60 bg-gradient-to-br from-muted/40 via-muted/20 to-transparent">
							<CardContent className="space-y-8 p-8">
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
									className="flex items-center gap-5"
								>
									<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25">
										<User className="size-8" />
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
									className="flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-muted"
								>
									<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
										<Phone className="size-6 text-primary" />
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
									className="flex items-center gap-5 rounded-xl p-4 transition-colors hover:bg-muted"
								>
									<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
										<MapPin className="size-6 text-primary" />
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
