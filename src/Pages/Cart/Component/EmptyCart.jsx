import React from "react";
import "./cart.css"
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="container-fluid p-0 empty_order">
        <div className="empty-cart">
          <div className="icon" data-aos="fade-up" data-aos-duration="1000">
            <img src="/images/no-order.svg" alt="" />
          </div>
          <h2 data-aos="fade-up" data-aos-duration="1000">Your cart is empty!</h2>
          <p data-aos="fade-up" data-aos-duration="1000">Looks like you haven't added any assignment yet.</p>
          <button className="btn" data-aos="fade-up" data-aos-duration="1000"><Link to="/AddOrder"  >ADD NEW ORDER</Link></button>
        </div>
      </div>
    </>
  );
};
export default EmptyCart;
