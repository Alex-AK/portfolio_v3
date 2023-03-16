import Link from "next/link";
import styled from "styled-components";

// theme
import { colors } from "styles/theme";

// types
import { HandleClickProps } from "../../types";

export interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  handleClick?: HandleClickProps;
  testId?: string;
  redirect?: string;
}

const Button = ({
  text,
  testId,
  type,
  className,
  handleClick,
  redirect,
}: Props) => {
  const handleClickOrRedirect = () => {
    if (redirect) return window.open(redirect, "_self");
    else handleClick && handleClick();
  };

  return (
    <Styles
      data-testid={testId}
      className={className}
      type={type}
      onClick={handleClickOrRedirect}
    >
      {text}
    </Styles>
  );
};

export default Button;

Button.defaultProps = {
  testId: "",
  className: "",
  type: "button",
  handleClick: undefined,
  redirect: undefined,
};

const Styles = styled.button`
  font-size: 1.5rem;
  font-family: inherit;
  text-transform: capitalize;

  min-width: 110px;
  height: 40px;
  padding-top: 1px;

  background: ${colors.lightYellow};
  border: solid 1px ${colors.lightYellow};
  border-radius: 4px;

  /* margin-right: 12px; */

  :hover {
    background: ${colors.yellow};
    transition: 0.3s;
    cursor: pointer;
  }

  :focus {
    outline: none;
    background: ${colors.yellow};
  }

  /* find button options in Options stylesheet 
  - .invert-button
  - .disable-button
  - .delete-button
  - .remove-button-styles
  */
`;
