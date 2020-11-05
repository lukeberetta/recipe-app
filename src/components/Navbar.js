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

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton
            onClick={handleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
            key="left"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">Bugs Recipes 🐞🐛</Typography>
          <Button color="inherit">Add +</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="drawer">
          <h4>Fried Rice</h4>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
