import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  withTheme,
} from "@material-ui/core";
import { Add, ShoppingBasketOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { NewRecipeForm } from "./NewRecipeForm";
import { Toast } from "./Toast";

function Navbar() {
  const [openForm, setOpenForm] = useState(false);
  const handleForm = () => {
    setOpenForm(!openForm);
  };

  const [openList, setOpenList] = useState(false);
  const handleList = () => {
    setOpenList(!openList);
  };

  const [openToast, setOpenToast] = useState(false);
  const handleToast = () => {
    setOpenToast(!openToast);
  };

  return (
    <>
      <Nav color="secondary" position="sticky">
        <Container>
          <NewRecipeButton onClick={handleForm}>
            <Add />
          </NewRecipeButton>
          <Logo />
          <ShoppingListButton onClick={handleList}>
            <ShoppingBasketOutlined />
          </ShoppingListButton>
        </Container>
      </Nav>
      <Drawer anchor="right" open={openForm} onClose={() => setOpenForm(false)}>
        <NewRecipeForm handleDrawer={handleForm} handleToast={handleToast} />
      </Drawer>
      <Drawer anchor="left" open={openList} onClose={() => setOpenList(false)}>
        <div style={{ width: "80vw" }}>Shopping list</div>
      </Drawer>
      <Toast open={openToast} close={handleToast} message="Recipe Added 🥳" />
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

const NewRecipeButton = withTheme(styled(IconButton)`
  position: absolute;
  transform: scale(0.8);
  right: 16px;
  background: ${(props) => props.theme.palette.primary.main};
  color: white;
`);

const ShoppingListButton = withTheme(styled(IconButton)`
  position: absolute;
  left: 16px;
  color: ${(props) => props.theme.palette.primary.main};
`);
