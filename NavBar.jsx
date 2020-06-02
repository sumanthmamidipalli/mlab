import React from "react";
import LogoContainer from "./logoContainer";
import Menu from "./menu";

function NavBar() {
  return (
    <div className="navWrapper">
      <LogoContainer />
      <Menu />
    </div>
  );
}

export default NavBar;
