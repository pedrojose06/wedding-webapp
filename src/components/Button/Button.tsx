import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: ReactNode;
	to: string;
}

function Button({ text, icon, color, to, ...props }: IButton) {
	return (
		<Link to={to} className="flex items-center justify-center font-bold">
			<button type="button" {...props}>
				{icon}
				{text}
			</button>
		</Link>
	);
}

export default Button;
