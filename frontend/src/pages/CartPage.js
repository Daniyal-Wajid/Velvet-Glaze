import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(res.data.items || []);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeFromCart = async (donutId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete("http://localhost:5000/api/cart/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { donutId },
      });
      setCart(res.data.cart.items);
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.quantity * item.donut.price,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        total: calculateTotal(),
        cart: cart,
      },
    });
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading cart...</p>;

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px #c2491420",
      }}
    >
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.donut._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "1rem 0",
                borderBottom: "1px solid #eee",
                paddingBottom: "1rem",
              }}
            >
              <div>
                <h4>{item.donut.name}</h4>
                <p>Rs. {item.donut.price.toFixed(2)}</p>
                <p>Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.donut._id)}
                style={{
                  background: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: Rs. {calculateTotal().toFixed(2)}</h3>
          <button
            onClick={handleCheckout}
            style={{
              background: "#c24914",
              color: "#fff",
              border: "none",
              borderRadius: "18px",
              padding: "0.8rem 2rem",
              fontWeight: "bold",
              fontSize: "1.1rem",
              cursor: "pointer",
              marginTop: "1.5rem",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </main>
  );
}

export default CartPage;
