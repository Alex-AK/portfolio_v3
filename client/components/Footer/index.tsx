import React from "react";
import styled from "styled-components";

// components
import Link from "components/General/Link";

const Footer = () => {
  return (
    <Styles id="footer-navigation">
      <Link
        href="https://twitter.com/_alex_ak"
        className="no-styles"
        openInNewTab
      >
        <img src="icons/twitter.png" alt="twitter icon" />
      </Link>

      <Link
        href="https://github.com/alex-ak"
        className="no-styles"
        openInNewTab
      >
        <img src="icons/github.png" alt="github icon" />
      </Link>

      <Link
        href="https://linkedin.com/in/alex-ak"
        className="no-styles"
        openInNewTab
      >
        <img src="icons/linkedin.png" alt="linkedIn icon" />
      </Link>

      <a href="mailto:hello@alex-ak.com" className="no-styles">
        <img src="icons/email.png" alt="email icon" />
      </a>
    </Styles>
  );
};

export default Footer;

const Styles = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto 0 auto;
    left: 0;
  }

  img {
    width: 28px;
    margin: 0 15px;
  }

  a {
    text-decoration: none;
    z-index: 3;
  }
`;
