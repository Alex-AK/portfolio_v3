import React from "react";
import styled from "styled-components";

// components
import Link from "components/General/Link";

const Footer = () => {
  return (
    <Styles id="footer-navigation">
      <Link
        href="https://github.com/alex-ak"
        className="no-styles"
        openInNewTab
      >
        <img src="icons/github-icon.png" alt="github icon" />
      </Link>

      <a href="mailto:hello@alex-ak.com" className="no-styles">
        <img src="icons/email-icon.png" alt="email icon" />
      </a>

      <Link
        href="https://linkedin.com/in/alex-ak"
        className="no-styles"
        openInNewTab
      >
        <img src="icons/linkedin-icon.png" alt="linkedIn icon" />
      </Link>
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
