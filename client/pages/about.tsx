import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { render } from "react-dom";

// components
import Carousel from "components/General/Carousel";

// util
import { getPageData } from "util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PageDataProps } from "types";
interface Props {
  pageData: PageDataProps;
}

const About = ({ pageData }: Props) => {
  const { title, contentHtml } = pageData;

  useEffect(() => {
    // render(<Carousel />, document.getElementById("carousel-wrapper"));
  }, []);

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

export default About;

const Styles = styled.main`
  img {
    border-radius: 50%;
    width: 250px;
    margin: 0 0 20px 20px;
    float: right;

    @media (max-width: 600px) {
      width: 220px;
      min-height: 220px;
      float: none;
      margin: 25px 0 0;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageData("about");

  return { props: { pageData } };
};
