import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import { Recipes } from "./components/Recipes";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Body>
        <Recipes />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Body = styled.div``;

const Footer = styled.div`
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  // height: 68px;
  // z-index: 11;
`;
