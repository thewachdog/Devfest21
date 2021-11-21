import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  .rootResturantCard {
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    &:hover {
      cursor: pointer;
      box-shadow: rgb(28 28 28 / 12%) 0px 0.4rem 1.8rem;
    }
  }
  .contentWrapper {
    height: 20%;
    margin-top: 10px;
  }
  .resturantImg {
    width: 100%;

    border-radius: 20px;
  }
  .nameAndRating {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export default function ResturantCard({
  Image,
  hotelName,
  description,
  cuisine,
  rating,
  _id,
}) {
  return (
    <StyledCard>
      <div className="rootResturantCard">
        <img src={Image} className="resturantImg" alt={hotelName} />
        <div className="contentWrapper">
          <div className="nameAndRating">
            <h3>{hotelName}</h3>
            <p>{rating}</p>
          </div>
          <p>{cuisine}</p>
          <p>{description}</p>
        </div>
      </div>
    </StyledCard>
  );
}
