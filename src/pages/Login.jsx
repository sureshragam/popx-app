import { useState } from "react";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import styles from "./Login.module.css";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const users = JSON.parse(localStorage.getItem("users")) || [];

		const user = users.find(
			(u) => u.email === form.email && u.password === form.password,
		);

		if (user) {
			localStorage.setItem("loggedInUser", JSON.stringify(user));
			navigate("/settings");
		} else {
			setError("Invalid email or password");
		}
	};

	const isLoginValid = form.email && form.password;

	const user = localStorage.getItem("loggedInUser");

	if (user) {
		return <Navigate to="/settings" replace />;
	}

	return (
		<div className={styles.container}>
			<h2>Signin to your PopX account</h2>

			<p className={styles.subtitle}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			</p>

			<form onSubmit={handleSubmit}>
				<InputField
					label="Email Address"
					name="email"
					type="email"
					required
					value={form.email}
					onChange={handleChange}
				/>

				<InputField
					label="Password"
					name="password"
					type="password"
					required
					value={form.password}
					onChange={handleChange}
				/>

				{error && <p className={styles.error}>{error}</p>}

				<Button type="submit" variant="primary" disabled={!isLoginValid}>
					Login
				</Button>
			</form>
		</div>
	);
};

export default Login;
