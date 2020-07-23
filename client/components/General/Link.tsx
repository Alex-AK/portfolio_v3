import NextLink from "next/link";

export interface Props {
  href: string;
  as?: string;
  children: any;
  testId?: string;
  openInNewTab?: boolean;
  className?: string;
}

const Link = ({
  href,
  as,
  children,
  testId,
  openInNewTab,
  className,
}: Props) => {
  if (openInNewTab) {
    return (
      <a
        data-testid={testId}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} as={as}>
      <a data-testid={testId} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

Link.defaultProps = {
  as: undefined,
  testId: undefined,
  openInNewTab: false,
  className: undefined,
};
