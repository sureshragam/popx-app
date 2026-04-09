import styles from "./Button.module.css";

const Button = ({
	children,
	variant = "primary",
	onClick,
	type = "button",
	disabled,
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
export default Button;
