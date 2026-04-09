import Button from "../components/Button/Button.jsx";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Welcome to PopX</h1>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

				<Button variant="primary" onClick={() => navigate("/signup")}>
					Create Account
				</Button>

				<Button variant="secondary" onClick={() => navigate("/login")}>
					Already Registered? Login
				</Button>
			</div>
		</div>
	);
};

export default Welcome;
