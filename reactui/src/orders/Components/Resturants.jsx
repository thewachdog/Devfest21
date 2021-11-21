import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import styled from "styled-components";

const ResturantsCard = styled.div`
  display: flex;
  width: 550px;
  height: 00px;
`;

export default function Resturants() {
  const [resturantsData, setResturantsData] = useState([]);
  useEffect(() => {
    fetchResturants();
  }, []);
  const fetchResturants = async () => {
    const response = await fetch("http://localhost:5500/api/admin/showHotel");
    const resturantsData = await response.json();

    setResturantsData(resturantsData);
  };

  return (
    <ResturantsCard>
      {resturantsData.map((resturantData) => (
        <ResturantCard {...resturantData} />
      ))}
    </ResturantsCard>
  );
}
