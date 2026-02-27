import { ArrowRight } from "lucide-react";

import { Text, Title } from "@/components/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "./animation-helpers";

const clusters = [
	{
		title: "Hub institucional",
		description: "Contexto profissional, credenciais e contato para início do atendimento.",
		links: [
			{ label: "Perfil e experiência", href: "#inicio" },
			{ label: "Credenciais técnicas", href: "#credenciais" },
			{ label: "Contato e triagem", href: "#contato" },
		],
	},
	{
		title: "Hub de serviços periciais",
		description: "Mapa de serviços e tipos de atuação em processos judiciais.",
		links: [
			{ label: "Serviços periciais", href: "#servicos" },
			{ label: "Áreas prioritárias", href: "#areas" },
			{ label: "Ensaios e análises", href: "#ensaios" },
		],
	},
	{
		title: "Páginas satélite",
		description: "Conteúdos de apoio para aprofundar contexto técnico de cada caso.",
		links: [
			{ label: "Outras áreas de atuação", href: "#outras-areas" },
			{ label: "Solicitar parecer técnico", href: "#contato" },
		],
	},
] as const;

export function ContentHub() {
	return (
		<AnimatedSection
			id="hub-conteudo"
			aria-labelledby="hub-title"
			className="border-t py-10 sm:py-12"
			delay={0.05}
		>
			<div className="space-y-2 mb-6 sm:mb-8">
				<Title as="h2" id="hub-title" size="lg" className="font-heading">
					Arquitetura de conteúdo e navegação
				</Title>
				<Text tone="subtle" className="max-w-3xl">
					Estrutura em clusters para reduzir profundidade de navegação: acesso em até 2 cliques
					entre hubs estratégicos e páginas satélite.
				</Text>
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				{clusters.map((cluster) => (
					<Card key={cluster.title} className="h-full border-border/60">
						<CardHeader className="space-y-2">
							<Title as="h3" size="md" className="font-heading text-lg">
								{cluster.title}
							</Title>
							<Text size="sm" tone="subtle">
								{cluster.description}
							</Text>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{cluster.links.map((link) => (
									<li key={link.href + link.label}>
										<a
											href={link.href}
											className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
										>
											{link.label}
											<ArrowRight className="size-3.5" />
										</a>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>
		</AnimatedSection>
	);
}
