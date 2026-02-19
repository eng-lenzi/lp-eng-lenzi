import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

import { Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Crosshair, Phone } from "lucide-react";

const menuItems = [
	{ label: "Início", href: "#inicio" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Áreas de Atuação", href: "#areas" },
	{ label: "Ensaios", href: "#ensaios" },
	{ label: "Credenciais", href: "#credenciais" },
	{ label: "Contato", href: "#contato" },
] as const;

function MobileMenu({
	isOpen,
	onClose,
	handleNavClick,
}: {
	isOpen: boolean;
	onClose: () => void;
	handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl"
						onClick={onClose}
					/>
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed right-0 top-16 bottom-0 z-50 flex w-80 max-w-[85vw] flex-col border-l bg-background shadow-xl"
					>
						<nav className="flex-1 space-y-2 overflow-y-auto px-6 py-8">
							{menuItems.map((item, idx) => (
								<motion.a
									key={item.label}
									href={item.href}
									onClick={(e) => {
										handleNavClick(e, item.href.replace("#", ""));
										onClose();
									}}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: idx * 0.05 }}
									className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition-colors hover:bg-primary/10 hover:pl-6"
								>
									{item.label}
									<ChevronRight className="size-5 text-muted-foreground" />
								</motion.a>
							))}
						</nav>
						<div className="border-t p-6">
							<Button asChild className="w-full" size="lg">
								<a href="tel:+5519997110785">Ligar agora</a>
							</Button>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

type HeaderProps = {
	mobileMenuOpen: boolean;
	setMobileMenuOpen: (open: boolean) => void;
};

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault();
		const element = document.querySelector(`#${id}`);
		if (element) {
			const headerOffset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<>
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
				handleNavClick={handleNavClick}
			/>
			<header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
				<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
					<button
						type="button"
						onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "inicio")}
						className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
					>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 200, damping: 15 }}
							className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25"
						>
							<Crosshair className="size-5" />
						</motion.div>
						<Text className="font-semibold hidden sm:block">
							Fernando Eugênio Lenzi
						</Text>
					</button>

					<nav className="hidden items-center gap-1 lg:flex">
						{menuItems.map((item, idx) => (
							<motion.a
								key={item.label}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href.replace("#", ""))}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: idx * 0.05 }}
								className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
							>
								{item.label}
							</motion.a>
						))}
					</nav>

					<div className="flex items-center gap-2">
						<ThemeToggle />
						<Button asChild size="sm" className="hidden sm:flex">
							<a href="tel:+5519997110785">
								<Phone className="size-4" />
								<span>Contato</span>
							</a>
						</Button>
						<Button
							variant="ghost"
							size="icon"
							className="lg:hidden"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
						</Button>
					</div>
				</div>
			</header>
		</>
	);
}
