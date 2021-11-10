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

const Success = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Styles id="page">
        <div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </Styles>
    </>
  );
};

export default Success;

const Styles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("success");

  return { props: { pageData } };
};
