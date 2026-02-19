import { useState, useEffect } from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { Areas } from "./areas";
import { MechanicalTests } from "./mechanical-tests";
import { OtherAreas } from "./other-areas";
import { Credentials } from "./credentials";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function LandingSinglePage() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
				<Hero />
				<Services />
				<Areas />
				<MechanicalTests />
				<OtherAreas />
				<Credentials />
				<Contact />
			</main>

			<Footer />
		</div>
	);
}
