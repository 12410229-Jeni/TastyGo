import { useState } from "react";
import Navbar from "./components/Navbar";
import Foodmenu from "./components/Foodmenu";
import Cart from "./components/Cart";
import OrderFrom from "./components/OrderFrom";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

type Food = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Food & {
  quantity: number;
};

const foods: Food[] = [
  {
    id: 1,
    name: "Nasi Goreng",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
  },
  {
    id: 2,
    name: "Ayam Panggang",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500",
  },
  {
    id: 3,
    name: "Mie Goreng",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500",
  },
  {
    id: 4,
    name: "Sate Ayam",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=500",
  },
  {
    id: 5,
    name: "Burger Daging Sapi",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 6,
    name: "French Fries",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
  },
  {
    id: 7,
    name: "Chicken Wings",
    price: 23000,
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500",
  },
  {
    id: 8,
    name: "Pizza",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
  },
  {
    id: 9,
    name: "Pasta Penne",
    price: 27000,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
  },
  {
    id: 10,
    name: "Ayam Goreng",
    price: 21000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
  },
  {
    id: 11,
    name: "Steak Daging Sapi",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500",
  },
  {
    id: 12,
    name: "Sandwich Panggang",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
  },
  {
    id: 13,
    name: "Pancake",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
  },
  {
    id: 14,
    name: "Kue Coklat",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 15,
    name: "Es Krim",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500",
  },
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");

  // Menyimpan pesanan terakhir
  const [lastOrder, setLastOrder] = useState<CartItem[]>([]);
  const [lastCustomerName, setLastCustomerName] = useState("");

  // Tambah makanan ke cart
  const addToCart = (food: Food) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...food,
          quantity: 1,
        },
      ];
    });
  };

  // Tambah quantity
  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Kurangi quantity
  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Hapus makanan
  const removeFromCart = (id: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Buat pesanan
  const placeOrder = () => {
    if (customerName.trim() === "") {
      alert("Silakan masukkan nama Anda.");
      return;
    }

    if (cart.length === 0) {
      alert("Keranjang masih kosong.");
      return;
    }

    // Simpan pesanan terakhir
    setLastOrder(cart);
    setLastCustomerName(customerName);

    // Kosongkan cart
    setCart([]);
    setCustomerName("");

    alert("Pesanan berhasil dibuat!");
  };

  // Buat pesanan baru
  const startNewOrder = () => {
    setLastOrder([]);
    setLastCustomerName("");
  };

  return (
    <>
      <Navbar />

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <h2>Selamat Datang di TastyGo 🍜</h2>
          <p>Taste Something Amazing Today</p>
        </section>

        {/* MENU */}
        <Foodmenu
          foods={foods}
          onAdd={addToCart}
        />

        {/* CART */}
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
        />

        {/* ORDER FORM */}
        <OrderFrom
          customerName={customerName}
          onNameChange={setCustomerName}
          onSubmit={placeOrder}
        />

        {/* ORDER SUMMARY */}
        <OrderSummary
          customerName={lastCustomerName}
          orderItems={lastOrder}
          onNewOrder={startNewOrder}
        />
      </main>
    </>
  );
}

export default App;