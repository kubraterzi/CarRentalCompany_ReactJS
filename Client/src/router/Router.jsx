import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import CarDetail from "../components/cars/CarDetail";
import Sign from "../components/auth/Sign";
import AdminLayout from "../components/layouts/AdminLayout";
import AdminDashboard from "../components/pages/dashboards/AdminDashboard";
import CarList from "./../components/cars/CarList";
import UserLayout from "./../components/layouts/UserLayout";
import UndeliveredCars from "../components/tables/UndeliveredCars";
import Cars from "../components/tables/Cars";
import Users from "../components/tables/Users";
import Rentals from "../components/tables/Rentals";
import RentableCars from "../components/tables/RentableCars";
import Brands from "../components/tables/Brands";
import Colors from "../components/tables/Colors";

const Router = () => {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<Sign />} />

      <Route element={<UserLayout />}>
        <Route path="/" element={<CarList />} />
        <Route path="cars/:id" element={<CarDetail />} />
      </Route>

      {/* <Route path="cars/brand/:brandId" element={<CarList />} />
      <Route path="cars/color/:colorId" element={<CarList />} /> */}
      <Route path="admin/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
        <Route path="undelivered" element={<UndeliveredCars />} />
        <Route path="cars" element={<Cars />} />
        <Route path="brands" element={<Brands />} />
        <Route path="colors" element={<Colors />} />
        <Route path="users" element={<Users />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="rentable" element={<RentableCars />} />
      </Route>
    </Routes>
  );
};

export default Router;
