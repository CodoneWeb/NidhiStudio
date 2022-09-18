import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ContactUS from "./Components/ContactUS";
function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} key="home" />
          <Route path="/contactus" element={<ContactUS />} key="contact" />
        </Routes>
      </Router>
      <Credit>
        <p>
          Copyright 2022 {""}
          <a href="https://codone.netlify.app" rel="noreferrer" target="_blank">
            Co<span>done</span>.
          </a>
        </p>
      </Credit>
    </Container>
  );
}

const Credit = styled.div`
  width: 100%;
  background-color: #f6d9d1;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 13px;
    font-weight: 600;

    a {
      text-decoration: none;
      color: #f35324;

      span {
        color: #000;
      }
    }
  }
`;
const Container = styled.div`
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default App;
