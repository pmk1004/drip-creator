import React, { useContext, useRef, useCallback } from "react";
import { GalleryContext } from "../app/provider/galleryContext";
import { slideItem } from "../features/slideItem";

function Gallery() {
  const galleryDatas = useContext(GalleryContext);
  const galleryRef = useRef();
  const debounceTimer = useRef(null); 

  const handleClick = useCallback((direction) => {
    if (debounceTimer.current) return;

    slideItem(galleryRef.current, galleryDatas.length, direction);

    // 0.6초 후 타이머 초기화
    debounceTimer.current = setTimeout(() => {
      debounceTimer.current = null;
    }, 600);
  }, []);

  return (
    <div>
      <div className="gallery-slider">
        <div className="flex align-center j-f-center">
          <div className="gallery-wrapper overflow">
            <div className="gallery-items" ref={galleryRef}>
              {galleryDatas.map((gallery) => (
                <div key={gallery.id} className="slide">
                  <img src={require("../imgs/" + gallery.imgSrc)} alt={gallery.imgSrc}></img>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="overlay"></div>
      </div>
      <div className="slide-btn-container">
        <button className="slide-btn left" onClick={() => handleClick("prev")}>&lt;</button>
        <button className="slide-btn right"  onClick={() => handleClick("next")}>&gt;</button>
      </div>
    </div>
  );
}

export default Gallery;
