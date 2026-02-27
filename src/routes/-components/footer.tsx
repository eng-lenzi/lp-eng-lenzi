import { motion } from "framer-motion";

import { LogoMark } from "@/components/logo-mark";
import { Text } from "@/components/typography";
import { Title } from "@/components/typography";

const menuItems = [
	{ label: "Início", href: "#inicio" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Áreas de Atuação", href: "#areas" },
	{ label: "Ensaios", href: "#ensaios" },
	{ label: "Credenciais", href: "#credenciais" },
	{ label: "WhatsApp", href: "#contato" },
] as const;

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-gradient-to-b from-muted/20 to-muted/40">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 py-8 sm:gap-10 sm:py-12 md:grid-cols-[1.5fr_1fr]">
					<div className="space-y-5">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-background shadow-lg">
								<LogoMark className="h-full w-full object-contain" />
							</div>
							<Text className="text-lg font-semibold">
								Fernando Eugênio Lenzi
							</Text>
						</motion.div>
						<Text tone="subtle" className="max-w-sm">
							Perícia Judicial e Assistência Técnica em Engenharia Mecânica
						</Text>
						<div className="flex flex-wrap gap-6">
							<a
								href="https://wa.me/5519997110785?text=Ol%C3%A1%2C%20Eng.%20Fernando%20Lenzi.%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20sobre%20uma%20per%C3%ADcia%2Fassist%C3%AAncia%20t%C3%A9cnica."
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-primary hover:underline"
							>
								Falar no WhatsApp: (19) 99711-0785
							</a>
							<Text size="sm" tone="muted">
								Amparo - SP
							</Text>
						</div>
					</div>

					<div className="space-y-5">
						<Title size="sm" className="font-heading">
							Navegação
						</Title>
						<nav className="flex flex-wrap gap-x-6 gap-y-3">
							{menuItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
								>
									{item.label}
								</a>
							))}
						</nav>
					</div>
				</div>

				<div className="flex flex-col gap-4 border-t border-border/60 py-8 sm:flex-row sm:items-center sm:justify-between">
					<Text size="xs" tone="muted" className="max-w-xl">
						Atuação técnica dentro de normas e limites legais, sem promessa de
						resultado processual. Todas as informações são tratadas com
						confidencialidade.
					</Text>
					<Text size="xs" tone="muted">
						© {currentYear} Fernando Eugênio Lenzi. Todos os direitos reservados.
					</Text>
				</div>
			</div>
		</footer>
	);
}
