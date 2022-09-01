import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent() {
  return (
    <Carousel fade className="bg-dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://hdwallpaperim.com/wp-content/uploads/2017/08/23/472571-film_reel-movies-748x403.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>MovieBlender</h3>
                    <p>Find all movies here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://4kwallpapers.com/images/wallpapers/mortal-kombat-2021-movies-poster-4096x1895-4902.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://wallpaperset.com/w/full/b/d/a/15828.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
