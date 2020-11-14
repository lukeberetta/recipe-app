import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import { Recipes } from "./components/Recipes";

function App() {
  return (
    <Container className="App">
      <Body>
        <Recipes />
      </Body>
      <Navbar />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Body = styled.div`
  height: calc(100% - 1px);
  width: 100%;
  margin-top: 68px;
  z-index: 9;
  overflow: auto;
`;

const Footer = styled.div`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  // height: 40px;
  // background: #cccccc;
  // z-index: 11;
`;
