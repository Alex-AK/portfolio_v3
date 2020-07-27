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

const Now = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Styles id="page">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Styles>
    </>
  );
};

export default Now;

const Styles = styled.main``;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("now");

  return { props: { pageData } };
};
