import React, { useEffect, useState } from "react";
import styled from "styled-components";
import lid1 from "../assets/lid1.png";
import lid3 from "../assets/lid3.png";
import lid4 from "../assets/lid4.png";

const CakeChildrenLid = ({ onClick, onDrop, onDragOver, cakeLid }) => {
  const [size, setSize] = useState({ width: 225, height: 300 });
  const [currentImage, setCurrentImage] = useState(lid1);

  const isDisabled = cakeLid >= 2;

  useEffect(() => {
    if (cakeLid >= 2) {
      setCurrentImage(lid4);
    } else if (cakeLid > 0) {
      setCurrentImage(lid3);
      const timer = setTimeout(() => {
        setCurrentImage(lid1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCurrentImage(lid1);
    }
  }, [cakeLid]);

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          setSize((prevSize) => ({
            width: prevSize.width === 225 ? 230 : 225,
            height: prevSize.height === 300 ? 295 : 300,
          }));
        }, i * 1000); // 1초 간격으로 반복 실행
      }
    }, 3000); // 3초마다 반복 실행

    return () => clearInterval(interval);
  }, []);

  return (
    <St
      onClick={!isDisabled ? onClick : undefined}
      isDisabled={isDisabled}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      {cakeLid}
      <StImgBox width={size.width} height={size.height}>
        <StImg src={currentImage} />
      </StImgBox>
    </St>
  );
};

const St = styled.div`
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
`;

const StImgBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transition: width 1s ease-in-out, height 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default CakeChildrenLid;
