import styled from "styled-components";
import Form from "../ui/Form";
import Button from "../ui/Button";

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledSpan = styled.span`
  color: #100600;
  font-weight: 500;
`;

const StyledSelect = styled.select`
  width: 50%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  margin-left: 1rem;
`;

const StyledDivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

function OrdersTableHeader() {
  return (
    <StyledDivContainer>
      <StyledDiv>
        <label>
          <StyledSpan>Product Summary</StyledSpan>
        </label>
      </StyledDiv>

      <StyledDiv>
        <label>
          <StyledSpan>Show</StyledSpan>
        </label>

        <StyledSelect>
          <option>ALL COLUMN</option>
          <option>1</option>
          <option>2</option>
        </StyledSelect>
      </StyledDiv>
      <StyledDiv>
        <Button>Dispatch Selected</Button>
      </StyledDiv>
    </StyledDivContainer>
  );
}

export default OrdersTableHeader;
