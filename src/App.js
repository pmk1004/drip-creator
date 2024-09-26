import React, { useState, useEffect, useRef } from "react";
import { Form, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./app/provider/themeContext";
import { GalleryContext } from "./app/provider/galleryContext";
import "./app/styles/common.css";
import "./app/styles/home.css";
import "./app/styles/gallery.css";
import "./app/styles/outline.css";
import Header from "./widgets/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Footer from "./widgets/Footer";
import {galleryData, lightDrip, heavyDrip} from './datas/data'

function App() {
  let header = useRef();
  let navigator = useRef();

  const getHeader = (headerRef) => {
    header.current = headerRef.current; 
  }

  const getNavigator = (navigatorRef) => {
    navigator.current = navigatorRef.current; 
  }

  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === null ? true : storedTheme === "true"; 
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDark");
    if (storedTheme !== String(isDark)) {
      localStorage.setItem("isDark", isDark);
    }
  }, [isDark]); 

  useEffect(() => {
    if (window.location.pathname.endsWith('/about')) {
      const observer = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) {
          navigator.current.classList.add('nav-fixed');
        } else {
          navigator.current.classList.remove('nav-fixed');
        }
      }, { threshold: 0.01 });

      observer.observe(header.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <GalleryContext.Provider value={galleryData}>
        <div className={isDark ? "App dark" : "App"}>
          <Header getHeader={getHeader}/>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" exact element={<Home drips={[lightDrip, heavyDrip]}/>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About getNavigator={getNavigator}/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </GalleryContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
