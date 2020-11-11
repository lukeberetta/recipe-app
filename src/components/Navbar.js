import { AppBar, Button, Drawer, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { NewRecipeForm } from "./NewRecipeForm";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container>
          <NewButton color="inherit" variant="outlined" onClick={handleDrawer}>
            New Recipe
          </NewButton>
          <Logotype>Bugs Recepies 🐞🐛</Logotype>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <NewRecipeForm handleDrawer={handleDrawer} />
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

const NewButton = styled(Button)`
  position: absolute;
  right: 16px;
`;
