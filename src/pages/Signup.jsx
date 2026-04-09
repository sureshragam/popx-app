import { useState } from "react";
import InputField from "../components/InputField/InputField";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import Button from "../components/Button/Button";
import { useNavigate, Navigate } from "react-router-dom";
import {
	isEmailValid,
	isPasswordValid,
	isPhoneValid,
} from "../utils/validation";
import styles from "./Signup.module.css";

const Signup = () => {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		email: "",
		password: "",
		company: "",
		agency: "",
	});

	const [error, setError] = useState({
		userExistError: "",
		emailError: "",
		passwordError: "",
		phoneError: "",
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validForm = (users, form) => {
		let tempValid = true;
		if (!isEmailValid(form.email)) {
			setError("Please enter a valid email");
			tempValid = false;
		}

		if (!isPasswordValid(form.password)) {
			setError((prev) => {
				return {
					...prev,
					passwordError: "Password must be at least 6 characters",
				};
			});
			tempValid = false;
		}
		if (!isPhoneValid(form.phone)) {
			setError((prev) => {
				return {
					...prev,
					phoneError: "Please enter a valid phone number ",
				};
			});
			tempValid = false;
		}

		const exists = users.some((u) => u.email === form.email);

		if (exists) {
			setError((prev) => {
				return {
					...prev,
					userExistError: "User already Exist",
				};
			});
			tempValid = false;
		}
		return tempValid;
	};

	const handleSubmit = (e) => {
		setError({});
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem("users")) || [];
		if (!validForm(users, form)) return;
		users.push(form);
		localStorage.setItem("users", JSON.stringify(users));

		navigate("/login");
	};

	const isFormValid =
		form.name && form.phone && form.email && form.password && form.agency;

	const user = localStorage.getItem("loggedInUser");

	if (user) {
		return <Navigate to="/settings" replace />;
	}

	return (
		<div className={styles.container}>
			<h2>Create your PopX account</h2>

			<form className={styles.signupForm} onSubmit={handleSubmit}>
				<div className={styles.fields}>
					<InputField
						label="Full Name"
						name="name"
						required
						value={form.name}
						onChange={handleChange}
					/>

					<InputField
						label="Phone number"
						name="phone"
						required
						value={form.phone}
						onChange={handleChange}
						error={error.phoneError}
					/>

					<InputField
						label="Email address"
						name="email"
						type="email"
						required
						value={form.email}
						onChange={handleChange}
						error={error.emailError}
					/>

					<InputField
						label="Password"
						name="password"
						type="password"
						required
						value={form.password}
						onChange={handleChange}
						error={error.passwordError}
					/>

					<InputField
						label="Company name"
						name="company"
						value={form.company}
						onChange={handleChange}
					/>

					<RadioGroup
						label="Are you an Agency?"
						name="agency"
						required
						value={form.agency}
						onChange={handleChange}
						options={[
							{ label: "Yes", value: "yes" },
							{ label: "No", value: "no" },
						]}
					/>
				</div>

				{error && <p className={styles.error}>{error.userExistError}</p>}

				<Button type="submit" variant="primary" disabled={!isFormValid}>
					Create Account
				</Button>
			</form>
		</div>
	);
};

export default Signup;
