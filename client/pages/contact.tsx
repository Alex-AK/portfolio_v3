import Head from "next/head";
import styled from "styled-components";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PageDataProps } from "types";

interface Props {
  pageData: PageDataProps;
}

const Contact = ({ pageData }: Props) => {
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
        </div>
      </Styles>
    </>
  );
};

export default Contact;

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
  const pageData = await getPageData("contact");

  return { props: { pageData } };
};
