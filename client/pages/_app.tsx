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

        <Component {...pageProps} />

        <Footer />
      </>
    </Styles>
  );
};

export default App;

const Styles = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;

  min-height: 100vh;
  max-width: 1200px;
  margin: 0 4%;

  #page {
    min-height: calc(100vh - 120px);

    @media (max-width: 500px) {
      min-height: calc(100vh);
    }
  }
`;
