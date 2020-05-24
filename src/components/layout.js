import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

import favicon from "./images/favicon.ico";
import "./layout.css";

const Header = ({ title }) => (
  <header>
    <div className="container">
      <Link to="/" className="headerLink">
        <h1>{title}</h1>
      </Link>
    </div>
  </header>
);

class SocialBanner extends React.Component {
  state = {
    bannerColor: "",
  };

  componentDidMount() {
    if (window.innerWidth <= 750) {
      this.setState({
        bannerColor: "lightBg",
      });
    }
  }

  render() {
    return (
      <div id="socialBanner" className={this.state.bannerColor}>
        <ul id="mediaIcons">
          <li className="mediaIcon">
            <a
              href="https://twitter.com/harri_etty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-2x fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li className="mediaIcon">
            <a
              href="https://github.com/harrietty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-2x fa-github" aria-hidden="true" />
            </a>
          </li>
          <li className="mediaIcon">
            <a
              href="https://www.linkedin.com/in/harriet-ryder-027516127/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const Layout = ({ meta, children }) => {
  let twitterTitle = "Harriet Ryder | Blog | Website";
  let twitterDescription = "";
  let slug = "";
  if (meta && meta.title) twitterTitle = meta.title;
  if (meta && meta.slug) slug = meta.slug;
  if (meta && meta.description) twitterDescription = meta.description;
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => {
        return (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              link={[
                { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
                {
                  rel: "stylesheet",
                  href:
                    "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
                },
              ]}
              meta={[
                {
                  name: "viewport",
                  content: "width=device-width",
                  "initial-scale": "1.0",
                },
                {
                  name: "description",
                  content: "Personal blog and portfolio of Harriet Ryder",
                },
                {
                  name: "keywords",
                  content:
                    "coding, javascript, learning, ReactJS, React, Python, Ruby, Rails, Node, NodeJS, programming, software development",
                },
                {
                  name: "twitter:card",
                  content: "summary",
                },
                {
                  name: "twitter:creator",
                  content: "@harri_etty",
                },
                {
                  name: "twitter:title",
                  content: twitterTitle,
                },
                {
                  name: "twitter:description",
                  content: twitterDescription,
                },
                {
                  name: "twitter:image",
                  content: "https://www.harrietryder.co.uk/me.png",
                },
                {
                  property: "og:title",
                  content: twitterTitle,
                },
                {
                  property: "og:image",
                  content: "https://www.harrietryder.co.uk/me.png",
                },
                {
                  property: "og:description",
                  content: twitterDescription,
                },
                {
                  property: "og:url",
                  content: `https://www.harrietryder.co.uk${slug}`,
                },
              ]}
              script={[
                {
                  src: "https://use.fontawesome.com/e835c50e09.js",
                },
              ]}
            />
            <Header title={data.site.siteMetadata.title} />
            <SocialBanner />
            <div
              style={{
                margin: "0 auto",
                maxWidth: 1250,
                padding: "0px 1.0875rem 1.45rem",
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </div>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  meta: PropTypes.object,
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Layout;
