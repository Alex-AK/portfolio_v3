import Head from "next/head";
import styled from "styled-components";

interface Props {} // eslint-disable-line

const About = ({}: Props) => {
  return (
    <>
      <Head>
        <title>About | Alex King</title>
      </Head>

      <Styles id="page">
        <h1>About</h1>
      </Styles>
    </>
  );
};

export default About;

const Styles = styled.main``;
