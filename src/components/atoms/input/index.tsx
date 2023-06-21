'use client';
import React from "react";

interface InputType {
	id?: string;
	name?: string;
	type?: string;
	autoComplete?: string;
	className?: any;
	onChange?: (event: any) => void|string;
}

const InputBox = ({
	id,
	name,
	type,
	autoComplete,
	className,
	onChange,
}: InputType) => {
	return (
		<>
			<input
				id={id}
				name={name}
				type={type}
				autoComplete={autoComplete}
				required
				className={className}
				onChange={onChange}
			/>
		</>
	);
};

export default InputBox;
