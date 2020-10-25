import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import myFace from "../img/face.png";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 750px) {
    display: block;
    text-align: center;
    img {
      display: block;
      margin: auto;
    }
    p {
      padding: 0;
    }
  }
`;

const Text = styled.div`
  p {
    padding: 0px 20px;
  }
  @media (max-width: 750px) {
    margin-top: 20px;
    p {
      padding: 0;
    }
  }
`;

const MyFace = styled.img`
  width: 200px;
  border-radius: 50%;
`;

const WelcomeSection = () => (
  <section>
    <h3>hello</h3>
    <Container>
      <MyFace src={myFace} alt="My Face" />
      <Text>
        <p>
          Hi! I&apos;m a software engineer with a passion for natural languages
          and education. Currently working as a front-end developer in a
          React/Redux/Typescript stack, building software for charities.
        </p>
        <p>
          I speak Spanish & French, currently live in Valencia 🇪🇸 and am
          starting to learn Arabic & Catalan. I 💚 yoga, running, growing my own
          food & striving towards simple living.
        </p>
        <p>
          Follow my <Link to="/100daysofcode">#100DaysOfCode progress</Link>{" "}
          (and yours, too!)
        </p>
      </Text>
    </Container>
  </section>
);

export default WelcomeSection;
