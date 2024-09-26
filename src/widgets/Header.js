import React, { useEffect, useContext, useRef } from "react";
import sun from "../imgs/sun.png";
import moon from "../imgs/moon.png";
import { ThemeContext } from "../app/provider/themeContext";

function Header(props) {
  const headerRef = useRef();
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  useEffect(() => {
    props.getHeader(headerRef);
    // console.log(headerRef.current)
  })
  return (
    <div className="header" ref={headerRef}>
      <h1 className="logo">📕명언 생성기</h1>
      <nav>
        <ul>
          <li>
            <a href="/">생성하기</a>
          </li>
          <li>
            <a href="/gallery">명언갤러리</a>
          </li>
          <li>
            <a href="/about">개요 및 사용법</a>
          </li>
        </ul>
        {/* <div className="toggle_container" onClick={toggleTheme}>
          <label className={isDark ? "toggleSwitch active" : "toggleSwitch"}>
            <span className="toggleButton">
              <img className="display_mode_icon" src={isDark ? moon : sun} />
            </span>
          </label>
        </div> */}
      </nav>
    </div>
  );
}

export default Header;
