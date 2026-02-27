import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo-mark";
import { Text } from "@/components/typography";
import { Title } from "@/components/typography";
import { ChevronRight } from "lucide-react";

const menuItems = [
	{ label: "Início", href: "#inicio" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Áreas de Atuação", href: "#areas" },
	{ label: "Ensaios", href: "#ensaios" },
	{ label: "Credenciais", href: "#credenciais" },
	{ label: "Contato", href: "#contato" },
] as const;

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-gradient-to-b from-muted/20 to-muted/40">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] md:py-8">
					<div className="space-y-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<div className="flex h-8 w-8 items-center justify-center overflow-hidden">
								<LogoMark className="h-full w-full object-contain" />
							</div>
							<Text className="text-base font-semibold">
								Fernando Eugenio Lenzi
							</Text>
						</motion.div>
						<Text tone="subtle" className="text-sm">
							Perícia Judicial e Assistência Técnica em Engenharia Mecânica
						</Text>
						<a
							href="https://wa.me/5519997110785?text=Ol%C3%A1%2C%20Eng.%20Fernando%20Lenzi.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20uma%20per%C3%ADcia%2Fassist%C3%AAncia%20t%C3%A9cnica."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
						>
							WhatsApp: (19) 99711-0785
							<ChevronRight className="size-4" />
						</a>
					</div>

					<div className="space-y-3 md:space-y-4">
						<Title size="sm" className="font-heading">
							Navegação
						</Title>
						<nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm md:flex md:flex-wrap">
							{menuItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<ChevronRight className="size-3 md:hidden" />
									{item.label}
								</a>
							))}
						</nav>
					</div>
				</div>

				<div className="flex flex-col gap-3 border-t border-border/60 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
					<Text size="xs" tone="muted" className="max-w-xl">
						Atuação técnica dentro de normas e limites legais, sem promessa de
						resultado processual.
					</Text>
					<Text size="xs" tone="muted">
						© {currentYear} Fernando Lenzi. Todos os direitos reservados.
					</Text>
				</div>
			</div>
		</footer>
	);
}
