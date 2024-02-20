import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

function CreateOrderForm({ onCloseModal }) {
  return (
    <Form
      //   onSubmit={handleSubmit(onSubmitForm, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Customer name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Customer email">
        <Input type="text" id="email" />
      </FormRow>

      <FormRow label="Product name">
        <Input type="text" id="Pname" />
      </FormRow>

      <FormRow label="Quantity">
        <Input type="number" id="quantity" />
      </FormRow>

      <FormRow label="Regular price">
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow label="Discount">
        <Input type="number" id="discount" />
      </FormRow>

      <FormRow label="Description for product">
        <Textarea type="number" id="description" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new order</Button>
      </FormRow>
    </Form>
  );
}

export default CreateOrderForm;
