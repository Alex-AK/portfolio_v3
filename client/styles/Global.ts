import { css } from "styled-components";

// theme
import { colors } from "./theme";

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    /* 1rem === 10px */
    font-size: 62.5%;
  }

  html,
  body {
    scroll-behavior: smooth;
    font-family: "Helvetica", sans-serif;
    background: ${colors.white};
    color: ${colors.darkGrey};

    max-width: 1100px;
    margin: 0 auto;
    padding: 0;

    cursor: default;

    @media (max-width: 1100px) {
      width: 100%;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  input,
  textarea {
    max-width: 650px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
    line-height: 2;
    margin-bottom: 15px;

    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    word-spacing: 3px;
    margin-bottom: 15px;
    line-height: 1.8;

    @media (max-width: 800px) {
      font-size: 2.2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    padding-bottom: 10px;
    line-height: 1.8;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  h4 {
    font-size: 1.6rem;
    letter-spacing: 1px;
    padding-bottom: 5px;
    line-height: 1.6;
  }

  h5 {
    font-size: 1.4rem;
    letter-spacing: 1px;
    line-height: 1.2;
  }

  h6 {
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1;
  }

  p,
  label,
  span,
  input,
  textarea,
  option,
  select,
  button,
  a,
  li {
    font-size: 1.6rem;
    font-family: inherit;

    :focus {
      outline: none;
    }
  }

  p,
  label {
    line-height: 1.5;
    letter-spacing: 0.5px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.darkGrey};
  }

  .hyperlink {
    padding: 3px 2px 1px 2px;
    border-bottom: 2px solid ${colors.linkHover};

    :hover {
      background: ${colors.linkHover};
      transition: 0.4s;
      cursor: pointer;
    }
  }

  .no-styles {
    padding: 0;
    border-bottom: 0;

    :hover {
      background: transparent;
    }
  }

  input,
  textarea {
    line-height: 1.5;
    letter-spacing: 0.6px;
    border: none;
    background: white;
  }

  time {
    font-size: 1.6rem;
    color: ${colors.mediumGrey};
  }
`;
