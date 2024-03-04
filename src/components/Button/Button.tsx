import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	icon?: ReactNode;
	to?: string;
	className?: string;
	onClick?: () => void;
}

function Button({ text, icon, to, className, onClick }: IButton) {
	return (
		<Link
			className={`flex items-center justify-center font-semibold ${className}`}
			to={to ?? "/"}
			onClick={onClick}
		>
			{icon}
			{text}
		</Link>
	);
}

export default Button;
