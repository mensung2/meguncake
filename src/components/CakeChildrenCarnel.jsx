import React, { useEffect, useState } from "react";
import styled from "styled-components";
import carnel1 from "../assets/car1.png";
import carnel3 from "../assets/car3.png";

const CakeChildrenCarnel = ({ onClick, onDrop, onDragOver, cakeCarnel }) => {
  const [size, setSize] = useState({ width: 225, height: 300 });
  const [currentImage, setCurrentImage] = useState(carnel1);

  useEffect(() => {
    if (cakeCarnel > 0) {
      setCurrentImage(carnel3);
      const timer = setTimeout(() => {
        setCurrentImage(carnel1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cakeCarnel]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) => ({
        width: prevSize.width === 225 ? 230 : 225,
        height: prevSize.height === 300 ? 295 : 300,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <St onClick={onClick} onDrop={onDrop} onDragOver={onDragOver}>
      {cakeCarnel}
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

export default CakeChildrenCarnel;
