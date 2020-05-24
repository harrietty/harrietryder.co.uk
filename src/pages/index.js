import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import myFace from "../img/face.png";
import codebar from "../img/1.jpg";
import cfg from "../img/3.jpg";
import randomTalks from "../img/6.jpg";
import talk from "../img/talk.jpg";
import teaching from "../img/codebar.png";
import nc from "../img/5.jpg";
import techreturners from "../img/returners.jpeg";
import { generalCategories, technicalCategories } from "../models/categories";
import PostLink from "../components/PostLink";
import "milligram";
import "./index.css";

import EducatorSection from "../components/EducatorSection";

const PostsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 0px;
  grid-column-gap: 30px;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const PostsSingleListContainer = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`;

const PostsList = styled.ul`
  flex-grow: 1;
  height: 100%;
  background: oldlace;
  padding: 25px 7px;
  border-radius: 9px;
  .with-border {
    border-right: 1px solid lightgray;
  }
  li {
    margin-bottom: 30px;
  }
  @media (max-width: 1020px) {
    padding: 25px;
  }
`;

const PostEmoji = styled.span`
  padding: 0 10px;
  text-decoration: none;
  font-size: 26px;
  @media (max-width: 1155px) {
    font-size: 16px;
  }
`;

const PostHeading = styled.h5`
  font-size: 20px;
  margin-left: 20px;
  @media (max-width: 1155px) {
    font-size: 16px;
  }
`;

const PostTitle = styled.span`
  text-decoration: underline;
  text-decoration-style: wavy;
  -moz-text-decoration-style: wavy;
  -webkit-text-decoration-style: wavy;
  text-decoration-color: lightseagreen;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const IndexPage = ({ data }) => {
  const generalCategoryKeys = Object.keys(generalCategories);
  const techCategoryKeys = Object.keys(technicalCategories);
  const generalPostsByCategory = {};
  const technicalPostsByCategory = {};
  data.blogposts.edges.forEach((post) => {
    const category = post.node.frontmatter.category;
    const isGeneral = generalCategoryKeys.includes(category);
    const isTechnical =
      post.node.frontmatter.technical && techCategoryKeys.includes(category);
    if (isGeneral) {
      if (generalPostsByCategory[category]) {
        generalPostsByCategory[category].push(post);
      } else {
        generalPostsByCategory[category] = [post];
      }
    } else if (isTechnical) {
      if (technicalPostsByCategory[category]) {
        technicalPostsByCategory[category].push(post);
      } else {
        technicalPostsByCategory[category] = [post];
      }
    }
  });

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="column column-80" style={{ margin: "auto" }}>
            <section>
              <h3>hello</h3>
              <div className="welcomeSection">
                <img src={myFace} className="myFace" alt="My Face" />
                <div className="intro">
                  <p>
                    Hi! I&apos;m a software engineer with a passion for natural
                    languages and education. Currently working as a front-end
                    developer in a React/Redux/Typescript stack,{" "}
                    <a href="#education">teaching</a> software development in
                    the evenings and working on too many sideprojects, most
                    recently:{" "}
                    <a
                      href="https://conju-gator.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      conju-gator.com
                    </a>
                  </p>
                  <p>
                    I <a href="#blog">blog</a> and speak about tech, my journey
                    into it, and tech education.
                  </p>
                  <p>
                    Follow my{" "}
                    <Link to="/100daysofcode">#100DaysOfCode progress</Link>{" "}
                    (and yours, too!)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section id="blog">
          <div className="row">
            <div className="column column-80" style={{ margin: "auto" }}>
              <h3>writing</h3>
            </div>
          </div>
          <div className="row">
            <div className="column column 95" style={{ margin: "auto" }}>
              <PostsGridContainer>
                {[
                  {
                    keys: techCategoryKeys,
                    posts: technicalPostsByCategory,
                    allCategories: technicalCategories,
                  },
                  {
                    keys: generalCategoryKeys,
                    posts: generalPostsByCategory,
                    allCategories: generalCategories,
                  },
                ].map((postType) =>
                  postType.keys.map((categoryKey, i) => {
                    return (
                      <GridItem key={categoryKey}>
                        <PostHeading>
                          <PostTitle>
                            {postType.allCategories[categoryKey].title}
                          </PostTitle>
                          <PostEmoji>
                            {postType.allCategories[categoryKey].emoji}
                          </PostEmoji>
                        </PostHeading>
                        <PostsList className={i < 2 && "with-border"}>
                          {postType.posts[categoryKey] ? (
                            postType.posts[categoryKey].slice(0, 5).map((p) => {
                              return (
                                <PostLink
                                  post={p}
                                  key={p.node.frontmatter.title}
                                />
                              );
                            })
                          ) : (
                            <p>No posts in this category 😢</p>
                          )}
                        </PostsList>
                      </GridItem>
                    );
                  })
                )}
              </PostsGridContainer>
              <PostsSingleListContainer>
                {data.blogposts.edges.slice(0, 10).map((p) => {
                  return <PostLink post={p} key={p.node.frontmatter.title} />;
                })}
              </PostsSingleListContainer>
              (<Link to="/blog">See all</Link>)
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
              <h3>teaching/mentoring/speaking</h3>
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
                  workshops at various events, including the{" "}
                  <a
                    href="https://www.codefirstgirls.org.uk/northern-conference-2018.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CodeFirst:Girls 2018 Northern Conference
                  </a>{" "}
                  and CodeUp. Thank you for having me! More like this please{" "}
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
                  I am always interested in opportunities to give short talks or
                  presentations, especially regarding my journey into tech,
                  learning/training options and opportunities, and/or technical
                  workshops (HTML, CSS, JavaScript, Ruby, Git etc).{" "}
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
      filter: { fileAbsolutePath: { regex: "/blog/|/external-posts/" } }
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
            category
            technical
            url
            platform
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
