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
      <AppBar color="secondary" position="sticky">
        <Container>
          <AddButton onClick={handleDrawer}>
            <Add />
          </AddButton>
          <Logo />
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NewRecipeForm handleDrawer={handleDrawer} />
      </Drawer>
    </>
  );
}

export default Navbar;

const Container = styled(Toolbar)`
  justify-content: center;
`;

const AddButton = withTheme(styled(IconButton)`
  position: absolute;
  width: 38px;
  height: 38px;
  right: 16px;
  background: ${(props) => props.theme.palette.primary.main};
  color: white;
`);
