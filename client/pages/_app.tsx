import styled from "styled-components";

// components
import GlobalStyles from "styles";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

// types
import { AppProps } from "next/app";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="4ec75dff-25bd-4030-a8e3-2bc92191b7a2"
      />

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
