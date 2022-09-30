import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.User}>
      <img
        src='https://placeimg.com/192/192/people'
        className={styles.roundImage}
        alt='Profile'
      />
      <span className={styles.userName}>James Franco</span>
    </div>
  );
};

export { UserProfile };
