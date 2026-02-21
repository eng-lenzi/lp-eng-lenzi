import { motion, useInView } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

export function AnimatedSection({
	children,
	className,
	delay = 0,
	id,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	id?: string;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			id={id}
			initial={{ opacity: 0, y: 40 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
			transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function AnimatedCard({
	children,
	className,
	delay = 0,
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			animate={
				isInView
					? { opacity: 1, y: 0, scale: 1 }
					: { opacity: 0, y: 30, scale: 0.95 }
			}
			transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function AnimatedNumber({
	value,
	suffix = "",
}: {
	value: string;
	suffix?: string;
}) {
	const [displayValue, setDisplayValue] = useState(value);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		const numValue = parseInt(value.replaceAll(/\D/g, ""), 10);
		if (isNaN(numValue)) {
			setDisplayValue(value);
			return;
		}

		const duration = 2000;
		const steps = 60;
		const increment = numValue / steps;
		let current = 0;

		const timer = setInterval(() => {
			current += increment;
			if (current >= numValue) {
				setDisplayValue(value);
				clearInterval(timer);
			} else {
				setDisplayValue(Math.floor(current).toString());
			}
		}, duration / steps);

		return () => clearInterval(timer);
	}, [isInView, value]);

	return (
		<span ref={ref}>
			{displayValue}
			{suffix}
		</span>
	);
}

export function FloatingElement({
	children,
	className,
	style,
}: {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}) {
	return (
		<motion.div
			animate={{
				y: [0, -10, 0],
				rotate: [0, 2, 0],
			}}
			transition={{
				duration: 4,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	);
}

export function GlowingOrb({
	className,
	color = "primary",
}: {
	className?: string;
	color?: "primary" | "blue" | "orange" | "emerald";
}) {
	const colors = {
		primary: "bg-primary/20",
		blue: "bg-blue-500/20",
		orange: "bg-orange-500/20",
		emerald: "bg-emerald-500/20",
	};

	return (
		<motion.div
			animate={{
				scale: [1, 1.2, 1],
				opacity: [0.3, 0.5, 0.3],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			className={`absolute rounded-full blur-3xl ${colors[color]} ${className}`}
		/>
	);
}

export function HeroParticles() {
	const baseId = useId();
	const particleKeys = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
	];

	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			{particleKeys.map((k) => (
				<motion.div
					key={`${baseId}-${k}`}
					className="absolute h-1 w-1 rounded-full bg-primary/30"
					initial={{
						x: Math.random() * 100 + "%",
						y: Math.random() * 100 + "%",
						opacity: 0,
					}}
					animate={{
						y: [null, Math.random() * -100 + "px"],
						opacity: [0, 0.8, 0],
					}}
					transition={{
						duration: Math.random() * 3 + 2,
						repeat: Infinity,
						delay: Math.random() * 2,
						ease: "linear",
					}}
					style={{
						left: Math.random() * 100 + "%",
					}}
				/>
			))}
		</div>
	);
}

export function EmojiRenderer({ emoji }: { emoji: string }) {
	return (
		<span role="img" aria-label={emoji} className="mr-1.5">
			{emoji}
		</span>
	);
}

export function Flame({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
		>
			<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
		</svg>
	);
}

export function ElevatorDiagram({ className }: { className?: string }) {
	const windowRows = [0, 1, 2, 3];
	const windowCols = [0, 1, 2];

	return (
		<div className={`relative w-16 h-16 sm:w-20 sm:h-20 ${className}`}>
			<div className="absolute inset-0 grid grid-rows-4 gap-y-2 p-2 pb-4 justify-evenly">
				{windowRows.map((row) => (
					<div
						key={row}
						className="grid grid-cols-3 gap-0.5 justify-between evenly"
					>
						{windowCols.map((col) => (
							<div
								key={`${row}-${col}`}
								className="bg-slate-800/20 rounded-sm size-3"
							/>
						))}
					</div>
				))}
			</div>

			<motion.div
				className="absolute left-1/2 -translate-x-1/2 w-6 h-5 bg-gradient-to-br from-slate-800 via-slate-500 to-slate-400 border border-slate-300/50"
				style={{ top: "20%" }}
				animate={{ y: ["0%", "215%", "0%"] }}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				<div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-slate-600/60" />
			</motion.div>
		</div>
	);
}

export function PressureVesselDiagram({ className }: { className?: string }) {
	const baseId = useId();
	const steamKeys = "abcdefghijklmnopqrstuvwxyz".split("");
	const vaporKeys = "abcdefghijklmnopqrst".split("");
	
	return (
		<div className={`relative w-16 h-16 sm:w-20 sm:h-20 ${className}`}>
			<div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-slate-500/60 rounded-t-sm" />
			
			<div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-11 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600 rounded-2xl border border-slate-400/30">
				<div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-slate-700/40 rounded" />
			</div>
			
			{vaporKeys.map((k, i) => (
				<motion.div
					key={`${baseId}-vapor-${k}`}
					className="absolute w-1 h-1 rounded-full bg-slate-400/50"
					style={{ left: `${40 + (i % 10) * 2}%`, top: "8%" }}
					animate={{
						y: [0, -28 - (i % 5) * 4],
						opacity: [0.5, 0],
						scale: [0.4, 1, 1.5],
						x: [0, (i - 5) * 3],
					}}
					transition={{
						duration: 4 + (i % 3) * 0.5,
						repeat: Infinity,
						delay: i * 0.1,
						ease: "easeOut",
					}}
				/>
			))}

			{steamKeys.map((k, i) => (
				<motion.div
					key={`${baseId}-steam-${k}`}
					className="absolute w-0.5 h-0.5 rounded-full bg-slate-300/40"
					style={{ left: `${42 + (i % 8) * 2}%`, top: "5%" }}
					animate={{
						y: [-22 - i * 2],
						opacity: [0.4, 0],
						scale: [0.3, 0.8],
						x: [0, (i - 4) * 4],
					}}
					transition={{
						duration: 3.5 + i * 0.15,
						repeat: Infinity,
						delay: i * 0.12,
						ease: "easeOut",
					}}
				/>
			))}

			<div className="absolute top-4 right-0.5 w-1.5 h-2.5 bg-slate-500/40 rounded-sm" />
			<div className="absolute top-5 left-0.5 w-1.5 h-2 bg-slate-400/30 rounded-sm" />
			<div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-2 bg-slate-500/50 rounded-b-sm" />
		</div>
	);
}
