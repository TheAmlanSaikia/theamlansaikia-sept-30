import styles from "./Modal.module.css";
import { UserProfile } from "../User Profile/UserProfile";
import { DropDown } from "../Dropdown/DropDown";
import { useState } from "react";
/**
 *
 * @param { modalstatus ,setModalStatus }
 * @returns Modal component
 */

const Modal = ({ open, setOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [textValue, setTextValue] = useState(0);
  const [imageFile, setImageFile] = useState(null);

  /**
   *
   * @param {event} e
   * returns setState to the image file;
   */

  const uploadImageFile = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  /**
   *
   * @param {}
   * Triggers submission
   */

  const submitData = () => {
    setOpen(false);
    setImageFile(null);
  };

  return (
    <>
      <div className={styles.modalBody}>
        <section className={styles.topSection}>
          <h3 className={styles.header}>Create a new post</h3>
          <button onClick={() => setOpen(false)} className={styles.headerBtn}>
            <span class='material-icons'>close</span>
          </button>
        </section>
        <section className={styles.middleSection}>
          <div className={styles.profileContainer}>
            <UserProfile />
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={styles.visibilityBtn}>
              <span class='material-icons'>public</span>
              Public
              <span class='material-icons'>expand_more</span>
            </button>
            {dropdownOpen && <DropDown />}
          </div>
          <div className={styles.inputBox}>
            <textarea
              className={styles.input}
              placeholder='Whats Happening..'
              onChange={(e) => setTextValue(e.target.value)}
            />
            <span className={styles.wordCount}>
              {textValue.length ? textValue.length : 0}/250
            </span>
          </div>
          {imageFile && (
            <div className={styles.imageBox}>
              <img
                src={imageFile && imageFile}
                className={styles.responsiveImage}
                alt='Upload'
              />
            </div>
          )}
        </section>
        <section className={styles.bottomSection}>
          <div className={styles.buttonsBox}>
            <input
              type='file'
              id='upload-btn'
              hidden
              onChange={uploadImageFile}
            />
            <label for='upload-btn' className={styles.uploadButton}>
              <span class='material-icons'>image</span>
            </label>
            <input type='file' id='emoji-btn' hidden />
            <label for='emoji-btn' className={styles.uploadButton}>
              <span class='material-icons'>tag_faces</span>
            </label>
          </div>
          <button onClick={submitData} className={styles.sendBtn}>
            Send Post <span class='material-icons'>send</span>
          </button>
        </section>
      </div>
    </>
  );
};

export { Modal };
