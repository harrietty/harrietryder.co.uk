import styled from "styled-components";
import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  margin-bottom: 50px;
  h1 {
    text-decoration: underline;
    text-decoration-style: wavy;
    color: #c7369b;
    -moz-text-decoration-style: wavy;
    -webkit-text-decoration-style: wavy;
    text-decoration-color: lightseagreen;
    text-align: center;
    font-family: Courier New, Courier, monospace;
  }
  @media (max-width: 1270px) {
    margin-top: 60px;
  }
  @media (max-width: 1285px) {
    header {
      margin-top: 65px;
      a:hover {
        text-decoration: none;
      }
    }
  }
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <div className="container">
      <Link to="/">
        <h1>{title}</h1>
      </Link>
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
