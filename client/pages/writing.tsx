import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

// components
import Filters from "components/Writing/Filters";
import Link from "components/General/Link";
import Toolbar from "components/Writing/Toolbar";

// posts
import { getSortedPostsData } from "../util/fetchMarkdown";

// types
import { GetStaticProps } from "next";
import { PostDataProps } from "types";

// utility
import processPosts from "util/processPosts";
import getPostTags from "util/getPostTags";

interface Props {
  posts: [PostDataProps];
}

const Writing = ({ posts }: Props) => {
  const tags = getPostTags(posts);

  const [sortByDesc, setSortByDesc] = useState(true);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  const { query } = useRouter();
  const filter = query.filter?.toString();

  const setSort = (newSortBy: "date" | "title") => {
    if (sortBy === newSortBy) setSortByDesc(!sortByDesc);

    setSortBy(newSortBy);
  };

  return (
    <>
      <Head>
        <title>Writing | Alex King</title>
      </Head>

      <Styles id="page">
        <h1>Writing ✍️</h1>

        <Toolbar setSort={setSort} />

        <div>
          <section>
            {processPosts(posts, sortBy, sortByDesc, filter).map(
              ({ id, title }) => (
                <h4 key={id}>
                  <Link
                    href="/writing/[id]"
                    as={`/writing/${id}`}
                    className="no-styles"
                    text={title}
                  />
                </h4>
              )
            )}
          </section>

          <Filters tags={tags} />
        </div>
      </Styles>
    </>
  );
};

export default Writing;

const Styles = styled.main`
  div {
    display: flex;

    section {
      width: 70%;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();

  return { props: { posts } };
};
