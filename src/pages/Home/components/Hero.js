import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HeroImg1 from "../assets/CarouselImgs/carousel-1.jpg";
import HeroImg2 from "../assets/CarouselImgs/carousel-2.jpg";
import HeroImg3 from "../assets/CarouselImgs/carousel-3.jpg";

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={HeroImg1} alt="Heck of a lot of old school tvs" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImg2} alt="old Camera" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImg3} alt="a old broken tv" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;