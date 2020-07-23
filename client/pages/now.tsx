import Head from "next/head";

interface Props {} // eslint-disable-line

const now = ({}: Props) => {
  return (
    <>
      <Head>
        <title>Now | Alex King</title>
      </Head>
      <h1>Now</h1>
    </>
  );
};

export default now;
