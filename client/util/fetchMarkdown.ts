import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeFormat from "rehype-format";

// types
import { PostDataProps } from "types";

const postsDirectory = path.join(process.cwd(), "content/posts");
const pageDirectory = path.join(process.cwd(), "content/pages");

const getProcessedContent = (content) => {
  const processedContent = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);

  return processedContent;
};

export const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = `${postsDirectory}/${fileName}`;
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return { id, ...matterResult.data };
  });

  // Sort posts by date
  return allPostsData.sort((a: PostDataProps, b: PostDataProps) =>
    a.date < b.date ? 1 : -1
  );
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    return { params: { id } };
  });
};

export const getPostData = async (id: string | string[]) => {
  const fullPath = `${postsDirectory}/${id}.md`;
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await getProcessedContent(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return { id, contentHtml, ...matterResult.data };
};

export const getPageData = async (page: string) => {
  const fullPath = path.join(pageDirectory, `${page}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await getProcessedContent(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return { contentHtml, ...matterResult.data };
};
