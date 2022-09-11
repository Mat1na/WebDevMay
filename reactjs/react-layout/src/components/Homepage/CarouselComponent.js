import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  return (
   
      <Carousel fade className="bg-dark carousel">
        
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80"
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>MovieBlender</h3>
            <p>Find all the movies you want here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/45/1509983908-best-movies-2017.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3>MovieBlender</h3>
            <p>Find all the movies you want here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://empireweekly.com/wp-content/uploads/2022/02/fall-movies-index-1628968089.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>MovieBlender</h3>
            <p>Find all the movies you want here</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
  );
}

export default CarouselComponent;
