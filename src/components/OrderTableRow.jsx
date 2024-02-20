import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import Menus from "../ui/Menus";
import Modal from "../ui/Modal";
import Table from "../ui/Table";

function OrderTableRow({ order }) {
  const {
    ID,
    SHPIIFY,
    DATE,
    STATUS,
    CUSTOMER,
    EMAIL,
    COUNTRY,
    SHIPPING,
    SOURCE,
    ORDER_TYPE,
  } = order;

  return (
    <Table.Row>
      <div>{ID}</div>
      <div>{SHPIIFY}</div>
      <div>{DATE}</div>
      <div>{STATUS}</div>
      <div>{CUSTOMER}</div>
      <div>{EMAIL}</div>
      <div>{COUNTRY}</div>
      <div>{SHIPPING}</div>
      <div>{SOURCE}</div>
      <div>{ORDER_TYPE}</div>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={ID} />
            <Menus.List id={ID}>
              <Menus.Button icon={<HiSquare2Stack />}>Duplicate</Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit"></Modal.Window>

            <Modal.Window name="delete"></Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default OrderTableRow;
