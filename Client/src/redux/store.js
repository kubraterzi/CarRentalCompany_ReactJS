import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/cars/carsSlice";
import carImagesReducer from "./slices/carImages/carImagesSlice";
import brandsReducer from "./slices/brands/brandsSlice";
import colorsReducer from "./slices/colors/colorsSlice";
import statusesReducer from "./slices/statuses/statusesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    carImages: carImagesReducer,
    brands: brandsReducer,
    colors: colorsReducer,
    statuses: statusesReducer,
  },
});
