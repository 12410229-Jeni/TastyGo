type Food = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Food & {
  quantity: number;
};

type CartProps = {
  cart: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}: CartProps) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section id="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>

              <p>
                Rp {item.price.toLocaleString("id-ID")}
              </p>

              <button onClick={() => onDecrease(item.id)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => onIncrease(item.id)}>
                +
              </button>

              <button onClick={() => onRemove(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>
            Total: Rp {total.toLocaleString("id-ID")}
          </h3>
        </>
      )}
    </section>
  );
}

export default Cart;