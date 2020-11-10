import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { NewRecipeForm } from "./NewRecipeForm";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container>
          <Hamburger
            onClick={handleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
            key="left"
          >
            <Menu />
          </Hamburger>
          <Logotype>Bugs Recepies 🐞🐛</Logotype>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NewRecipeForm />
      </Drawer>
    </>
  );
}

export default Navbar;

const Logotype = styled(Typography)`
  font-size: 18px;
  font-weight: normal;
`;

const Container = styled(Toolbar)`
  justify-content: center;
`;

const Hamburger = styled(IconButton)`
  position: absolute;
  right: 8px;
`;

const InnerDrawer = styled.div`
  padding: 16px;
  width: 300px;
  max-width: 60vw;
`;
