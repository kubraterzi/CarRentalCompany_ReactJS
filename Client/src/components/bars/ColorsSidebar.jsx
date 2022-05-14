import React from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

const ColorsSidebar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <MenuList>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>Colors</MenuItem>
        <Divider />
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            White
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            Red
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            Blue
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default ColorsSidebar;
