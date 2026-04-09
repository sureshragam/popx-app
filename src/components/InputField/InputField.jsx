import styles from "./InputField.module.css";

const InputField = ({
	label,
	type = "text",
	value,
	name,
	required = false,
	placeholder = "Enter " + label,
	onChange,
	error,
}) => {
	return (
		<div className={styles.field}>
			<div className={styles.inputWrapper}>
				<input
					id={name}
					className={styles.input}
					type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>

				<label htmlFor={name} className={styles.label}>
					{label}
					{required && <span className={styles.required}> *</span>}
				</label>
			</div>

			{error && <p className={styles.error}>{error}</p>}
		</div>
	);
};

export default InputField;
