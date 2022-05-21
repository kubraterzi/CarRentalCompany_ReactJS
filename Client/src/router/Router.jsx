import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import CarDetail from "../components/cars/CarDetail";
import Sign from "../components/Sign";
import AdminLayout from "../components/layouts/AdminLayout";
import AdminDashboard from "../components/pages/dashboards/AdminDashboard";
import CarList from "./../components/cars/CarList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<Sign />} />
      <Route path="cars/:id" element={<CarDetail />} />

      {/* <Route path="cars/brand/:brandId" element={<CarList />} />
      <Route path="cars/color/:colorId" element={<CarList />} /> */}
      <Route path="admin/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default Router;
