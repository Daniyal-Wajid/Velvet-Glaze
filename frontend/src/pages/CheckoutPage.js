import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function CheckoutPage() {
  const location = useLocation();
  const total = location.state?.total || 0;
  const cart = location.state?.cart || [];

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleDeliveryChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !deliveryDetails.name ||
      !deliveryDetails.address ||
      !deliveryDetails.city ||
      !deliveryDetails.phone
    ) {
      alert("Please fill in all delivery details.");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv) {
        alert("Please fill in all card details.");
        return;
      }
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main style={styles.container}>
        <h2 style={styles.title}>Order Confirmed!</h2>
        <p>Thank you for your purchase 🎉</p>
        <p>
          Total Paid: <strong>Rs. {total.toFixed(2)}</strong>
        </p>
        <p>
          Payment Method:{" "}
          <strong>
            {paymentMethod === "card" ? "Card" : "Cash on Delivery"}
          </strong>
        </p>
        <p>
          We’ll deliver to: <br />
          {deliveryDetails.name}, {deliveryDetails.address},{" "}
          {deliveryDetails.city}, {deliveryDetails.phone}
        </p>

        <div style={{ marginTop: "2rem" }}>
          <h3 style={styles.subTitle}>Order Summary</h3>
          {cart.length === 0 ? (
            <p>No items found.</p>
          ) : (
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {cart.map((item) => (
                <li
                  key={item.donut?._id || Math.random()}
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: "0.7rem 0",
                  }}
                >
                  <strong>{item.donut?.name || "Unknown Donut"}</strong> ×{" "}
                  {item.quantity} = Rs.{" "}
                  {(item.donut?.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h2 style={styles.title}>Checkout</h2>
      <p>
        Total Payable: <strong>Rs. {total.toFixed(2)}</strong>
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
        <h3 style={styles.subTitle}>Delivery Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={deliveryDetails.name}
          onChange={handleDeliveryChange}
          style={styles.input}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={deliveryDetails.address}
          onChange={handleDeliveryChange}
          style={styles.input}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={deliveryDetails.city}
          onChange={handleDeliveryChange}
          style={styles.input}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={deliveryDetails.phone}
          onChange={handleDeliveryChange}
          style={styles.input}
        />

        <h3 style={styles.subTitle}>Payment Method</h3>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Credit/Debit Card
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery (COD)
        </label>

        {paymentMethod === "card" && (
          <div style={{ marginTop: "1rem" }}>
            <input
              type="text"
              name="number"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={handleCardChange}
              style={styles.input}
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={handleCardChange}
              style={styles.input}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCardChange}
              style={styles.input}
            />
          </div>
        )}

        <button type="submit" style={styles.button}>
          Confirm Order
        </button>
      </form>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "2rem auto",
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 2px 12px #c2491420",
  },
  title: {
    color: "#c24914",
    fontFamily: "'Fredoka One', cursive",
  },
  subTitle: {
    fontSize: "1.2rem",
    marginTop: "1.5rem",
    color: "#3e2723",
  },
  input: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginTop: "0.8rem",
  },
  radioLabel: {
    display: "block",
    marginTop: "0.8rem",
    fontSize: "1rem",
  },
  button: {
    background: "#c24914",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    padding: "0.8rem 2rem",
    fontWeight: "bold",
    fontSize: "1.1rem",
    cursor: "pointer",
    marginTop: "1.5rem",
  },
};

export default CheckoutPage;
