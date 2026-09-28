type OrderFormProps = {
  customerName: string;
  onNameChange: (name: string) => void;
  onSubmit: () => void;
};

function OrderFrom({
  customerName,
  onNameChange,
  onSubmit,
}: OrderFormProps) {
  return (
    <section className="order-form">
      <h2>Customer Information</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label htmlFor="customerName">
          Your Name
        </label>

        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default OrderFrom;