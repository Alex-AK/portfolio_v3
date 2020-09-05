import styled from "styled-components";
import { colors } from "styles/theme";

// components
import Tag from "components/General/Tag";
import Button from "components/General/Button";

interface Props {
  tags: string[];
}

const Filters = ({ tags }: Props) => {
  return (
    <Styles>
      <h3>Filters</h3>
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}

      <Button text="clear filters" redirect="/writing" />
    </Styles>
  );
};

export default Filters;

const Styles = styled.div`
  width: 300px;
  height: 300px;
  border-left: 1px solid ${colors.darkGrey};
  display: flex;
  flex-direction: column;
`;
