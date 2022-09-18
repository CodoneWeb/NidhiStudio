import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PhotoSlider() {
  return (
    <Carousel
      autoPlay
      labels={false}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      interval={5000}
    >
      <Container>
        <img
          loading="lazy"
          src="https://ik.imagekit.io/wupg3d27d/bg_2_znsP3SR5xw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662888406292"
          alt="bg_2_znsP3SR5xw.jpg"
        />
      </Container>
      <Container>
        <img
          loading="lazy"
          src="https://ik.imagekit.io/wupg3d27d/bg_3_TTWPAytPH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662888395895"
          alt="bg_3_TTWPAytPH.jpg"
        />
      </Container>
      <Container>
        <img
          loading="lazy"
          src="https://ik.imagekit.io/wupg3d27d/bg_1_B_l69JIEF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662888390857"
          alt="bg_1_B_l69JIEF.jpg"
        />
      </Container>
    </Carousel>
  );
}

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    z-index: -100;
    object-fit: cover;
    @media only screen and (min-width: 1200px) {
      height: 100%;
    }
  }
  @media only screen and (min-width: 1200px) {
    height: 100vh;
  }
`;

export default PhotoSlider;
