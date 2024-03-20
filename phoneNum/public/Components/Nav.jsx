import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import styles from "../Components/Nav.module.css";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <FiAlignJustify className={styles.baricon} />

        <div className={styles.searchbox}>
          <div className={styles.searchI}>
            <CiSearch className={styles.searchicon} />
          </div>

          <input type="search" placeholder="Search Name" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
