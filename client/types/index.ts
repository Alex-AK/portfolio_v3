import { Dispatch, SetStateAction } from "react";

export type HandleClickProps = () => void;
export type HandleMouseLeave = () => void;

export type SetMenuProps = Dispatch<SetStateAction<boolean>>;
export type SetIndexProps = Dispatch<SetStateAction<number>>;
export type SetSortProps = Dispatch<SetStateAction<string>>;

export type SetFilterProps = Dispatch<SetStateAction<string[]>>;

export type AnyObjectProps = Record<string, unknown>;

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
