import React from "react";
import { fetchCarImages } from "../../redux/slices/carImages/carImagesSlice";
import { useEffect } from "react";
import Slide from "./../utilities/Slide";

const CarImagesSlider = (props) => {
  const [imageList, setImageList] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredImageList = await fetchCarImages(props.carId);
      setImageList(filteredImageList);
      // console.log(filteredImageList);
    };

    fetchData();
  }, [props.carId]);

  return <Slide imageList={imageList} />;
};

export default CarImagesSlider;
