import styles from "./Button.module.css";

/**
 *@param { Modal status }
 * @returns Button Component
 */
const Button = ({ setModal }) => {
  return (
    <button onClick={setModal} className={styles.btn}>
      Click Here!
    </button>
  );
};

export { Button };
