import React, { ReactNode } from "react";

type ButtonProps = {
	text?: string;
	icon?: ReactNode;
	color?: string;
	width: number;
};

function Button({ text, icon, color, width }: ButtonProps) {
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
