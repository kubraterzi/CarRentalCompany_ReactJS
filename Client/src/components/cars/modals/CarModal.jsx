import React from "react";

import { Box, Modal, Typography } from "@mui/material";
import CarForm from "./../forms/CarForm";

const CarModal = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid rgb(94, 94, 94)",
    boxShadow: 24,
    p: 6,
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a Medication
        </Typography>
        <Typography id="modal-modal-description" component="h2" sx={{ mt: 2 }}>
          <CarForm currentCar={props.currentCar} onClose={props.handleClose} />
        </Typography>
      </Box>
    </Modal>
  );
};

export default CarModal;
