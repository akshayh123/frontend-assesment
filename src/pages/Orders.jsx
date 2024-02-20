import styled from "styled-components";
import OrdersHeader from "../components/OrdersHeader";
import OrdersTable from "./OrdersTable";
import SearchBox from "./SearchBox";

const StyledOrders = styled.div`
  padding: 1.5rem;
`;

function Orders() {
  return (
    <>
      <StyledOrders>
        <OrdersHeader />
        <SearchBox />
        <OrdersTable />
      </StyledOrders>
    </>
  );
}

export default Orders;
