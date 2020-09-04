import styled from "styled-components";
import { colors } from "styles/theme";

// components
import Button from "components/General/Button";

// types
import { SetFilterProps } from "types";

interface Props {
  tags: string[];
  filters: string[];
  setFilters: SetFilterProps;
}

const Filters = ({ tags, filters, setFilters }: Props) => {
  const updateFilters = (tag: string) => {
    const filterIsApplied = filters.includes(tag);

    // if filter is in list, remove filter
    if (filterIsApplied) setFilters(filters.filter((t) => t !== tag));

    // if filter is not in list, add filter
    if (!filterIsApplied) setFilters([...filters, tag]);
  };

  return (
    <Styles>
      {tags.map((tag) => (
        <Button key={tag} text={tag} handleClick={() => updateFilters(tag)} />
      ))}
    </Styles>
  );
};

export default Filters;

const Styles = styled.div`
  width: 300px;
  height: 300px;
  border-left: 1px solid ${colors.darkGrey};
`;
