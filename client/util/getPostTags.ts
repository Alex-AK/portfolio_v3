import { PostDataProps } from "types";

const getPostTags = (posts: [PostDataProps]) => {
  const tags = [];

  // add each tag to tags array once
  posts.forEach((post) => {
    post.tags.split(", ").forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });

  return tags;
};

export default getPostTags;
