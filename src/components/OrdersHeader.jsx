import styled from "styled-components";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import CreateOrderForm from "./CreateOrderForm";

const StyledOrdersHeader = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

function OrdersHeader() {
  return (
    <StyledOrdersHeader>
      <h3>Orders</h3>
      <Modal>
        <Modal.Open opens="order-form">
          <Button>Create new</Button>
        </Modal.Open>
        <Modal.Window name="order-form">
          <CreateOrderForm />
        </Modal.Window>
      </Modal>
    </StyledOrdersHeader>
  );
}

export default OrdersHeader;
