import styled from "styled-components";

// components
import Link from "components/General/Link";

interface Props {} // eslint-disable-line

const menuItems = ["home", "projects", "writing", "about", "now", "contact"];

const MainNavigation = ({}: Props) => {
  // hide main navigation on homepage, in favor of buttons
  if (window.location.pathname === "/") return <div style={{ height: 60 }} />;

  return (
    <Styles id="header-navigation">
      <div className="menu" role="menu">
        {menuItems.map((item) => {
          if (item === "home") {
            return (
              <Link key={item} href="/">
                {item}
              </Link>
            );
          }

          return (
            <Link key={item} href={`/${item}`}>
              {item}
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
  justify-content: flex-end;
  align-items: center;

  .menu {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 573px) {
      margin-top: 20px;
    }

    a {
      margin-left: 40px;

      @media (max-width: 573px) {
        margin-top: 10px;
      }
    }
  }
`;
