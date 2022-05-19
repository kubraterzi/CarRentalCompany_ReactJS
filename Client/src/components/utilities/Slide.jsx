import React, { useEffect } from "react";
import { Fade } from "react-slideshow-image";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCarImages } from "./../../redux/slices/carImages/carImagesSlice";

const Slide = (props) => {
  const imageBaseUrl = "https://localhost:5001/";
  // const imageList = useSelector((state) => state.carImages.items);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCarImages(props.car.carID));
  // }, [dispatch]);

  const properties = {
    autoplay: false,
    indicators: true,
  };

  return (
    <div style={{ width: "100%" }}>
      <Fade {...properties}>
        {props.imageList?.map((imageItem) => (
          <div key={imageItem.imageID}>
            <img
              src={imageBaseUrl + imageItem.imagePath}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slide;
