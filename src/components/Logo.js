import React from "react";
import styled from "styled-components";
import { ReactComponent as Svg } from "../assets/logo.svg";

export function Logo() {
  return (
    <Container>
      <Svg style={{ width: "100%" }} />
    </Container>
  );
}

const Container = styled.div`
  width: 70px;
`;
