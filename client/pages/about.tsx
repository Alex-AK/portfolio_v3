import Head from "next/head";

interface Props {} // eslint-disable-line

const about = ({}: Props) => {
  return (
    <>
      <Head>
        <title>About | Alex King</title>
      </Head>
      <h1>About</h1>
    </>
  );
};

export default about;
