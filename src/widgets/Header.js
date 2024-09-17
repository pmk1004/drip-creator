import React, {useState, useContext} from "react";
import sun from "../imgs/sun.png";
import moon from "../imgs/moon.png";
import { ThemeContext } from "../app/provider/themeContext";

function Header() {
  const {isDark, setIsDark} = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <div className="header">
    <h1 className="logo">Logo</h1>
    <nav>
      <ul>
        <li><a href="/">생성하기</a></li>
        <li><a href="/">명언갤러리</a></li>
        <li><a href="/">개요</a></li>
      </ul>
      <div className="toggle_container" onClick={toggleTheme}>
        <label className={isDark ? 'toggleSwitch active' : 'toggleSwitch'}>
          <span className="toggleButton">
            <img className="display_mode_icon" src={isDark ? moon : sun} />
          </span>
        </label>
      </div>
    </nav>
    </div>
  );
}

export default Header;