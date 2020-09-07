import styled from "styled-components";

// components
import Button from "components/General/Button";

// types
import { SetSortProps } from "types";

interface Props {
  setSort: SetSortProps;
}

const ToolBar = ({ setSort }: Props) => {
  return (
    <Styles className="options-container">
      <h3>Sort By</h3>

      <div>
        <Button text="most recent" handleClick={() => setSort("date")} />
        <Button text="title" handleClick={() => setSort("title")} />
      </div>
    </Styles>
  );
};

export default ToolBar;

const Styles = styled.div``;
