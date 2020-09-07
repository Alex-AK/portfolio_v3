import styled from "styled-components";
import { colors } from "styles/theme";

// components
import Filters from "./Filters";
import SortOptions from "./SortOptions";

// types
import { SetSortProps } from "types";

interface Props {
  tags: string[];
  setSort: SetSortProps;
}

const Sidebar = ({ tags, setSort }: Props) => {
  return (
    <Styles>
      <SortOptions setSort={setSort} />
      <Filters tags={tags} />
    </Styles>
  );
};

export default Sidebar;

const Styles = styled.aside`
  width: 300px;
  height: 300px;
  border-left: 1px solid ${colors.darkGrey};
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    display: none;
  }

  .options-container {
    display: flex;
    flex-direction: column;
    margin: 0 0 30px 20px;

    h3 {
      line-height: 1;
      margin-top: 0;
    }

    button {
      margin-right: 10px;
    }
  }
`;
