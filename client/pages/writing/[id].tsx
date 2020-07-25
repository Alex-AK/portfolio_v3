import React from "react";
import Head from "next/head";
import styled from "styled-components";

// component
import Link from "components/General/Link";
import Date from "components/General/Date";

// util
import { getAllPostIds, getPostData } from "util/fetchMarkdown";

// types
import { GetStaticProps, GetStaticPaths } from "next";
interface Props {
  postData: { id: string; title: string; date: string; contentHtml: string };
}

const Post = ({ postData }: Props) => {
  const { title, date, contentHtml } = postData;

  return (
    <Styles id="page">
      <Head>
        <title>{title}</title>
      </Head>

      <article>
        <h1>{title}</h1>
        <Date date={date} />

        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

      <Link href="/writing">Return to Writing</Link>
    </Styles>
  );
};

export default Post;

const Styles = styled.div`
  max-width: 800px;
`;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return { paths, fallback: false };
};
