import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import codebar from "../img/1.jpg";
import cfg from "../img/3.jpg";
import randomTalks from "../img/6.jpg";
import talk from "../img/talk.jpg";
import teaching from "../img/codebar.png";
import nc from "../img/5.jpg";
import techreturners from "../img/returners.jpeg";
import { PostDate } from "../components/shared/styled";
import WelcomeSection from "../components/WelcomeSection";
import EducatorSection from "../components/EducatorSection";
import "milligram";
import "./index.css";

const Description = styled.p`
  font-style: italic;
  font-size: 0.8em;
`;

const WiderOnMobile = styled.div`
  @media (max-width: 750px) {
    flex: 0 0 90%;
    max-width: 90%;
  }
`;

const MAX_POSTS = 8;

const IndexPage = ({ data }) => {
  const [languages, setLanguages] = useState(["ES", "EN"]);
  const posts = data.blogposts.edges
    .filter(({ node }) => languages.includes(node.frontmatter.language))
    .slice(0, MAX_POSTS);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <WiderOnMobile
            className="column column-80"
            style={{ margin: "auto" }}
          >
            <WelcomeSection />
          </WiderOnMobile>
        </div>
        <section id="blog">
          <div className="row">
            <div className="column column-80" style={{ margin: "auto" }}>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>writing</div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <input
                      type="checkbox"
                      value="ES"
                      checked={languages.includes("ES")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setLanguages([...languages, "ES"]);
                        } else {
                          setLanguages(languages.filter((l) => l !== "ES"));
                        }
                      }}
                    />
                    🇪🇸
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="EN"
                      checked={languages.includes("EN")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setLanguages([...languages, "EN"]);
                        } else {
                          setLanguages(languages.filter((l) => l !== "EN"));
                        }
                      }}
                    />
                    🇬🇧
                  </div>
                </div>
              </h3>
              {posts.map(({ node }, i) => {
                return (
                  <p key={i}>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                    <PostDate>({node.frontmatter.date})</PostDate>
                    <Description>{node.frontmatter.description}</Description>
                  </p>
                );
              })}
              <p>
                (<Link to="/blog">See all</Link>)
              </p>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="column column-80" style={{ margin: "auto" }}>
            <section>
              <h3>talks</h3>
              <ul className="talksList">
                {data.talks.edges.map((t, i) => (
                  <li key={i}>
                    <Link to={t.node.fields.slug} key={i}>
                      <div className="talkLinkSection">
                        <h4>{t.node.frontmatter.title}</h4>
                        <img
                          src={t.node.frontmatter.frontimage}
                          alt="Title of talk"
                        />
                      </div>
                    </Link>
                    <p>{t.node.frontmatter.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="education">
              <h3>community</h3>
              <p>
                I have always been passionate about education - before tech I
                worked in school/college libraries, and taught English. Now I
                love having the opportunity to show people how awesome coding
                is, especially people who belong to underrepresented groups in
                the tech industry.
              </p>

              <EducatorSection
                side="right"
                img={techreturners}
                imgDesc="Giving a lecture a cohort of returners"
              >
                <p>
                  At{" "}
                  <a
                    href="https://techreturners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TechReturners
                  </a>
                  , I coach on a part-time course for adults returning to work,
                  or tech, after a career break. We teach full-stack JavaScript
                  with a cloud-first approach, enabling students to get back
                  into work with an in-demand, modern skillset.
                </p>
                <p>
                  I&apos;m proud to have helped dozens of returners retrain and
                  enter the tech industry, bringing much-needed, diverse talent
                  to some of Manchester&apos;s top tech businesses including
                  Booking.com, Infinity Works and Lloyds Bank.
                </p>
              </EducatorSection>

              <EducatorSection
                side="left"
                img={nc}
                imgDesc="Me and the Northcoders team"
              >
                <p>
                  I spent several years at{" "}
                  <a
                    href="https://northcoders.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Northcoders
                  </a>{" "}
                  (the UK&apos;s top bootcamp for graduate outcomes{" "}
                  <span role="img" aria-label="geeky face">
                    🤓
                  </span>
                  ) where I taught full-stack JavaScript to complete beginners
                  through to job-ready level. I developed and delivered the
                  part-time curriculum which ran for 9 months, and also ran
                  numerous taster sessions, introductory courses and study
                  groups.
                </p>
              </EducatorSection>

              <EducatorSection
                side="right"
                img={randomTalks}
                imgDesc="Speaking with Amul from Northcoders"
              >
                <p>
                  I have run several Lightning Talks events, and often look for
                  opportunities to give lightning talks myself. Talks I&apos;ve
                  given include{" "}
                  <span className="stronger">
                    What&apos;s in the .git directory?
                  </span>{" "}
                  and{" "}
                  <span className="stronger">Introduction to the JAMStack</span>
                  . I have also organised events such as a{" "}
                  <span className="stronger">
                    Teaching Tech Knowledge Exchange
                  </span>{" "}
                  for{" "}
                  <a
                    href="https://codingweek.org/?edition=GB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    National Coding Week
                  </a>
                  .
                </p>
              </EducatorSection>

              <EducatorSection
                side="left"
                img={codebar}
                imgDesc="Giving a talk at Codebar"
              >
                <p>
                  I organise and mentor at{" "}
                  <a
                    href="https://codebar.io/manchester"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codebar Manchester,
                  </a>{" "}
                  a non-profit group designed to help underrepresented people
                  learn to code in a friendly and supportive environment. I have
                  also led courses in Ruby, HTML and CSS with{" "}
                  <a
                    href="https://www.codefirstgirls.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodeFirst:Girls
                  </a>{" "}
                  Manchester since 2018.
                </p>
              </EducatorSection>

              <EducatorSection side="right" img={cfg}>
                <p>
                  I have given an{" "}
                  <span className="stronger">Introduction to JavaScript</span>{" "}
                  workshops at various events, including the CodeFirst:Girls
                  2018 Northern Conference and CodeUp. Thank you for having me!
                  More like this please{" "}
                  <span role="img" aria-label="praying hands">
                    🙏
                  </span>{" "}
                </p>
              </EducatorSection>

              <EducatorSection
                side="left"
                img={talk}
                imgDesc="Giving a lightning talk"
              >
                <p>
                  I mentor at{" "}
                  <a
                    href="http://railsgirls.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rails Girls
                  </a>{" "}
                  and once gave a lightning talk on{" "}
                  <span className="stronger">
                    The Weird World of Programming Languages
                  </span>
                  . (I also used to have pretty cool hair)
                </p>
              </EducatorSection>

              <EducatorSection
                side="right"
                img={teaching}
                imgDesc="Giving an Intro to JavaScript workshop"
              >
                <p>
                  I am always interested to hear about opportunities to give
                  short talks, presentations or workshops, especially for
                  underrepresented groups in tech.{" "}
                  <a href="mailto:harriethryder@gmail.com">
                    Drop me an email{" "}
                    <span role="img" aria-label="mail">
                      📧
                    </span>
                  </a>
                </p>
              </EducatorSection>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    blogposts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMM, YYYY")
            description
            language
          }
        }
      }
    }
    talks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            frontimage
            category
            technical
            platform
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
