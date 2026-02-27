import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

export function AnimatedSection({
	children,
	className,
	delay = 0,
	id,
	as = "section",
	...props
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	id?: string;
	as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const reduceMotion = useReducedMotion();
	const Component = motion[as as "section"] ?? motion.section;

	return (
		<Component
			ref={ref}
			id={id}
			initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
			animate={
				reduceMotion
					? { opacity: 1 }
					: isInView
						? { opacity: 1 }
						: { opacity: 0 }
			}
			transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay, ease: "easeOut" }}
			className={className}
			{...props}
		>
			{children}
		</Component>
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
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			ref={ref}
			initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
			animate={
				reduceMotion
					? { opacity: 1 }
					: isInView
						? { opacity: 1 }
						: { opacity: 0 }
			}
			transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay, ease: "easeOut" }}
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
	const reduceMotion = useReducedMotion();

	useEffect(() => {
		if (reduceMotion) {
			setDisplayValue(value);
			return;
		}

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
	}, [isInView, value, reduceMotion]);

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
	const reduceMotion = useReducedMotion();

	return (
		<motion.div
			animate={reduceMotion ? undefined : {
				y: [0, -10, 0],
				rotate: [0, 2, 0],
			}}
			transition={reduceMotion ? undefined : {
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
	const reduceMotion = useReducedMotion();
	const colors = {
		primary: "bg-primary/20",
		blue: "bg-blue-500/20",
		orange: "bg-orange-500/20",
		emerald: "bg-emerald-500/20",
	};

	return (
		<motion.div
			animate={reduceMotion ? undefined : {
				scale: [1, 1.2, 1],
				opacity: [0.3, 0.5, 0.3],
			}}
			transition={reduceMotion ? undefined : {
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
	const reduceMotion = useReducedMotion();
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

	if (reduceMotion) {
		return null;
	}

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
