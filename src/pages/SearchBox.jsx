import styled from "styled-components";
import SearchBoxRow from "../components/SearchBoxRow";

const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function SearchBox() {
  return (
    <StyledSearchBox>
      <SearchBoxRow />
    </StyledSearchBox>
  );
}

export default SearchBox;
