import React from "react";
import Head from "next/head";
import styled from "styled-components";

// component
import Link from "components/General/Link";
import Date from "components/General/Date";
import Tags from "components/General/Tags";

// util
import { getAllPostIds, getPostData } from "util/fetchMarkdown";

// types
import { GetStaticProps, GetStaticPaths } from "next";
import { PostDataProps } from "types";
interface Props {
  postData: PostDataProps;
}

const Post = ({ postData }: Props) => {
  const { title, date, tags, site, code, contentHtml } = postData;

  return (
    <Styles id="page">
      <Head>
        <title>{title} | Alex King Writing</title>
      </Head>

      <article>
        <h1>{title}</h1>
        <Tags tags={tags} />
        <Date date={date} />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      {site && <Link href={site} text="View Site" openInNewTab />}

      {code && (
        <Link
          href={`https://github.com/${code}`}
          text="View Code"
          openInNewTab
        />
      )}

      <Link href="/writing">Return to Writing</Link>
    </Styles>
  );
};

export default Post;

const Styles = styled.div`
  max-width: 800px;

  article {
    margin-bottom: 50px;
  }

  a {
    margin-right: 10px;
  }

  img {
    width: 100%;
    margin: 10px 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #d3d3d3;
    border-radius: 3px;
  }

  .main-image {
    float: right;
    margin: 0 0 20px 50px;
    width: 450px;

    @media (max-width: 950px) {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return { paths, fallback: false };
};
