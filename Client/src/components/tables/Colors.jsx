import React, { useEffect } from "react";

import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import TableView from "../utilities/TableView";
import { fetchAllColors } from "./../../redux/slices/colors/colorsSlice";
import { useDispatch, useSelector } from "react-redux";
import { filterBySearchBar } from "../../helpers/filterBySearchBar";
import { useLocation, useNavigate } from "react-router-dom";

const keys = ["colorName"];
const Users = () => {
  const dispatch = useDispatch();
  const allColors = useSelector((state) => state.colors.items);
  const [filteredSearch, setFilteredSearch] = React.useState("");
  const [seeMoreLinkVisibility, setSeeMoreLinkVisibility] =
    React.useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllColors());
  }, []);

  useEffect(() => {
    setSeeMoreLinkVisibility(!pathname.includes("colors"));
  }, [navigate]);

  const navigateToColors = () => {
    navigate("colors");
  };

  const filteredColors = filterBySearchBar(keys, allColors, filteredSearch);

  return (
    <TableView
      filteredSearch={filteredSearch}
      setFilteredSearch={setFilteredSearch}
    >
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Typography component="h2" variant="h5" color="secondary" gutterBottom>
          Recent Title
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "1.15rem" }}>Color Name</TableCell>
              <TableCell align="right">Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredColors.map((color) => (
              <TableRow key={color.colorID}>
                <TableCell>{color.colorName}</TableCell>
                <TableCell align="right">Buttons</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {seeMoreLinkVisibility && (
          <Link
            color="secondary"
            onClick={navigateToColors}
            sx={{ mt: 3, cursor: "pointer" }}
          >
            See more currently leased colors
          </Link>
        )}
      </Paper>
    </TableView>
  );
};

export default Users;
