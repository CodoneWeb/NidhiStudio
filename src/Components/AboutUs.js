import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container>
      <Information>
        <h3>"YOU FEEL. I FOCUS. WE FRAME"</h3>

        <p>
          A wedding is a validation coupled with the showcase of Love inclusive
          of various events with exotic venues, food, guests, dresses, jewellery
          and so on - What if it could never be recorded ?
        </p>

        <p>
          A chronolgy of a couple's journey where they vow together to be One.
        </p>

        <h4>WE ARE CREATING FICTION OUT OF REALITY</h4>
      </Information>
    </Container>
  );
}

const Container = styled.div`
  height: 714px;
  width: 100%;
  background: #f0f0f0;
  margin: 0px auto auto auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1095px) {
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }
`;

const ImageSection = styled.div`
  height: 550px;
  width: 580px;
  img {
    height: 100%;
  }

  @media only screen and (max-width: 900px) {
    width: 90%;
    height: fit-content;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

const Information = styled.div`
  height: 550px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: "Dosis", sans-serif;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 30px;
    width: 90%;
    font-weight: 700;
    color: #161616;
  }

  p {
    font-size: 18px;
    margin-top: 20px;
    line-height: 30px;
    width: 90%;
    color: #3b3b3b;
  }

  h4 {
    font-size: 36px;
    font-weight: 400;
    margin-top: 20px;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
    height: fit-content;
    padding: 50px 0;

    h3 {
      font-size: 20px;
      opacity: 0.8;
    }

    p {
      font-size: 13px;
      line-height: 20px;
      opacity: 0.9;
    }

    h4 {
      font-size: 24px;
      opacity: 0.8;
    }
  }
`;
export default AboutUs;
