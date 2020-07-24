import Head from "next/head";
import styled from "styled-components";

interface Props {} // eslint-disable-line

const Now = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Now | Alex King</title>
      </Head>

      <Styles id="page">
        <h1>Now</h1>
      </Styles>
    </>
  );
};

export default Now;

const Styles = styled.main``;
