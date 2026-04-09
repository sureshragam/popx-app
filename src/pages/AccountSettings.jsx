import ProfileCard from "../components/ProfileCard/ProfileCard";
import styles from "./AccountSettings.module.css";

const AccountSettings = () => {
	const user = JSON.parse(localStorage.getItem("loggedInUser"));

	return (
		<div className={styles.container}>
			<div className={styles.titlecard}>
				<h2 className={styles.title}>Account Settings</h2>
			</div>
			<ProfileCard name={user?.name} email={user?.email} />
			<div className={styles.extraContainer}></div>
		</div>
	);
};

export default AccountSettings;
