import React from "react";
import styled from "styled-components";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import PhotoSlider from "./PhotoSlider";
import Team from "./Team";
import Works from "./Works";

function Home() {
  return (
    <Container>
      <Header />
      <PhotoSlider />
      <Main>
        <AboutUs />
        <Works />
        <Team />
      </Main>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const Main = styled.div``;
export default Home;
