import React from "react";
import Header from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import EmptyCart from "./Component/EmptyCart";
import ItemsCart from "./Component/ItemsCart";

const Cart = () => {
  return (
    <>
      <Header />
      {/* <EmptyCart /> */}
      <ItemsCart />
      <Footer />
    </>
  );
};
export default Cart;
