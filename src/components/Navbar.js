import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  withTheme,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { NewRecipeForm } from "./NewRecipeForm";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav color="secondary" position="sticky">
        <Container>
          <AddButton onClick={handleDrawer}>
            <Add />
          </AddButton>
          <Logo />
        </Container>
      </Nav>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NewRecipeForm handleDrawer={handleDrawer} />
      </Drawer>
    </>
  );
}

export default Navbar;

const Nav = styled(AppBar)`
  border-radius: 0;
`;

const Container = styled(Toolbar)`
  justify-content: center;
`;

const AddButton = withTheme(styled(IconButton)`
  position: absolute;
  transform: scale(0.8);
  right: 16px;
  background: ${(props) => props.theme.palette.primary.main};
  color: white;
`);
