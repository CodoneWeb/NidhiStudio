import React from "react";
import styled from "styled-components";

import "react-lazy-load-image-component/src/effects/blur.css";
import TeamCard from "./TeamCard";
function Team() {
  return (
    <Container>
      <h2>Our Team</h2>

      <Image>
        <TeamCard
          name="Yuvrajsinh Parmar"
          role="Founder 
"
          img={"./team (1).jpeg"}
          _="Cinematographer & editor"
          insta="https://instagram.com/yuvi_7353_?igshid=YmMyMTA2M2Y="
          insta_id="@yuvi_7353_"
        />
        <TeamCard
          name="Dhavalsinh Parmar"
          role="Co-founder
"
          img={"./team (3).jpeg"}
          _="Professional photographer"
          insta="https://www.instagram.com/dhaval__7353_/?igshid=YmMyMTA2M2Y%3D"
          insta_id={"@dhaval__7353_"}
        />
        <TeamCard
          name="Rincool Thakkar"
          role="Mentor
"
          img={"./team (2).jpeg"}
          _="Owner of rang gujrat stúdio"
          insta="
https://www.instagram.com/rang_gujarat_studio/?igshid=YmMyMTA2M2Y%3D"
          insta_id={" @rang_gujarat_studio"}
        />
      </Image>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 30px 0px;
  margin: auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 36px;

    font-weight: 700;
    color: #161616;
    margin-bottom: 40px;
  }
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 855px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export default Team;
