import React, { useState, useEffect, useContext, useRef } from "react";
import { navigateContent } from "../features/navigateContent";

function About(props) {
  const htuRef = useRef();
  const navigatorRef = useRef();
  useEffect(() => {
    props.getNavigator(navigatorRef);
  })

  return (
    <div>
      <div className="navigator" ref={navigatorRef}>
        <p onClick={() => {navigateContent('about')}}>개요</p>
        <p onClick={() => {navigateContent(htuRef.current)}}>사용법</p>
      </div>
      <div className="outline">
        <div className="about">
          <span>인류의 역사에는 패드립이 있었다.</span>

          <div className="about-wrapper">
            <div className="img-container">
              <div className="img-wrapper">
                <img src={require("../imgs/가재맨-1.jpg")} alt="가재맨-1" />
              </div>
              <div className="overlay"></div>
            </div>

            <div className="paragraph">
              <p>
                패드립, 그 이름은 단순한 유행어가 아니다. 그것은 인류의 본성과
                사회적 갈등을 심오하게 반영하는 역사적 담론이다. 패드립의 뿌리는
                인류의 기원과 함께한다. 고대 메소포타미아 문명이나 이집트 문명의
                쐐기 문자나 상형 문자 등 최초의 문자와 기록이 시작되었을
                시절부터 이미 존재했다. 이렇듯, 고대 문명에서부터 부모를
                비하하는 것은 단순한 모욕이 아닌, 인간 존재에 대한 근본적인
                공격으로 여겨졌다. 이는 사회적 규범을 어지럽히는 중대한 행위로,
                그 자체로 강렬한 메시지를 내포하고 있다.
              </p>
            </div>

            <div className="img-container">
              <div className="img-wrapper">
                <img src={require("../imgs/조식.jpg")} alt="조식" />
              </div>
              <div className="overlay"></div>
            </div>

            <div className="paragraph">
              <p>
                조선시대 역시 패드립은 존재했다. 대표적인 예로, 조식은 명종에게
                "자전은 생각이 깊으시기는 하나 깊숙한 궁중의 한 과부에 지나지
                않으시고 전하께서는 어리시어 다만 선왕의 외로운 한 후사에 지나지
                않으시니 천백 가지의 천재지변과 만 가지의 민심을 어찌
                수습하시렵니까? 라는 내용이 담긴 상소를 올렸는데, 이는 "대비는
                과부에 불과하고 주상은 애비 없는 놈일 뿐인데 나라 꼴이 제대로
                되겠습니까?"와 같은 말이다. 조선 시대에도 패드립이 어떻게 권력과
                위계를 초월하여 사용되었는지를 웅장하게 증명한다.
              </p>
            </div>

            <div className="img-container">
              <div className="img-wrapper">
                <img src={require("../imgs/신태일&김윤태.jpeg")} alt="신태일&김윤태" />
              </div>
              <div className="overlay"></div>
            </div>

            <div className="paragraph">
              <p>
                21세기에 들어서면서, 패드립은 인터넷의 심장부에서 새로운 생명을
                얻는다. 특히나 한때 페북스타로 불리던 '신태일', '김윤태'의
                '느금마 엔터테인먼트'를 통해 당시 10대들을 패드립 발사대로
                만들었는데, 상당히 저차원적인 패드립을 구사한다. 이후
                '디시인사이드', '리그 오브 레전드'와 같은 현대의 전쟁터에서,
                패드립은 단순한 비난을 넘어 문화의 아이콘으로 자리 잡았다.
              </p>
            </div>
            <div className="img-container">
              <div className="img-wrapper">
                <img src={require("../imgs/리짜이밍-1.jpeg")} alt="리짜이밍" />
              </div>
              <div className="overlay"></div>
            </div>

            <div className="paragraph">
              <p>
                거물 정치인 역시 예외는 아닌데, 현 더불어 민주당 대표
                '이재명'의원 역시 칼로 "니 친정 엄마 씹구멍 찢...", "니 어머니
                칼로 쑤셔가지고" 등의 오도 짜세 스러운 웅장한 패드립을 구사한다.
                또한 현 국민의 힘 최고의원 '인요한' 의원은 과거 혁신위원장 시절
                '이준석' 전 국민의 힘 대표를 향해 “준석이는 도덕이 없다. 그것은
                준석이 잘못이 아니라 부모의 잘못이 큰 것 같다.”와 같은 다소
                소녀스러운 패드립을 시전한 바가 있다.
              </p>
            </div>

            <div className="img-container">
              <div className="img-wrapper">
                <img src={require("../imgs/디시 패드립 배틀.jpeg")} alt="디시 패드립 배틀" />
              </div>
              <div className="overlay"></div>
            </div>

            <div className="paragraph">
              <p>
                패드립은 현대 사회의 갈등과 유희가 얽혀 있는 복합적 현상을
                드러낸다. 사회적 맥락과 의미 패드립은 결코 가벼운 유머가 아니다.
                그것은 가족, 윤리, 정체성에 대한 날카로운 질문을 던지며, 청중의
                분노와 반감을 자극한다. 하지만 그런들 어떠하랴, 시대는 빠르게
                변해가는데도 패드립은 고대, 현대할 것 없이 항상 우리와 함께했다.
                인간이 살아가려면 밥을 먹어야 하듯이, 시대의 낭만을 유지하기
                위해서는 패드립은 꼭 필요한 것이 아닐까 필자는 생각한다.
              </p>
            </div>
          </div>
        </div>
        <div className="how-to-use" ref={htuRef}>
          <span>패드립 생성기</span>

          {/* sample text */}
          <div className="paragraph">
              <p>
                패드립은 현대 사회의 갈등과 유희가 얽혀 있는 복합적 현상을
                드러낸다. 사회적 맥락과 의미 패드립은 결코 가벼운 유머가 아니다.
                그것은 가족, 윤리, 정체성에 대한 날카로운 질문을 던지며, 청중의
                분노와 반감을 자극한다. 하지만 그런들 어떠하랴, 시대는 빠르게
                변해가는데도 패드립은 고대, 현대할 것 없이 항상 우리와 함께했다.
                인간이 살아가려면 밥을 먹어야 하듯이, 시대의 낭만을 유지하기
                위해서는 패드립은 꼭 필요한 것이 아닐까 필자는 생각한다.
              </p>
            </div>
            <div className="paragraph">
              <p>
                패드립은 현대 사회의 갈등과 유희가 얽혀 있는 복합적 현상을
                드러낸다. 사회적 맥락과 의미 패드립은 결코 가벼운 유머가 아니다.
                그것은 가족, 윤리, 정체성에 대한 날카로운 질문을 던지며, 청중의
                분노와 반감을 자극한다. 하지만 그런들 어떠하랴, 시대는 빠르게
                변해가는데도 패드립은 고대, 현대할 것 없이 항상 우리와 함께했다.
                인간이 살아가려면 밥을 먹어야 하듯이, 시대의 낭만을 유지하기
                위해서는 패드립은 꼭 필요한 것이 아닐까 필자는 생각한다.
              </p>
            </div>
            {/* sample text */}

        </div>
      </div>
    </div>
  );
}

export default About;
