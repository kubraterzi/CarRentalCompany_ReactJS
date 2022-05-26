import React from "react";

import { Outlet, useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CarRentalIcon from "@mui/icons-material/CarRental";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupIcon from "@mui/icons-material/Group";
import DiamondIcon from "@mui/icons-material/Diamond";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const menuItems = [
  [
    { label: "Cars", icon: <DirectionsCarIcon />, url: "cars" },
    { label: "Brands", icon: <DiamondIcon />, url: "brands" },
    { label: "Colors", icon: <ColorLensIcon />, url: "colors" },
    { label: "Users", icon: <GroupIcon />, url: "users" },
    { label: "Rentals", icon: <DirectionsCarIcon />, url: "rentals" },
  ],
  [
    {
      label: "Undelivered",
      icon: <EventBusyIcon />,
      url: "undelivered",
    },
    { label: "Rentable", icon: <EventAvailableIcon />, url: "rentable" },
  ],
];

const AdminLayout = () => {
  const [toggleButton, setToggleButton] = React.useState(false);

  let navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const toggleDrawer = () => {
    setToggleButton((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //todo: create a new component for this
  const listAdminMenu = React.useMemo(() => {
    return (
      <Box sx={{ width: "250px" }} role="presentation" onClick={toggleDrawer}>
        {menuItems.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <List>
              {group.map((item, index) => (
                <ListItem
                  key={index}
                  onClick={() => navigate(item.url)}
                  sx={{ cursor: "pointer" }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
            {groupIndex < menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Box>
    );
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
          <Toolbar>
            <Button onClick={toggleDrawer}>
              <DashboardIcon sx={{ color: "#ccc", fontSize: "xx-large" }} />
            </Button>
            <Drawer anchor="left" open={toggleButton} onClose={toggleDrawer}>
              {listAdminMenu}
            </Drawer>
            <CarRentalIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                fontSize: "xx-large",
                ml: 3,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              KT Rental
            </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography>USER NAME</Typography>
                <Avatar
                  sx={{ marginLeft: "1rem" }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </React.Fragment>
  );
};

export default AdminLayout;
