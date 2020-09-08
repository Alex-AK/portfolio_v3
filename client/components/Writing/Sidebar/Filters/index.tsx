import styled from "styled-components";

// components
import Tag from "components/General/Tag";

interface Props {
  tags: string[];
}

const Filters = ({ tags }: Props) => {
  return (
    <Styles className="options-container">
      <h3>Filter By</h3>

      <div>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </Styles>
  );
};

export default Filters;

const Styles = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
