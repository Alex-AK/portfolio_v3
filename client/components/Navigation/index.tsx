import styled from "styled-components";

// components
import Button from "components/General/Button";

interface Props {} // eslint-disable-line

const MainNavigation = ({}: Props) => {
  // hide main navigation on homepage, in favor of buttons
  if (window.location.pathname === "/") return <div style={{ height: 60 }} />;

  return (
    <Styles id="header-navigation">
      {/* replace with logo */}
      <Button text="home" redirect="/" />

      <div className="menu">
        {["projects", "writing", "about", "now", "contact"].map((button) => {
          return <Button key={button} text={button} redirect={`/${button}`} />;
        })}
      </div>
    </Styles>
  );
};

export default MainNavigation;

const Styles = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;

  .menu {
    button {
      margin-left: 10px;
    }
  }
`;
