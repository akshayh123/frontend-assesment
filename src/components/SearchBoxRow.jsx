import styled from "styled-components";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const StyledSelect = styled.select`
  width: 50%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  margin-top: 1.5rem;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledSpan = styled.span`
  color: #100600;
  font-weight: 500;
`;

const StyledDivForm = styled.div`
  box-shadow: var(--shadow-lg);
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 2rem;
`;

function SearchBoxRow() {
  return (
    <StyledDivForm>
      <Form>
        <StyledDiv>
          <label>
            <StyledSpan>What are you looking for?</StyledSpan>
          </label>
          <br />
          <Input
            name="searchbar"
            type="text"
            placeholder="Search for category, name, company etc..."
          />
        </StyledDiv>

        <StyledDiv>
          <label>
            <StyledSpan>Category</StyledSpan>
          </label>
          <br />
          <StyledSelect>
            <option>All</option>
            <option>1</option>
            <option>2</option>
          </StyledSelect>
        </StyledDiv>
        <StyledDiv>
          <label>
            <StyledSpan>Status</StyledSpan>
          </label>
          <br />
          <StyledSelect>
            <option>All</option>
            <option>1</option>
            <option>2</option>
          </StyledSelect>
        </StyledDiv>
        <Button>Search</Button>
      </Form>
    </StyledDivForm>
  );
}

export default SearchBoxRow;
