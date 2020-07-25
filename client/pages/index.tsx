import Head from "next/head";
import styled from "styled-components";

// components
import Button from "components/General/Button";
// import Link from "components/General/Link";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";

interface Props {
  pageData: { id: string; title: string; contentHtml: string };
}

const Home = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styles id="page">
        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {["projects", "writing", "about", "now", "contact"].map((button) => {
            return (
              <Button key={button} text={button} redirect={`/${button}`} />
            );
          })}
        </div>
      </Styles>
    </>
  );
};

export default Home;

const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin-right: 10%;
  }

  h1 span {
    font-weight: 300;
    font-size: 2.8rem;
  }

  button {
    margin: 0 10px 10px 0;
  }

  h4:nth-child(3) {
    margin: 15px 0;
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("home");

  return { props: { pageData } };
};
