import styled from "styled-components";

// components
import Tag from "components/General/Tag";

interface Props {
  tags: string;
}

const Tags = ({ tags }: Props) => {
  return (
    <Styles>
      {tags.split(", ").map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </Styles>
  );
};

export default Tags;

const Styles = styled.div`
  margin-bottom: 20px;
`;
