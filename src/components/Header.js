import React from "react";
import dndLogo from "../images/Screenshot_2022-12-25_at_5.53.17_PM-removebg-preview.png";

const Header = () => {
  return (
    <div>
      <header>
        <img className="dnd__mainLogo" src={dndLogo} alt="" />
        <div>
          <h2>D N D</h2>
          <h2>TO~DO</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
