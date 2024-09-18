import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./app/provider/themeContext";
import "./app/styles/common.css";
import Header from "./widgets/Header";
import Home from "./pages/Home";
import Footer from "./widgets/Footer";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === "true"; // 로컬 스토리지에서 초기값 읽기
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={isDark ? "App dark" : "App"}>
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
