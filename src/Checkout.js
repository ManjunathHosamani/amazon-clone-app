import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          scr
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AUGART21/bank_stripe_elongated_pc-2-Aug-ART.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="checkout__right">
          <Subtotal />
        </h2>
      </div>
    </div>
  );
}

export default Checkout;
