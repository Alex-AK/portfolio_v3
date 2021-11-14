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
    background: ${colors.background};
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
  textarea,
  blockquote {
    max-width: 650px;
    line-height: 1.6;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: 1.25px;

    @media (max-width: 800px) {
      font-size: 2.6rem;
    }
  }

  h2,
  legend {
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin-top: 10px;
    padding-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  h4 {
    font-size: 1.6rem;
    margin-top: 5px;
    letter-spacing: 1px;

    @media (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  h5 {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }

  h6 {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  strong {
    font-weight: 600;
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
    letter-spacing: 0.5px;
    font-family: inherit;

    :focus {
      outline: none;
    }
  }

  p,
  label {
    margin-bottom: 10px;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.darkGrey};
    padding-top: 3px;
    border-bottom: 2px solid ${colors.lightYellow};

    :hover,
    :focus {
      background: ${colors.yellow};
      transition: 0.6s;
      cursor: pointer;
    }
  }

  .no-styles {
    padding: 0;
    border: 0;
    display: inline-block;

    :hover {
      background: transparent;
    }
  }

  input,
  textarea {
    letter-spacing: 0.6px;
    border: none;
    background: white;
  }

  time {
    font-size: 1.6rem;
    color: ${colors.mediumGrey};
  }

  li {
    font-size: 1.5rem;
    margin: 0 0 8px 20px;
    list-style: circle;
  }

  blockquote {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 40px 0;
    min-height: 182px;
    padding: 40px 20px 50px 20px;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

    p {
      font-size: 1.5rem;

      :last-child {
        text-align: right;
        margin: 0;
      }
    }
  }

  /* form sections */
  form {
    max-width: 280px;
    min-width: 280px;
    display: flex;
    flex-direction: column;

    margin-left: 100px;

    @media (max-width: 600px) {
      margin: 20px auto;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 30px;
    border-radius: 3px;
    padding-left: 3px;
    background: #fafafa;
    border: 1px solid #c7c7c7;
  }

  .hidden {
    display: none;
  }
`;
