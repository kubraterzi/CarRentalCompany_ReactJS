import React from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";

const BrandsSidebar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <MenuList>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>Brands</MenuItem>
        <Divider />
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            Volvo
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            Mercedes
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ paddingLeft: "0.5em" }}>
          <ListItemIcon>{/* <img src={bmw}></img> */}</ListItemIcon>
          <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
            Audi
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Box>
  );
};

export default BrandsSidebar;
