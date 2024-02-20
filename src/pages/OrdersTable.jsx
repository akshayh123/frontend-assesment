import styled from "styled-components";
import { useOrders } from "../custom/useOrders";
import OrderTableRow from "../components/OrderTableRow";
import OrdersTableHeader from "../components/OrdersTableHeader";
import Table from "../ui/Table";
import { CSpinner } from "@coreui/react";
import Menus from "../ui/Menus";

const StyledContainer = styled.div`
  width: 100%;
  padding: 1.2rem;
  box-shadow: var(--shadow-lg);
  border-radius: 1.5rem;
`;

function OrdersTable() {
  const { isLoading, orderData } = useOrders();
  console.log(orderData);

  if (isLoading) <CSpinner color="primary" />;

  return (
    // <div>
    //   <table>
    //     <tr>
    //       <th>ID</th>
    //       <th>SHPIIFY</th>
    //       <th>DATE</th>
    //       <th>STATUS</th>
    //       <th>CUSTOMER</th>
    //       <th>EMAIL</th>
    //       <th>COUNTRY</th>
    //       <th>SHIPPING</th>
    //       <th>SOURCE</th>
    //       <th>ORDER TYPE</th>
    //     </tr>
    //     <tr>
    //       <td>{<OrderTableRow />}</td>
    //     </tr>
    //   </table>
    // </div>
    <Menus>
      <StyledContainer>
        <OrdersTableHeader />

        <Table
          role="table"
          columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr"
        >
          <Table.Header role="row">
            <div>ID</div>
            <div>SHPIIFY</div>
            <div>DATE</div>
            <div>STATUS</div>
            <div>CUSTOMER</div>
            <div>EMAIL</div>
            <div>COUNTRY</div>
            <div>SHIPPING</div>
            <div>SOURCE</div>
            <div>ORDER TYPE</div>
          </Table.Header>

          <Table.Body
            // data={cabins}
            // data={filteredCabins}
            data={orderData}
            render={(order) => <OrderTableRow order={order} key={order.ID} />}
          />
        </Table>
      </StyledContainer>
    </Menus>
  );
}

export default OrdersTable;
