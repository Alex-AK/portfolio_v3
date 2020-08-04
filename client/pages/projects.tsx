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

const Projects = ({ pageData }: Props) => {
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

export default Projects;

const Styles = styled.main`
  .project {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 100px;
    margin-bottom: 60px;

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
      grid-gap: 40px;
    }

    a {
      margin-right: 5px;
    }
  }

  .project-images {
    position: relative;
    width: 450px;
    min-height: 205px;
    margin: 50px auto 0 auto;

    @media (max-width: 500px) {
      width: 90%;
      margin-left: 0;
    }

    .desktop {
      width: 100%;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }

    .mobile {
      position: absolute;
      width: 150px;
      right: -30px;
      top: 20px;

      @media (max-width: 500px) {
        width: 110px;
      }
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("projects");

  return { props: { pageData } };
};
