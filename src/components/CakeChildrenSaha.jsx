import React, { useEffect, useState } from "react";
import styled from "styled-components";
import saha1 from "../assets/saha1.png";
import saha3 from "../assets/saha3.png";

const CakeChildrenSaha = ({ onClick, onDrop, onDragOver, cakeSaha }) => {
  const [size, setSize] = useState({ width: 225, height: 300 });
  const [currentImage, setCurrentImage] = useState(saha1);

  useEffect(() => {
    if (cakeSaha > 0) {
      setCurrentImage(saha3);
      const timer = setTimeout(() => {
        setCurrentImage(saha1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cakeSaha]);

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
      {cakeSaha}
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

export default CakeChildrenSaha;
