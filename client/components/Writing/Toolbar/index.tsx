import styled from "styled-components";
import Button from "components/General/Button";

// types
import { SetSortProps } from "types";

interface Props {
  setSort: SetSortProps;
}

const ToolBar = ({ setSort }: Props) => {
  return (
    <Styles>
      <Button text="most recent" handleClick={() => setSort("date")} />
      <Button text="title" handleClick={() => setSort("title")} />
    </Styles>
  );
};

export default ToolBar;

const Styles = styled.div`
  height: 60px;
`;
