import React from "react";
import styled from "styled-components";
function TeamCard({ name, role, img, _, insta, insta_id }) {
  return (
    <Container>
      <Image>
        <img src={img} alt={name} />
      </Image>

      <Info>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <p>{_}</p>
        <a href={insta}>
          <img src="./instagram one.png" alt="" />
          <p>{insta_id}</p>
        </a>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  background: #ffffff;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  transition: all 0.5s ease-in-out;
  margin-right: 10px;
  border-radius: 15px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
  @media only screen and (min-width: 856px) and (max-width: 1240px) {
    width: 180px;
  }
  @media only screen and (max-width: 855px) {
    margin-bottom: 50px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 15px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  justify-content: center;
  margin: auto;
  padding: 10px;

  p {
    font-size: 13px;
    font-weight: 500;
  }

  img {
    width: 20px;
    margin-top: 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    p {
      margin-top: 5px;
      margin-left: 10px;
      text-decoration: none;
      color: #000;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.4px;
    }
  }
`;

const Name = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #bb9f00;

  @media only screen and (min-width: 856px) and (max-width: 1240px) {
    font-size: 14px;
  }
`;

const Role = styled.div`
  color: #000;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 5px;
  @media only screen and (min-width: 856px) and (max-width: 1240px) {
    font-size: 11px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  text-align: left;
  width: 95%;
  margin-top: 10px;
  @media only screen and (min-width: 856px) and (max-width: 1240px) {
    font-size: 11px;
  }
`;

export default TeamCard;
