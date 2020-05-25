import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import myFace from "../img/face.png";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    padding: 0px 20px;
  }
  @media (max-width: 750px) {
    display: block;
    text-align: center;
    img {
      display: block;
      margin: auto;
    }
  }
`;

const WelcomeSection = () => (
  <section>
    <h3>hello</h3>
    <Container>
      <img src={myFace} className="myFace" alt="My Face" />
      <div className="intro">
        <p>
          Hi! I&apos;m a software engineer with a passion for natural languages
          and education. Currently working as a front-end developer in a
          React/Redux/Typescript stack, <a href="#education">teaching</a>{" "}
          software development in the evenings and working on too many
          sideprojects, most recently:{" "}
          <a
            href="https://conju-gator.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            conju-gator.com
          </a>
        </p>
        <p>
          I <a href="#blog">blog</a> and speak about tech, my journey into it,
          and tech education.
        </p>
        <p>
          Follow my <Link to="/100daysofcode">#100DaysOfCode progress</Link>{" "}
          (and yours, too!)
        </p>
      </div>
    </Container>
  </section>
);

export default WelcomeSection;
