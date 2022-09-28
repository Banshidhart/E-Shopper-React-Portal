import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Error from "./404";
import Blog from "./Blog";
import BlogSingle from "./BlogSingle";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import ContactUs from "./Contact-us";
import Home from "./Home";
import Login from "./Login";
import ProductDetails from "./Product-details";
import Shop from "./Shop";

export default function RoutePages() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/BlogSingle" element={<BlogSingle />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}
    </>
  );
}
