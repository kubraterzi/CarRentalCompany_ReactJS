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
import { fetchAllUsers } from "./../../redux/slices/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const keys = ["firstName", "lastName", "email"];

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.items);
  const [filteredSearch, setFilteredSearch] = React.useState("");

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
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
              <TableCell sx={{ fontSize: "1.15rem" }}>First Name</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Last Name</TableCell>
              <TableCell sx={{ fontSize: "1.15rem" }}>Email</TableCell>
              <TableCell align="right">Buttons</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((user) => (
              <TableRow key={user.userID}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">Buttons</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableView>
  );
};

export default Users;
