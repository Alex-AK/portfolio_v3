import Head from "next/head";
import styled from "styled-components";

// components
import Link from "components/General/Link";

// posts
import { getSortedPostsData } from "../util/fetchPosts";

// types
import { GetStaticProps } from "next";

interface Props {
  posts: [{ id: string; date: string; title: string }];
}

const Writing = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Writing | Alex King</title>
      </Head>
      <Styles id="page">
        <h1>Posts</h1>

        <section>
          {posts.map(({ id, title }) => (
            <Link key={id} href="/writing/[id]" as={`/writing/${id}`}>
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
