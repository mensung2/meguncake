import React, { useState } from "react";
import "./App.css";
import CakeChildren from "./components/CakeChildren";
import Layout from "./components/Layout";
import Info from "./components/Info";
import styled from "styled-components";

function App() {
  const [showInfo, setShowInfo] = useState(true);

  const handleInfoClick = () => {
    setShowInfo(false);
  };

  return (
    <Layout>
      {showInfo ? (
        <StAbsolute onClick={handleInfoClick}>
          <Info />
        </StAbsolute>
      ) : null}
      <StRelative>
        <CakeChildren />
      </StRelative>
    </Layout>
  );
}

const StAbsolute = styled.div`
  position: absolute;
`;

const StRelative = styled.div``;
export default App;
