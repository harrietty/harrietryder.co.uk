import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import myFace from "../img/face2.png";
import codebar from "../img/1.jpg";
import cfg from "../img/3.jpg";
import randomTalks from "../img/6.jpg";
import talk from "../img/talk.jpg";
import teaching from "../img/codebar.png";
import nc from "../img/5.jpg";
import techreturners from "../img/returners.jpeg";
import "./index.css";

import EducatorSection from "../components/EducatorSection";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <section>
              <h3>hello</h3>
              <div className="welcomeSection">
                <img src={myFace} className="myFace" alt="My Face" />
                <div className="intro">
                  <p>
                    I'm a software developer and educator with a passion for
                    inclusivity and diversifying the tech workforce.
                  </p>
                  <p>
                    I <a href="#blog">blog</a> about tech, my journey into it,
                    education and my life in general. Most of my blog posts are
                    suitable for beginners!
                  </p>
                  <p>
                    Read more about my <a href="#education">education work</a>.
                  </p>
                </div>
              </div>
            </section>

            <section id="blog">
              <h3>blog</h3>
              <ul>
                {data.blogposts.edges.map((p, i) => (
                  <li key={i}>
                    <Link to={p.node.fields.slug} key={i}>
                      {p.node.frontmatter.title}
                    </Link>
                    <span className="postDate">
                      ({p.node.frontmatter.date})
                    </span>
                    <p className="postDescription">
                      {p.node.frontmatter.description}
                    </p>
                  </li>
                ))}
              </ul>
              (<Link to="/blog">See all</Link>)
            </section>

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

            <section>
              <h3>external blogs/publications</h3>
              <ul id="externalPosts">
                <li>
                  <a
                    href="https://medium.freecodecamp.org/what-to-expect-in-your-first-week-as-a-software-developer-322572f17063"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What to expect in your first week as a software developer
                  </a>{" "}
                  (FreeCodeCamp Publication, Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/@harrietty/zipping-and-unzipping-files-with-nodejs-375d2750c5e4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zipping and unzipping files with NodeJS
                  </a>{" "}
                  (Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/northcoders/make-a-web-scraper-with-aws-lambda-and-the-serverless-framework-807d0f536d5f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Make a web scraper with AWS Lambda and the Serverless
                    framework
                  </a>{" "}
                  (Northcoders Publication, Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/@harrietty/reimplementing-express-part-1-1c82d8fe5e01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reimplementing Express (Part 1)
                  </a>{" "}
                  (Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/@harrietty/reimplementing-express-part-2-be2c00a35b4a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reimplementing Express (Part 2)
                  </a>{" "}
                  (Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/northcoders/understanding-bugs-and-errors-in-javascript-675ebb0a109a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Understanding bugs and errors in JavaScript
                  </a>{" "}
                  (Northcoders Publication, Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/northcoders/an-algorithm-for-solving-coding-katas-ab6f2ed6a6b8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    An Algorithm for Solving Coding Katas
                  </a>{" "}
                  (Northcoders Publication, Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creating a Project Generator with NodeJS
                  </a>{" "}
                  (Northcoders Publication, Medium)
                </li>
                <li>
                  <a
                    href="https://medium.com/northcoders/5-great-coding-books-for-beginners-9726e5cc7f4e"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5 Great Books for Coding Beginners
                  </a>{" "}
                  (Northcoders Publication, Medium)
                </li>
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
                  In my current role with{" "}
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
                  Besides teaching, I'm a full-stack software engineer,
                  particularly interested in React, AWS, cloud technologies and
                  fledgeling interest in low level programming.
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
                  (the UK's top bootcamp for graduate outcomes{" "}
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
                  opportunities to give lightning talks myself. Talks I've given
                  include{" "}
                  <span className="stronger">
                    What's in the .git directory?
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
                  I regularly mentor at{" "}
                  <a
                    href="https://codebar.io/manchester"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codebar Manchester,
                  </a>{" "}
                  a non-profit group designed to help underrepresented people
                  learn to code in a friendly and supportive environment. I have
                  also lead courses in Ruby, HTML and CSS with{" "}
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

export const query = graphql`
  query {
    blogposts: allMarkdownRemark(
      limit: 5
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
          }
        }
      }
    }
  }
`;

export default IndexPage;