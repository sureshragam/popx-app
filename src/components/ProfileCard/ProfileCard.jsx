import profile from "../../assets/Ellipse114.png";
import styles from "./ProfileCard.module.css";
import CameraIcon from "../../assets/camera.svg";

const ProfileCard = ({ name, email }) => {
	return (
		<div className={styles.card}>
			<div className={styles.profileSection}>
				<div className={styles.avatarWrapper}>
					<img src={profile} alt="profile" className={styles.avatar} />

					<div className={styles.cameraIcon}>
						<img src={CameraIcon} alt="camera" />
					</div>
				</div>

				<div className={styles.userInfo}>
					<h3>{name}</h3>
					<p>{email}</p>
				</div>
			</div>

			<p className={styles.description}>
				Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
				Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
			</p>
		</div>
	);
};

export default ProfileCard;
