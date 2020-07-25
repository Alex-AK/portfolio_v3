import Link from "next/link";
import { HandleClick } from "../../types";
import styled from "styled-components";

// theme
import { colors } from "styles/theme";

export interface Props {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  handleClick?: HandleClick;
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
  if (redirect)
    return (
      <Link href={redirect}>
        <a tabIndex={-1} className="no-styles">
          <Styles
            data-testid={testId}
            className={className}
            type={type}
            onClick={handleClick}
          >
            {text}
          </Styles>
        </a>
      </Link>
    );

  return (
    <Styles
      data-testid={testId}
      className={className}
      type={type}
      onClick={handleClick}
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
  padding-top: 3px;

  background: ${colors.lightYellow};
  border: solid 1px ${colors.paleGrey};
  border-radius: 4px;

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
