// components
import Link from "./Link";

interface Props {
  tag: string;
}

const Tags = ({ tag }: Props) => {
  return (
    <Link
      key={tag}
      text={tag}
      href={`/writing?filter=${tag.replace(" ", "-")}`}
      className="no-styles tag"
    />
  );
};

export default Tags;
