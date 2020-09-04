import { useState } from "react";
import Head from "next/head";
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
  const [sort, setSort] = useState("date");
  const [filters, setFilters] = useState([]);
  console.log(filters);

  const tags = getPostTags(posts);

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
            {processPosts(posts, filters, sort).map(({ id, title }) => (
              <h4 key={id}>
                <Link
                  href="/writing/[id]"
                  as={`/writing/${id}`}
                  className="no-styles"
                  text={title}
                />
              </h4>
            ))}
          </section>

          <Filters tags={tags} filters={filters} setFilters={setFilters} />
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
