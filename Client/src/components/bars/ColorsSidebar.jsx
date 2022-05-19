import React, { useEffect } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import {
  fetchAllColors,
  setCurrentColor,
} from "./../../redux/slices/colors/colorsSlice";
import { useDispatch, useSelector } from "react-redux";

const ColorsSidebar = () => {
  const colorList = useSelector((state) => state.colors.items);
  const dispatch = useDispatch();

  // const handleNavigateToColor = (colorId) => {

  //   const isExistFilterUrl = location.pathname.includes("cars/filter");
  //   if (isExistFilterUrl) {
  //     navigate({
  //       search: `${createSearchParams({
  //         colorId: colorId,
  //       })}&`,
  //     });
  //   } else {
  //     navigate({
  //       pathname: "cars/filter",
  //       search: `${createSearchParams({
  //         colorId: colorId,
  //       })}&`,
  //     });
  //   }
  // };

  const handleNavigateToColor = (color) => {
    dispatch(setCurrentColor(color));
  };

  useEffect(() => {
    dispatch(fetchAllColors());
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <MenuList>
        <MenuItem sx={{ paddingLeft: "0.5em", fontSize: "1.5rem" }}>
          Colors
        </MenuItem>
        <Divider />
        {colorList.map((color) => (
          <MenuItem
            key={color.colorID}
            sx={{ paddingLeft: "0.5em" }}
            onClick={() => handleNavigateToColor(color)}
          >
            <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
              {color.colorName}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default ColorsSidebar;
