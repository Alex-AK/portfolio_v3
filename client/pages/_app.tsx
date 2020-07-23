import styled from "styled-components";

// components
import GlobalStyles from "styles";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

// hooks
import useCSSHydrate from "hooks/useCSSHydrate";

// types
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  // render fragment until css is delivered
  const isLoading = useCSSHydrate();
  if (isLoading) return <></>;

  return (
    <Styles>
      <GlobalStyles />

      <>
        <Navigation />

        <div id="page">
          <Component {...pageProps} />
        </div>

        <Footer />
      </>
    </Styles>
  );
};

export default App;

const Styles = styled.div`
  display: grid;

  grid-template-areas:
    "header-navigation"
    "page"
    "footer-navigation";

  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;

  height: 100vh;
  max-width: 1200px;

  #page {
    height: calc(100vh - 110px);
  }
`;
