import React, { useEffect, useState } from "react";
import styled from "styled-components";
import lue1 from "../assets/lue1.png";
import lue3 from "../assets/lue3.png";

const CakeChildrenLue = ({ onClick, onDrop, onDragOver, cakeLue }) => {
  const [size, setSize] = useState({ width: 225, height: 300 });
  const [currentImage, setCurrentImage] = useState(lue1);

  useEffect(() => {
    if (cakeLue > 0) {
      setCurrentImage(lue3);
      const timer = setTimeout(() => {
        setCurrentImage(lue1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cakeLue]);

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
      {cakeLue}
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

export default CakeChildrenLue;
