import React, { useContext, useRef, useCallback } from "react";
import { GalleryContext } from "../app/provider/galleryContext";
import { slideItem } from "../features/slideItem";
import "../app/styles/gallery.css";


function Gallery() {
  const galleryDatas = useContext(GalleryContext);
  const galleryRef = useRef();
  const debounceTimer = useRef(null); // debounce 타이머 저장

  const handleClick = useCallback((direction) => {
    if (debounceTimer.current) return; // 이미 타이머가 설정된 경우 무시

    slideItem(galleryRef.current, galleryDatas.length, direction);
    
    // 0.6초 후 타이머 초기화
    debounceTimer.current = setTimeout(() => {
      debounceTimer.current = null;
    }, 600);
  }, []);

  return (
    <div className="gallery-slider">
      <div className="flex align-center">
        <button className="slide-btn left" onClick={() => handleClick('prev')}>&lt;</button>
        <div className="gallery-wrapper overflow">
          <div className="gallery-items" ref={galleryRef}>
            {galleryDatas.map((gallery) => (
              <div key={gallery.id} className="slide">
                <img src={require("../imgs/" + gallery.imgSrc)} alt={gallery.id}></img>
              </div>
            ))}
          </div>
        </div>
        <button className="slide-btn right" onClick={() => handleClick('next')}>&gt;</button>
      </div>
    </div>
  );
}

export default Gallery;
