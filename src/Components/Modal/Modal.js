import styles from "./Modal.module.css";

/**
 *
 * @param { modalstatus ,setModalStatus }
 * @returns Modal component
 */

const Modal = ({ open, setOpen }) => {
  return (
    <>
      <div className={styles.modalBody}>
        <section className={styles.topSection}>
          <h3 className={styles.header}>Create a new post</h3>
          <button onClick ={()=> setOpen(false)} className={styles.headerBtn}>
            <span class='material-icons'>close</span>
          </button>
        </section>
        <section className={styles.middleSection}>
            <div className={styles.profileContainer}>
                <div className={styles.User}>
                   <img src="https://placeimg.com/192/192/people" className={styles.roundImage} alt="Profile" />
                   <span>James Franco</span>
                </div>
            </div>
            <div>World</div>
        </section>
        <section className={styles.bottomSection}>Bottom</section>
      </div>
    </>
  );
};

export { Modal };
