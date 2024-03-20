import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import styles from "../Components/Nav.module.css";
import { CiSearch } from "react-icons/ci";
import SearchFilter from "./SearchFilter";

const Nav = () => {
  const array = [
    { name: "shishir", number: 980823 },
    { name: "yuv", number: 934523 },
    { name: "aavash", number: 2343523 },
    { name: "naran", number: 235345 },
  ];

  const [arr, setArr] = useState(array);

  const [userValues, setUserValues] = useState();

  const giveValue = (event) => {
    setUserValues(event.target.value);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <FiAlignJustify className={styles.baricon} />

        <div className={styles.searchbox}>
          <div className={styles.searchI}>
            <CiSearch className={styles.searchicon} />
          </div>

          <input
            type="search"
            placeholder="Search Name here"
            onChange={giveValue}
          />
        </div>
      </div>
      <div className={styles.navbarheader}>
        <p>Nepal Government Contact List</p>
      </div>
      <br />
      <br />
      <hr />

      <SearchFilter arr={arr} userValues={userValues} />
    </div>
  );
};

export default Nav;
