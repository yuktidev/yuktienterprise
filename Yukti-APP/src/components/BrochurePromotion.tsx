import React, { useState } from "react";

/**
 * BrochurePromotion
 *
 * Displays a floating promotional image
 * with smooth fade-in and fade-out animation.
 */
type BrochurePromotionProps = {
	imageSrc: string;
	width: number;
	height: number;
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
	onClose?: () => void;
};

const BrochurePromotion: React.FC<BrochurePromotionProps> = ({
	imageSrc,
	width,
	height,
	top,
	left,
	bottom,
	right,
	onClose,
}) => {
	/**
	 * Local state to control fade-out animation
	 */
	const [isClosing, setIsClosing] = useState(false);

	/**
	 * Handles close click:
	 * 1. Trigger fade-out
	 * 2. After animation, notify parent to remove component
	 */
	const handleClose = () => {
		setIsClosing(true);

		// Match this timeout with CSS animation duration
		setTimeout(() => {
			onClose?.();
		}, 300);
	};

	return (
		<div
			style={{
				position: "fixed",
				width,
				height,
				top: top !== undefined ? `${top}px` : undefined,
				left: left !== undefined ? `${left}px` : undefined,
				bottom: bottom !== undefined ? `${bottom}px` : undefined,
				right: right !== undefined ? `${right}px` : undefined,
				zIndex: 100000,

				/* Animation styles */
				opacity: isClosing ? 0 : 1,
				transform: isClosing ? "scale(0.5)" : "scale(1)",
				transition: "opacity 900ms ease, transform 600ms ease",
			}}
		>
			{/* Close Button */}
			<button
				onClick={handleClose}
				style={{
					position: "absolute",
					top: "-14px",
					right: "0px",
					width: "24px",
					height: "24px",
					borderRadius: "50%",
					border: "none",
					background: "gray",
					color: "#fff",
					cursor: "pointer",
				}}
			>
				✕
			</button>

			{/* Image */}
			<img
				src={imageSrc}
				alt="Promotion"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "contain",
					borderRadius: "12px",
					boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
				}}
			/>
		</div>
	);
};

export default BrochurePromotion;
