import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/cars/carsSlice";
import carImagesReducer from "./slices/carImages/carImagesSlice";
import brandsReducer from "./slices/brands/brandsSlice";
import colorsReducer from "./slices/colors/colorsSlice";
import statusesReducer from "./slices/statuses/statusesSlice";
import rentalsReducer from "./slices/rentals/rentalsSlice";
import usersReducer from "./slices/users/usersSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    carImages: carImagesReducer,
    brands: brandsReducer,
    colors: colorsReducer,
    statuses: statusesReducer,
    rentals: rentalsReducer,
    users: usersReducer,
  },
});
