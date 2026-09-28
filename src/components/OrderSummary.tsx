type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type OrderSummaryProps = {
  customerName: string;
  orderItems: OrderItem[];
  onNewOrder: () => void;
};

function OrderSummary({
  customerName,
  orderItems,
  onNewOrder,
}: OrderSummaryProps) {
  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (orderItems.length === 0) {
    return null;
  }

  return (
    <section className="order-summary">
      <div className="order-success">
        <div className="success-icon">✓</div>

        <h2>Order Successful!</h2>

        <p>
          Thank you, <strong>{customerName}</strong>!
        </p>

        <p>Your order has been placed successfully.</p>
      </div>

      <div className="order-details">
        <h3>Order Details</h3>

        {orderItems.map((item) => (
          <div className="order-item" key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <p>
                {item.quantity} × Rp{" "}
                {item.price.toLocaleString("id-ID")}
              </p>
            </div>

            <strong>
              Rp{" "}
              {(item.price * item.quantity).toLocaleString("id-ID")}
            </strong>
          </div>
        ))}

        <div className="order-total">
          <span>Total</span>
          <strong>
            Rp {total.toLocaleString("id-ID")}
          </strong>
        </div>

        <button onClick={onNewOrder}>
          Order Again
        </button>
      </div>
    </section>
  );
}

export default OrderSummary;