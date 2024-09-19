import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { GalleryContext } from "../app/provider/galleryContext";
import { createRandomNum } from "../features/createRandomNum";
import { getDrip } from "../features/getDrip";
import "../app/styles/home.css";

function Home(props) {
  const [num, setNum] = useState();
  const [drip, setDrip] = useState();
  const lightDrips = props.drips[0];
  const heavyDrips = props.drips[1];

  const galleryData = useContext(GalleryContext);

  useEffect(() => {
    const idx = createRandomNum(galleryData.length)
    setNum(idx);
    console.log("setNum 실행");
  }, []);

  const data = num !== undefined ? galleryData[num] : galleryData[0];

  return (
    <div>
      <div className="gallery-container">
        <span className="f-25 block center m-b-25">명언 보기</span>
        <div className="gallery">
          <img className="gallery-img" src={require("../imgs/" + data.imgSrc)}></img>
          <div className="drip-author">
            <p>{data.drip}</p>
            <p> - {data.author} - </p>
          </div>
          <div className="overlay"></div>
        </div>
        <button onClick={() => setNum(createRandomNum(galleryData.length))}>
          이미지 변경
        </button>
      </div>
      {/* setState를 화살표 함수로 래핑함으로써 해당 코드는 사용자가 클릭할 때만 변할 수 있도록 함수 설정해 무한루프 방지 */}

      <div className="drip-container m-t-25">
        <span className="f-25 block center m-b-25">명언 생성하기</span>
        <div className="btn-wrapper">
          <button onClick={() => getDrip(lightDrips, setDrip)}>
            명언 생성(light)
          </button>
          <button onClick={() => getDrip(heavyDrips, setDrip)}>
            명언 생성(heavy)
          </button>
        </div>
        <div>
          <p>{drip}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
