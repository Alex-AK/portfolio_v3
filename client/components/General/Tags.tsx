import styled from "styled-components";

// components
import Link from "./Link";

// theme
import { colors } from "styles/theme";

interface Props {
  tags: string;
}

const Tags = ({ tags }: Props) => {
  return (
    <Styles>
      {tags.split(", ").map((tag) => (
        <Link
          key={tag}
          href={`/writing?filter=${tag}`}
          text={tag}
          className="no-styles"
        />
      ))}
    </Styles>
  );
};

export default Tags;

const Styles = styled.div`
  margin-bottom: 20px;

  a {
    background: ${colors.lightYellow};
    margin-right: 5px;
    padding: 6px 15px 4px 15px;
    border-radius: 6px;
    font-size: 1.4rem;

    :hover {
      background: ${colors.yellow};
    }
  }
`;
