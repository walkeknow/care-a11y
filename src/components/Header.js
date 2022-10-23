import React from "react";
import Images from "../assets/images";
import "../styles/HeaderStyles.css";

function Header() {
  return (
    <div className="header-background">
      <img src={Images.appLogo} className="logo" alt="CareA11y Logo"/>
    </div>
  );
}

export default Header;
