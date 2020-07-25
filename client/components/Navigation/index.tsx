import styled from "styled-components";

// components
import Button from "components/General/Button";
import Link from "components/General/Link";

interface Props {} // eslint-disable-line

const MainNavigation = ({}: Props) => {
  // hide main navigation on homepage, in favor of buttons
  if (window.location.pathname === "/") return <div style={{ height: 60 }} />;

  return (
    <Styles id="header-navigation">
      <Link href="/" className="no-styles">
        <strong>AK</strong>
      </Link>

      <div className="menu">
        {["projects", "writing", "about", "now", "contact"].map((nav) => {
          return (
            <Link key={nav} href={`/${nav}`}>
              {nav}
            </Link>
          );
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
  align-items: center;

  strong {
    font-size: 2.4rem;
  }

  a {
    margin-left: 50px;
  }
`;
