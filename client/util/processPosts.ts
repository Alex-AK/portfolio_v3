import { PostDataProps } from "types";

const processPosts = (
  posts: [PostDataProps],
  filters: string[],
  sort: string
) => {
  const sortedPosts = posts.sort((a, b) =>
    a[`${sort}`].toLowerCase() > b[`${sort}`].toLowerCase() ? 1 : -1
  );

  if (filters.length === 0) return sortedPosts;

  const processedPosts = sortedPosts;

  return processedPosts;
};

export default processPosts;
