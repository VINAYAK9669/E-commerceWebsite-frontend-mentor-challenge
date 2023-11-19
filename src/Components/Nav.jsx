import styles from "./Nav.module.css";
import { useState } from "react";

// Importing Images/icon
import cartImage from "../images/icon-cart.svg";
import avtar from "../images/image-avatar.png";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";

// =========================COMPONENT DETAILS=============================

/*

This component is responsible to render the responsive navigation bar.

Two props are passes
1) Carthandler - This is the function when it calls the cart component will render
2) ItemCount - We can show this information in the cart icon.

*/

function Nav({ Carthandler, ItemCount, menu, setMenu }) {
  function handleMenu(e) {
    if (e.target.id === "flipMenu") {
      const value = menu ? !menu : !menu;
      setMenu(value);
    } else {
      setMenu(false);
    }
  }
  return (
    <nav>
      <div
        className={`${styles.leftside} ${
          menu ? styles.active : styles.deactivate
        }`}
      >
        <ul
          className={`${styles.leftsidemenu} ${
            menu ? styles.deactivate : styles.active
          }`}
        >
          <li onClick={(e) => handleMenu(e)}>
            <img src={iconMenu} id="flipMenu"></img>
          </li>
          <li>sneakers</li>
        </ul>
        <ul
          className={`${styles.leftsidelist} ${
            menu ? styles.active : styles.deactivate
          }`}
          onClick={(e) => handleMenu(e)}
        >
          <li id="nav-icon">
            <img src={iconClose} id="flipMenu"></img>
          </li>
          <li id="nav-collection">Collections</li>
          <li id="nav-men">Men</li>
          <li id="nav-women">Women</li>
          <li id="nav-about">About</li>
          <li id="nav-contact">Contact</li>
        </ul>
      </div>
      <div className={styles.rightside}>
        <ul>
          <li onClick={(e) => Carthandler(e)}>
            <img src={cartImage} />
            {ItemCount > 0 && <span>{ItemCount}</span>}
          </li>
          <li className={styles.avtar} onClick={(e) => Carthandler(e)}>
            <img src={avtar} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
