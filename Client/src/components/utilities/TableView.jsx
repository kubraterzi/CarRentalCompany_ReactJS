import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";

const TableView = (props) => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          flexGrow: 1,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3rem",
        }}
      >
        <Box sx={{ flexGrow: 1, p: 1 }}>
          <Filter
            switcherVisibility={false}
            filteredSearch={props.filteredSearch}
            setFilteredSearch={props.setFilteredSearch}
          />
        </Box>
        <Box sx={{ flexGrow: 1, p: 1 }}>{props.children}</Box>
      </Box>
    </div>
  );
};

export default TableView;
