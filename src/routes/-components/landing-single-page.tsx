import { useState, useEffect } from "react";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";
import { ContentHub } from "./content-hub";
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

	useEffect(() => {
		const canonicalUrl = `${window.location.origin}/`;
		const isLocalEnv = ["localhost", "127.0.0.1"].includes(window.location.hostname);
		const robotsContent = isLocalEnv
			? "noindex,nofollow,noarchive,nosnippet"
			: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

		const canonicalLink = document.querySelector('link[rel="canonical"]');
		if (canonicalLink) {
			canonicalLink.setAttribute("href", canonicalUrl);
		}

		const ogUrl = document.querySelector('meta[property="og:url"]');
		if (ogUrl) {
			ogUrl.setAttribute("content", canonicalUrl);
		}

		const robotsMeta = document.querySelector('meta[name="robots"]');
		if (robotsMeta) {
			robotsMeta.setAttribute("content", robotsContent);
		}

		const googleBotMeta = document.querySelector('meta[name="googlebot"]');
		if (googleBotMeta) {
			googleBotMeta.setAttribute("content", robotsContent);
		}
	}, []);

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
				<Hero />
				<ContentHub />
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
