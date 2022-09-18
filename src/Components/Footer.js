import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo>
        <img
          src="https://ik.imagekit.io/wupg3d27d/tr:h-233.33,w-300/logo_D-Ye21hQn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662891437990"
          alt=""
          onClick={() => navigate("/")}
        />
      </Logo>
      <Center>
        <h3>Follow US</h3>

        <div className="icons">
          <a
            href="https://instagram.com/ns_photography00?igshid=YmMyMTA2M2Y="
            target={"_blank"}
            rel="noreferrer"
          >
            <img src="./instagram.png" alt="" />
          </a>
          <img src="./fb.png" alt="" />
          <a
            href="https://m.youtube.com/channel/UCZSaWHASRQK0Z2WrZhcXocQ"
            target={"_blank"}
            rel="noreferrer"
          >
            <img src="./youtube.png" alt="" />
          </a>
        </div>
      </Center>

      <ContactUS>
        <h3>Contact US</h3>
        <div className="contact-detail">
          <p>
            Phone: <span>+91 799-013-6200, +91 915-741-0024</span>
          </p>
          <p>
            Email: <span>Nidhistudio00@gmail.com</span>
          </p>
        </div>
      </ContactUS>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: black;
  height: 273px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: fit-content;
    padding: 40px 0px;
    align-items: center;
  }
`;

const Logo = styled.div`
  width: 200px;
  cursor: pointer;
  img {
    width: 100%;
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 40px;
  }
`;

const Center = styled.div`
  color: #fff;
  height: 130px;
  width: 178px;
  h3 {
    font-size: 26px;
    margin-bottom: 40px;
    position: relative;

    &:after {
      position: absolute;
      bottom: -20px;
      left: 2px;
      content: "";
      width: 30px;
      height: 2px;
      background-color: goldenrod;
      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: start;

    img {
      width: 18px;
      margin-right: 12px;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 40px;

    text-align: center;

    .icons {
      justify-content: space-evenly;
    }
  }
`;

const ContactUS = styled.div`
  color: #fff;
  height: 130px;
  h3 {
    font-size: 26px;
    margin-bottom: 40px;
    position: relative;

    &:after {
      position: absolute;
      bottom: -20px;
      left: 2px;
      content: "";
      width: 30px;
      height: 2px;
      background-color: goldenrod;

      @media only screen and (max-width: 900px) {
        display: none;
      }
    }
  }

  .contact-detail {
    p {
      margin-bottom: 10px;
      font-size: 16px;
      span {
        font-size: 14px;
        margin-left: 10px;
        font-weight: 300;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    margin-bottom: 40px;

    text-align: center;

    .icons {
      justify-content: space-evenly;
    }
  }
`;
export default Footer;
