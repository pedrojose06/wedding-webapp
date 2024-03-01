interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	text: string;
	isBlocked?: boolean;
	value?: string | number;
}

export default function Input({
	text,
	isBlocked,
	value,
	...props
}: IInputProps) {
	return (
		<div>
			<h3 className="mt-4 mb-3">{text}</h3>
			<input
				{...props}
				value={value}
				readOnly={isBlocked}
				className="bg-indigo-100 rounded-xl h-12 w-full max-w-96 pl-3"
			/>
		</div>
	);
}
