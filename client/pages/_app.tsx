import styled from "styled-components";

// components
import GlobalStyles from "styles";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

// types
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />

      <Styles>
        <Navigation />

        <Component {...pageProps} />

        <Footer />
      </Styles>
    </>
  );
};

export default App;

const Styles = styled.div`
  display: grid;

  max-width: 1200px;
  margin: 0 4%;

  #page {
    min-height: calc(100vh - 220px);
  }
`;
