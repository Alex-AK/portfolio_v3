export type HandleClick = () => void;

export type anyObject = Record<string, unknown>;

export type PostDataProps = {
  id: string;
  title: string;
  tags: string;
  date: string;
  author: string;
  site: string;
  code: string;
  contentHtml: string;
};

export type MetaDataProps = {
  date: string;
  tags: string;
  site: string;
  code: string;
};

export type PageDataProps = {
  id: string;
  title: string;
  description: string;
  contentHtml: string;
};
