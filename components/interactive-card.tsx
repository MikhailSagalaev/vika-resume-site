"use client";

import React, {useRef, useState, PropsWithChildren, MouseEvent} from "react";

type InteractiveCardProps = {
	className?: string;
	spotColor?: string; // e.g. rgba(168,85,247,0.25)
	borderFrom?: string; // tailwind color class start, e.g. from-fuchsia-500
	borderTo?: string; // tailwind color class end, e.g. to-cyan-400
};

export const InteractiveCard: React.FC<PropsWithChildren<InteractiveCardProps>> = ({
	children,
	className,
	spotColor = "rgba(168,85,247,0.22)", // fuchsia-600 ~ accent
	borderFrom = "from-fuchsia-500",
	borderTo = "to-cyan-400",
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [tilt, setTilt] = useState({rx: 0, ry: 0});
	const [pos, setPos] = useState({x: 0, y: 0});

	const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setPos({x, y});
		// tilt calc
		const px = x / rect.width - 0.5; // -0.5..0.5
		const py = y / rect.height - 0.5;
		const max = 10; // deg
		setTilt({
			rx: -(py * max),
			ry: px * max,
		});
	};

	const onMouseLeave = () => {
		setTilt({rx: 0, ry: 0});
	};

	return (
		<div
			ref={ref}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
			className={
				[
					"group relative [transform-style:preserve-3d]",
					"rounded-2xl",
					"transition-transform duration-300 will-change-transform",
					className || "",
				].join(" ")
			}
			style={{
				transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
			}}
		>
			{/* animated gradient border */}
			<div
				aria-hidden
				className={[
					"pointer-events-none absolute -inset-px rounded-2xl",
					"bg-gradient-to-r",
					borderFrom,
					borderTo,
					"opacity-60 group-hover:opacity-100",
					"transition-opacity duration-300",
				].join(" ")}
			/>

			{/* inner content with spotlight following cursor */}
			<div className="relative rounded-2xl bg-content1 p-6 border border-default-200/50 overflow-hidden">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, ${spotColor}, transparent 60%)`,
						opacity: 0.9,
						transition: "background-position 0.1s ease",
					}}
				/>
				{/* Content */}
				<div className="relative z-[1]">
					{children}
				</div>
			</div>
		</div>
	);
};

export default InteractiveCard;


