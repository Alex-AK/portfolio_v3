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
    font-size: 2.6rem;
    font-weight: bold;
    letter-spacing: 1.25px;
    line-height: 1.25;
    margin-bottom: 15px;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    word-spacing: 3px;
    margin-bottom: 15px;
    line-height: 1.2;

    @media (max-width: 800px) {
      font-size: 2.4rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    padding-bottom: 10px;
    line-height: 3rem;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  /* h4 used for footer */
  h4 {
    font-size: 1.6rem;
    letter-spacing: 1px;
    padding-bottom: 5px;
  }

  /* h5 user in nav bar */
  h5 {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }

  h6 {
    font-size: 1.3rem;
    letter-spacing: 1px;
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

    :hover {
      color: ${colors.mediumGrey};
      transition: 0.3s;
      cursor: pointer;
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
