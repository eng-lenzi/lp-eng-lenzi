import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

import { Text } from "@/components/typography";
import { Title } from "@/components/typography";

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
				<div className="grid gap-8 py-8 sm:gap-10 sm:py-12 md:grid-cols-[1.5fr_1fr]">
					<div className="space-y-5">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3"
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20">
								<Crosshair className="size-5" />
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
								href="tel:+5519997110785"
								className="text-sm font-medium text-primary hover:underline"
							>
								(19) 99711-0785
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
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
