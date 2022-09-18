import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Iframe from "react-iframe";
import emailjs from "@emailjs/browser";
function ContactUS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    emailjs.init("kC6n29WcD_g_HWl5r_3Xs");
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_uq8sf2v", "template_332l0op", {
        from_name: name,
        from_email: email,
        subject: subject,
        suggestion: suggestion,
      })
      .then((result) => {
        alert("Mail sent Successfully!");
        setEmail("");
        setName("");
        setSubject("");
        setSuggestion("");
      })
      .catch((err) => alert(err));
  };
  return (
    <Container>
      <Header />
      <Form>
        <h3>Contact US</h3>

        <FormField>
          <InputField>
            <InputContainer>
              <label htmlFor="">Name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Subject</label>
              <input
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="">Suggestion</label>
              <textarea
                type="text"
                onChange={(e) => setSuggestion(e.target.value)}
                value={suggestion}
              />
            </InputContainer>
            <button onClick={sendEmail}>Get IN Touch</button>
          </InputField>
          <InfoField>
            <Info>
              <h4>Address</h4>
              <p>
                HXV7+73X, Raykanagar, Ashraf Nagar, Himatnagar, Gujarat 383001
              </p>
            </Info>
            <Info>
              <h4>Email</h4>
              <p>Nidhistudio00@gmail.com</p>
            </Info>
            <Info>
              <h4>Call US</h4>
              <p>+91 799-013-6200, +91 915-741-0024</p>
            </Info>
          </InfoField>
        </FormField>

        <GmapField>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3097874190216!2d72.95928275524246!3d23.59322034596465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db967c5d35dcd%3A0xb3ecd4751b1afd5d!2sNidhi%20studio!5e0!3m2!1sen!2sin!4v1662525628513!5m2!1sen!2sin"
            width="900"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </GmapField>
      </Form>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const Form = styled.form`
  margin-top: 100px;
  max-width: 1170px;
  width: 80%;
  height: fit-content;

  margin: 100px auto auto auto;
  padding: 20px;

  h3 {
    font-size: 40px;
    font-weight: 700px;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 30px;
      background-color: #c48f56;
      bottom: -10px;
      left: 4px;
      z-index: -1;
    }
  }
`;

const FormField = styled.div`
  margin-top: 50px;
  display: flex;

  justify-content: space-around;
  width: 90%;
  margin: 50px auto auto auto;
  padding: 10px;

  height: fit-content;

  button {
    height: 36px;
    width: 120px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const InputField = styled.div`
  width: 40%;

  padding: 10px;
  @media only screen and (max-width: 900px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 16px;
  }

  input {
    font-size: 16px;
    border: 1px solid #ccc;
    padding: 6px 10px;
    height: 20px;
    width: 90%;
    line-height: 1.3;
  }

  textarea {
    height: 100px;
    resize: vertical;
    width: 94%;
  }
`;

const InfoField = styled.div`
  width: 40%;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    margin-top: 50px;

    align-items: flex-start;
    justify-content: center;
  }
`;

const Info = styled.div`
  margin-bottom: 20px;
  h4 {
    font-size: 21px;
    font-weight: 400;
    line-height: 31.5px;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
  }
`;

const GmapField = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto auto auto;

  iframe {
    border: 1px solid lightgray;
  }
`;
export default ContactUS;
