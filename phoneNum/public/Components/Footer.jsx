import React from "react";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.first}>
        <p id={styles.getInTouch}> GET IN TOUCH </p> <br></br>
        <div className={styles.socialIcon}>
          <div id={styles.fb}>
            <FaFacebook className={styles.FaFacebook} />
            <br></br>
            <p className={styles.socialName}> Self Tech</p>
          </div>

          <div id={styles.twiter}>
            <FaTwitter className={styles.FaTwitter} />
            <br></br>
            <p className={styles.socialName}> Self Tech</p>
          </div>
          <div id={styles.insta}>
            <FaInstagramSquare className={styles.FaInstagramSquare} />
            <br></br>
            <p className={styles.socialName}> Self Tech</p>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <p className={styles.suggestNum}> Suggest Numbers </p>
        <input type="text" name="suggestion" />

        <input type="submit" id={styles.syggestBtn} />
      </div>

      <div className={styles.third}></div>

      <img
        id={styles.nepalLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png"
      />
      <br></br>
      <p id={styles.copyright}> © Self Tech Pvt. Ltd.</p>
    </div>
  );
};

export default Footer;
