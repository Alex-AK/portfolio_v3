import Head from "next/head";
import styled from "styled-components";

// components
import Link from "components/General/Link";

// posts
import { getSortedPostsData } from "../util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PostDataProps } from "types";

interface Props {
  posts: [PostDataProps];
}

const Writing = ({ posts }: Props) => {
  // const allTags = [];
  // posts.forEach(({ tags }) => {
  //   tags.split(", ").forEach((tag: string) => {
  //     if (allTags.includes(tag)) allTags.push(tag);
  //   });
  // });

  return (
    <>
      <Head>
        <title>Writing | Alex King</title>
      </Head>
      <Styles id="page">
        <h1>Writing</h1>

        <section>
          {posts.map(({ id, title }) => (
            <Link
              key={id}
              href="/writing/[id]"
              as={`/writing/${id}`}
              className="no-styles"
            >
              <h4>{title}</h4>
            </Link>
          ))}
        </section>
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.main``;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();

  return { props: { posts } };
};
