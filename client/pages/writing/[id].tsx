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

      {code && <Link href={code} text="View Code" openInNewTab />}

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
`;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return { paths, fallback: false };
};
