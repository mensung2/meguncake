import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <StLayout>
      <StMain>{props.children}</StMain>
    </StLayout>
  );
};

const StLayout = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StMain = styled.main`
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default Layout;
