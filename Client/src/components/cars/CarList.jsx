import React from "react";

import UserLayout from "../layouts/UserLayout";
import CarItemCard from "./CarItemCard";
import Filter from "../utilities/Filter";

const CarList = () => {
  return (
    <div>
      <UserLayout>
        <Filter />
        <div className="card-items">
          <CarItemCard />
          <CarItemCard />
          <CarItemCard />
          <CarItemCard />
          <CarItemCard />
          <CarItemCard />
        </div>
      </UserLayout>
    </div>
  );
};

export default CarList;
