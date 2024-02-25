import React, { ReactNode } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: ReactNode;
	color?: string;
	width: number;
}

function Button({ text, icon, color, width }: IButton) {
	return (
		<button
			className="flex items-center justify-center font-bold"
			type="button"
			style={{
				backgroundColor: color || "white",
				width: `${width}px`,
			}}
		>
			{icon}
			{text}
		</button>
	);
}

export default Button;
