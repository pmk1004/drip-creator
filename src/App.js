import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./app/provider/themeContext";
import { GalleryContext } from "./app/provider/galleryContext";
import "./app/styles/common.css";
import Header from "./widgets/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Footer from "./widgets/Footer";

const galleryData = [
  {id: 1, drip: "머리가 안 좋은데 왜 니 애비보다 연봉이 10배 이상 높을까?", author: "한주먹", imgSrc: "한주먹_1.jpg"},
  {id: 2, drip: "애미뒤진 새끼들 이악물고 악플달러 오는거 존나 웃기네ㅋㅋㅋ", author: "한주먹", imgSrc: "한주먹_2.jpg"},
  {id: 3, drip: "니 애미가 너 꼴뵈기 싫어하는 것 보다 더할까ㅋㅋ", author: "한주먹", imgSrc: "한주먹_3.png"},
  {id: 3, drip: "3일 안에 니 애미 뒤지라고 오늘부터 제사지냄", author: "한주먹", imgSrc: "한주먹_4.png"},
];

const lightDrip = [
  {drip: "니 엄마 인중냄새 방구냄새"},
  {drip: "니 아빠 발가락 무좀 있음"}
]

const heavyDrip = [
  {drip: "애미 손잡고 장애인들이랑 재활센터에서 보x 재활이나 시켜드려라"},
  {drip: "니 애미 x지 실험용 침팬치 성용 극에 달했을 때 진정시켜줄라고 대주는 혹성탈출 보x"}
]

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === null ? true : storedTheme === "true"; // 기본값을 true로
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDark");
    if (storedTheme !== String(isDark)) {
      localStorage.setItem("isDark", isDark);
      console.log("isDark 변경", isDark);
    }
  }, [isDark]); // isDark가 변경될 때만 실행
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <GalleryContext.Provider value={galleryData}>
        <div className={isDark ? "App dark" : "App"}>
          <Header />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" exact element={<Home drips={[lightDrip, heavyDrip]}/>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </GalleryContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
