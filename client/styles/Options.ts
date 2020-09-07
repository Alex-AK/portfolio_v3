import { css } from "styled-components";

// theme
import { colors } from "./theme";

export default css`
  /* button options */
  .invert-button {
    color: ${colors.yellow};
    border: solid 1px ${colors.black};
    background: ${colors.white};

    :hover,
    :focus {
      background: ${colors.yellow};
    }
  }

  .disable-button {
    background: ${colors.paleGrey};
    border: 1px solid ${colors.paleGrey};
    color: ${colors.mediumGrey};

    :hover {
      background: ${colors.paleGrey};
      cursor: auto;
    }
  }

  .delete-button {
    :hover {
      background: ${colors.warningRed};
      border: solid 1px ${colors.warningRed};
    }
  }

  .remove-button-styles {
    font-family: inherit;
    border: 0;
    padding: 0;
    background: ${colors.white};
    min-width: 0;
    height: auto;
  }

  /* other options */
  .tag {
    height: 25px;
    background: ${colors.lightYellow};
    margin: 0 5px 5px 0;
    padding: 6px 15px;
    border-radius: 6px;
    font-size: 1.4rem;
    text-align: center;
    white-space: nowrap;

    :hover {
      background: ${colors.yellow};
    }
  }
`;
