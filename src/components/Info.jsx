import React from "react";
import styled from "styled-components";

const Info = ({ onClick }) => {
  return (
    <Stinfo onClick={onClick}>
      <StPBox>
        <p>플레이 방법 </p>
        <p>사하, 카넬리언, 루, 리드먼에게 폐기 케이크를 주고 엔딩을 보자!</p>
        <p>
          A, S, D, F 또는 캐릭터를 클릭, 케이크를 드로그 앤 드롭하면 먹는다!
        </p>
        <p>클릭해서 시작</p>
      </StPBox>
      <StBack />
    </Stinfo>
  );
};

const Stinfo = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: center;
`;

const StBack = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

const StPBox = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  font-size: 40px;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
`;
export default Info;
