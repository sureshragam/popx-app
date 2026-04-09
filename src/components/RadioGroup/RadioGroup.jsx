import styles from "./RadioGroup.module.css";

const RadioGroup = ({ label, options, name, value, onChange, required }) => {
	return (
		<div className={styles.group}>
			<label className={styles.label}>
				{label}
				{required && <span className={styles.required}> *</span>}
			</label>

			<div className={styles.options}>
				{options.map((option) => (
					<label key={option.value} className={styles.option}>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={onChange}
						/>
						{option.label}
					</label>
				))}
			</div>
		</div>
	);
};

export default RadioGroup;
