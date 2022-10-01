import styles from "./DropDown.module.css";

/**
 * 
 * @returns dropdown UI element
 */
const DropDown = () => {
  return (
    <div className={styles.dropDown}>
      <div className={styles.publicBox}>
        <div className={styles.publicContent}>
          <div className={styles.flex}>
            <span class='material-icons'>public</span>
            <span className={styles.publicText}>Public</span>
          </div>
          <span className={styles.description}>Display to everyone</span>
        </div>
      </div>
      <div className={styles.privateBox}>
        <div className={styles.publicContent}>
          <div className={styles.flex}>
            <span class='material-icons'>lock</span>

            <span className={styles.publicText}>Private</span>
          </div>
          <span className={styles.description}>Visible to your followers</span>
        </div>
      </div>
    </div>
  );
};

export { DropDown };
