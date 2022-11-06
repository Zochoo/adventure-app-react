import React from "react";
import CardsItem from "./CardsItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem
              src="/images/img-9.jpg"
              text="Explore the hidden waterfall deep in the Amazon Jungle"
              label="Adventure"
              path="./services"
            />
            <CardsItem
              src="/images/img-2.jpg"
              text="Travel through the Island of Bali in a private Cruise"
              label="Luxury"
              path="./services"
            />
          </ul>
          <ul className="cards__items">
            <CardsItem
              src="/images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="./services"
            />
            <CardsItem
              src="/images/img-4.jpg"
              text="Experience Football on Top of the Himilayan"
              label="Adventure"
              path="./services"
            />
            <CardsItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="./sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
