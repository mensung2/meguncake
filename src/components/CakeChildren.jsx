import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CakeChildrenLid from "./CakeChildrenLid";
import CakeChildrenLue from "./CakeChildrenLue";
import CakeChildrenSaha from "./CakeChildrenSaha";
import CakeChildrenCarnel from "./CakeChildrenCarnel";
import Ending1 from "./Ending1";
import Ending2 from "./Ending2";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import cake3 from "../assets/cake3.png";
import cake4 from "../assets/cake4.png";
import cake5 from "../assets/cake5.png";
import cake6 from "../assets/cake6.png";
import backcake from "../assets/backcake.png";
import useSound from "use-sound";
import sound from "../assets/pop.mp3";

const CakeChildren = () => {
  const [cakeCount, setCakeCount] = useState(47);
  const [shrink, setShrink] = useState(false);
  const [currentCakeImage, setCurrentCakeImage] = useState(cake1);
  const [cakeSaha, setCakeSaha] = useState(0);
  const [cakeCarnel, setCakeCarnel] = useState(0);
  const [cakeLue, setCakeLue] = useState(0);
  const [cakeLid, setCakeLid] = useState(0);

  const soundUrl = sound;

  const [play] = useSound(soundUrl, { volume: 0.1 });

  const isFirstRender = useRef(false);

  useEffect(() => {
    if (isFirstRender.current) {
      play();
    } else {
      isFirstRender.current = true;
    }
  }, [cakeCount, play]);

  const cakeImages = [cake1, cake2, cake3, cake4, cake5, cake6];

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "StCake");
  };

  const handleDrop = (type) => (e) => {
    e.preventDefault();
    switch (type) {
      case "saha":
        setCakeSaha((prevCount) => prevCount + 1);
        break;
      case "carnel":
        setCakeCarnel((prevCount) => prevCount + 1);
        break;
      case "lue":
        setCakeLue((prevCount) => prevCount + 1);
        break;
      case "lid":
        setCakeLid((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
    setCakeCount((prevCount) => prevCount - 1);
    setShrink(true);
    setTimeout(() => setShrink(false), 500);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleKeyPress = (event) => {
    const { key } = event;
    switch (key.toLowerCase()) {
      case "a":
        setCakeSaha((prevCount) => prevCount + 1);
        setCakeCount((prevCount) => prevCount - 1);
        setShrink(true);
        setTimeout(() => setShrink(false), 500);
        break;
      case "s":
        setCakeCarnel((prevCount) => prevCount + 1);
        setCakeCount((prevCount) => prevCount - 1);
        setShrink(true);
        setTimeout(() => setShrink(false), 500);
        break;
      case "d":
        setCakeLue((prevCount) => prevCount + 1);
        setCakeCount((prevCount) => prevCount - 1);
        setShrink(true);
        setTimeout(() => setShrink(false), 500);
        break;
      case "f":
        setCakeLid((prevCount) => prevCount + 1);
        setCakeCount((prevCount) => prevCount - 1);
        setShrink(true);
        setTimeout(() => setShrink(false), 500);
        break;
      default:
        break;
    }
  };

  const handleSahaClick = () => {
    setCakeSaha((prevCount) => prevCount + 1);
    setCakeCount((prevCount) => prevCount - 1);
    setShrink(true);
    setTimeout(() => setShrink(false), 500);
  };

  const handleCarnelClick = () => {
    setCakeCarnel((prevCount) => prevCount + 1);
    setCakeCount((prevCount) => prevCount - 1);
    setShrink(true);
    setTimeout(() => setShrink(false), 500);
  };

  const handleLueClick = () => {
    setCakeLue((prevCount) => prevCount + 1);
    setCakeCount((prevCount) => prevCount - 1);
    setShrink(true);
    setTimeout(() => setShrink(false), 500);
  };

  const handleLidClick = () => {
    setCakeLid((prevCount) => prevCount + 1);
    setCakeCount((prevCount) => prevCount - 1);
    setShrink(true);
    setTimeout(() => setShrink(false), 500);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (shrink) {
      const timer = setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cakeImages.length);
        setCurrentCakeImage(cakeImages[randomIndex]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [shrink, cakeImages]);

  if (cakeSaha > 15 || cakeCarnel > 15 || cakeLue > 15) {
    return <Ending1 />;
  }

  if (cakeSaha === 15 && cakeCarnel === 15 && cakeLue === 15 && cakeLid === 2) {
    return <Ending2 />;
  }

  return (
    <StCakeHome>
      <StCakesCount>{cakeCount}</StCakesCount>
      <StCakeC>
        <CakeChildrenSaha
          onDrop={handleDrop("saha")}
          onDragOver={handleDragOver}
          onClick={handleSahaClick}
          cakeSaha={cakeSaha}
        />
        <CakeChildrenCarnel
          onDrop={handleDrop("carnel")}
          onDragOver={handleDragOver}
          onClick={handleCarnelClick}
          cakeCarnel={cakeCarnel}
        />
        <CakeChildrenLue
          onDrop={handleDrop("lue")}
          onDragOver={handleDragOver}
          onClick={handleLueClick}
          cakeLue={cakeLue}
        />
        <CakeChildrenLid
          onDrop={handleDrop("lid")}
          onDragOver={handleDragOver}
          onClick={handleLidClick}
          cakeLid={cakeLid}
        />
      </StCakeC>
      <StCakeBox>
        <StCake draggable onDragStart={handleDragStart} shrink={shrink}>
          <img src={currentCakeImage} alt="cake" />
        </StCake>
      </StCakeBox>
    </StCakeHome>
  );
};

const StCakeHome = styled.div`
  padding: 10px;
`;

const StCakesCount = styled.div`
  width: 100px;
  height: 100px;
  font-size: 40px;
  font-weight: 900;
  color: #77193f;
  background-image: url(${backcake});
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StCakeC = styled.div`
  margin-top: 30px;
  gap: 10px;
  display: flex;
  color: orange;
  font-size: 50px;
  font-weight: 900;
`;

const StCakeBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StCake = styled.div`
  width: 100px;
  height: 100px;
  transform: ${(props) => (props.shrink ? "scale(0.1)" : "scale(1)")};
  transition: transform 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default CakeChildren;
