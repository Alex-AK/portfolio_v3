import NextLink from "next/link";

export interface Props {
  href: string;
  as?: string;
  children?: any;
  text?: string;
  testId?: string;
  openInNewTab?: boolean;
  className?: string;
}

const Link = ({
  href,
  as,
  children,
  text,
  testId,
  openInNewTab,
  className,
}: Props) => {
  if (openInNewTab) {
    return (
      <a
        href={href}
        data-testid={testId}
        className={`${className} hyperlink`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children || text}
      </a>
    );
  }

  return (
    <NextLink href={href} as={as}>
      <a data-testid={testId} className={`${className} hyperlink`}>
        {children || text}
      </a>
    </NextLink>
  );
};

export default Link;

Link.defaultProps = {
  as: undefined,
  testId: undefined,
  openInNewTab: false,
  children: undefined,
  text: "",
  className: "",
};
