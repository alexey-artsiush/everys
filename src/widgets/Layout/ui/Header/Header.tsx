import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <p className={classes.logo}>Логотип</p>
    </header>
  );
}

export default Header;
