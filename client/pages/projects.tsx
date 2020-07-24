import Head from "next/head";
import styled from "styled-components";

interface Props {} // eslint-disable-line

const Project = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Project | Alex King</title>
      </Head>

      <Styles id="page">
        <h1>Project</h1>
      </Styles>
    </>
  );
};

export default Project;

const Styles = styled.main``;
