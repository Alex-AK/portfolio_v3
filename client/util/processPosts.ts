import { PostDataProps } from "types";

const processPosts = (
  posts: [PostDataProps],
  sortBy: "date" | "title",
  sortByDesc: boolean,
  filter?: undefined | string
) => {
  const sortedPosts = posts.sort((a, b) => {
    const compare = a[`${sortBy}`].toLowerCase() > b[`${sortBy}`].toLowerCase();

    if (!sortByDesc) return compare ? -1 : 1;

    return compare ? 1 : -1;
  });

  if (!filter) return sortedPosts;

  const processedPosts = sortedPosts.filter((post) =>
    post.tags.includes(filter.replace("-", " "))
  );

  return processedPosts;
};

export default processPosts;
