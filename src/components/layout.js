import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql, StaticQuery} from 'gatsby';
import Helmet from 'react-helmet';

import favicon from './images/favicon.ico';
import './layout.css';

const Header = ({title}) => (
  <header>
    <div className='container'>
      <Link to='/' className='headerLink'><h1>{title}</h1></Link>
    </div>
  </header>
);

class SocialBanner extends React.Component {
  state = {
    bannerColor: ''
  }

  componentDidMount() {
    if (window.innerWidth <= 750) {
      this.setState({
        bannerColor: 'lightBg'
      });
    }
  }

  render () {
    return (
      <div id="socialBanner" className={this.state.bannerColor}>
        <ul id="mediaIcons">
          <li className="mediaIcon">
            <a href="https://twitter.com/harri_etty" target="_blank" rel="noopener noreferrer" >
              <i className="fa fa-2x fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li className="mediaIcon">
            <a href="https://github.com/harrietty" target="_blank" rel="noopener noreferrer" >
              <i className="fa fa-2x fa-github" aria-hidden="true" />
            </a>
          </li>
          <li className="mediaIcon">
            <a
              href="https://www.linkedin.com/in/harriet-ryder-027516127/"
              target="_blank" rel="noopener noreferrer" 
            >
              <i className="fa fa-2x fa-linkedin-square" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    );
  }  
};

const TemplateWrapper = ({children}) => (
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
    render={data => (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          {
            rel: "stylesheet",
            href:
              "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
            integrity:
              "sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy",
            crossorigin: "anonymous"
          },
          {
            rel: "stylesheet",
            href:
              "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          }
        ]}
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width',
            'initial-scale': '1.0'
          },
          {
            name: "description",
            content: "Personal blog and portfolio of Harriet Ryder"
          },
          {
            name: "keywords",
            content:
              "coding, javascript, learning, ReactJS, React, Python, Ruby, Rails, Node, NodeJS, programming, software development"
          }
        ]}
        script={[
          {
            src: "https://use.fontawesome.com/e835c50e09.js"
          }
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <SocialBanner />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {children}
      </div>
    </div>
  )} />
);

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
