import React, { useEffect } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllBrands,
  setCurrentBrand,
} from "./../../redux/slices/brands/brandsSlice";

const BrandsSidebar = () => {
  const brandList = useSelector((state) => state.brands.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, [dispatch]);

  // const handleNavigateToBrand = (brandId) => {
  //   const isExistFilterUrl = location.pathname.includes("cars/filter");
  //   if (isExistFilterUrl) {
  //     navigate({
  //       search: `${createSearchParams({
  //         brandId: brandId,
  //       })}&`,
  //     });
  //   } else {
  //     navigate({
  //       pathname: "cars/filter",
  //       search: `${createSearchParams({
  //         brandId: brandId,
  //       })}&`,
  //     });
  //   }
  // };

  const handleNavigateToBrand = (brand) => {
    dispatch(setCurrentBrand(brand));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "100%" }}>
      <MenuList>
        <MenuItem sx={{ paddingLeft: "0.5em", fontSize: "1.5rem" }}>
          Brands
        </MenuItem>
        <Divider />
        {/* <ListItemIcon><img src={bmw}></img></ListItemIcon> */}
        {brandList.map((brand) => (
          <MenuItem
            key={brand.brandID}
            sx={{ paddingLeft: "0.5em" }}
            onClick={() => handleNavigateToBrand(brand)}
          >
            <ListItemText sx={{ textAlign: "left", marginLeft: "0.5em" }}>
              {brand.brandName}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default BrandsSidebar;
