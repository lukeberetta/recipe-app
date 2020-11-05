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
      <AppBar position="sticky">
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
          {/* <Button color="inherit">Add +</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="drawer">
          <Button variant="outlined" size="large">
            New Recipe +
          </Button>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
