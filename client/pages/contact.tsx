import Head from "next/head";
import styled from "styled-components";

interface Props {} // eslint-disable-line

const contact = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Contact | Alex King</title>
      </Head>

      <Styles id="page">
        <h1>Contact</h1>
      </Styles>
    </>
  );
};

export default contact;

const Styles = styled.main``;
