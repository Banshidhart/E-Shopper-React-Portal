import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {(document.title = "Home | E-Shopper")}
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="contactinfo">
                  <ul className="nav nav-pills">
                    <li>
                      <Link to="">
                        <i className="fa fa-phone"></i> +2 95 01 88 821
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-envelope"></i> info@domain.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="social-icons pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="logo pull-left">
                  <Link to="/">
                    <img src="images/home/logo.png" alt="" />
                  </Link>
                </div>
                <div className="btn-group pull-right">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      USA
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">Canada</Link>
                      </li>
                      <li>
                        <Link to="">UK</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle usa"
                      data-toggle="dropdown"
                    >
                      DOLLAR
                      <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">Canadian Dollar</Link>
                      </li>
                      <li>
                        <Link to="">Pound</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="shop-menu pull-right">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="">
                        <i className="fa fa-user"></i> Account
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa fa-star"></i> Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link to="/Checkout">
                        <i className="fa fa-crosshairs"></i> Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cart">
                        <i className="fa fa-shopping-cart"></i> Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <i className="fa fa-lock"></i> Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="mainmenu pull-left">
                  <ul className="nav navbar-nav collapse navbar-collapse">
                    <li>
                      <Link to="/Home">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="">
                        Shop<i className="fa fa-angle-down"></i>
                      </Link>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="/Shop">Products</Link>
                        </li>
                        <li>
                          <Link to="/ProductDetails">Product Details</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="/Cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="/Login">Login</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="">
                        Blog<i className="fa fa-angle-down"></i>
                      </Link>
                      <ul role="menu" className="sub-menu">
                        <li>
                          <Link to="/Blog">Blog List</Link>
                        </li>
                        <li>
                          <Link to="/BlogSingle">Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Error">404</Link>
                    </li>
                    <li>
                      <Link to="/ContactUs">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="search_box pull-right">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div
                id="slider-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#slider-carousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#slider-carousel" data-slide-to="1"></li>
                  <li data-target="#slider-carousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <div className="col-sm-6">
                      <h1>
                        <span>E</span>-SHOPPER
                      </h1>
                      <h2>Free E-Commerce Template</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.{" "}
                      </p>
                      <button type="button" className="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="images/home/girl1.jpg"
                        className="girl img-responsive"
                        alt=""
                      />
                      <img
                        src="images/home/pricing.png"
                        className="pricing"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-sm-6">
                      <h1>
                        <span>E</span>-SHOPPER
                      </h1>
                      <h2>100% Responsive Design</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.{" "}
                      </p>
                      <button type="button" className="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="images/home/girl2.jpg"
                        className="girl img-responsive"
                        alt=""
                      />
                      <img
                        src="images/home/pricing.png"
                        className="pricing"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="item">
                    <div className="col-sm-6">
                      <h1>
                        <span>E</span>-SHOPPER
                      </h1>
                      <h2>Free Ecommerce Template</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.{" "}
                      </p>
                      <button type="button" className="btn btn-default get">
                        Get it now
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="images/home/girl3.jpg"
                        className="girl img-responsive"
                        alt=""
                      />
                      <img
                        src="images/home/pricing.png"
                        className="pricing"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <Link
                  to="#slider-carousel"
                  className="left control-carousel hidden-xs"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left"></i>
                </Link>
                <Link
                  to="#slider-carousel"
                  className="right control-carousel hidden-xs"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="left-sidebar">
                <h2>Category</h2>
                <div className="panel-group category-products" id="accordian">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#sportswear"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Sportswear
                        </Link>
                      </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <Link to="">Nike </Link>
                          </li>
                          <li>
                            <Link to="">Under Armour </Link>
                          </li>
                          <li>
                            <Link to="">Adidas </Link>
                          </li>
                          <li>
                            <Link to="">Puma</Link>
                          </li>
                          <li>
                            <Link to="">ASICS </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#mens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Mens
                        </Link>
                      </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <Link to="">Fendi</Link>
                          </li>
                          <li>
                            <Link to="">Guess</Link>
                          </li>
                          <li>
                            <Link to="">Valentino</Link>
                          </li>
                          <li>
                            <Link to="">Dior</Link>
                          </li>
                          <li>
                            <Link to="">Versace</Link>
                          </li>
                          <li>
                            <Link to="">Armani</Link>
                          </li>
                          <li>
                            <Link to="">Prada</Link>
                          </li>
                          <li>
                            <Link to="">Dolce and Gabbana</Link>
                          </li>
                          <li>
                            <Link to="">Chanel</Link>
                          </li>
                          <li>
                            <Link to="">Gucci</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#womens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus"></i>
                          </span>
                          Womens
                        </Link>
                      </h4>
                    </div>
                    <div id="womens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <Link to="">Fendi</Link>
                          </li>
                          <li>
                            <Link to="">Guess</Link>
                          </li>
                          <li>
                            <Link to="">Valentino</Link>
                          </li>
                          <li>
                            <Link to="">Dior</Link>
                          </li>
                          <li>
                            <Link to="">Versace</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Kids</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Fashion</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Households</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Interiors</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Clothing</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Bags</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <Link to="">Shoes</Link>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="brands_products">
                  <h2>Brands</h2>
                  <div className="brands-name">
                    <ul className="nav nav-pills nav-stacked">
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(50)</span>Acne
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(56)</span>Grüne Erde
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(27)</span>Albiro
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(32)</span>Ronhill
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(5)</span>Oddmolly
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(9)</span>Boudestijn
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span className="pull-right">(4)</span>Rösch creative
                          culture
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="price-range">
                  <h2>Price Range</h2>
                  <div className="well text-center">
                    <input
                      type="text"
                      className="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b className="pull-left">$ 0</b>{" "}
                    <b className="pull-right">$ 600</b>
                  </div>
                </div>

                <div className="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                      <img src="images/home/new.png" className="new" alt="" />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product5.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                      <img src="images/home/sale.png" className="new" alt="" />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart"></i>Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i className="fa fa-plus-square"></i>Add to compare
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="category-tab">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <Link to="#tshirt" data-toggle="tab">
                        T-Shirt
                      </Link>
                    </li>
                    <li>
                      <Link to="#blazers" data-toggle="tab">
                        Blazers
                      </Link>
                    </li>
                    <li>
                      <Link to="#sunglass" data-toggle="tab">
                        Sunglass
                      </Link>
                    </li>
                    <li>
                      <Link to="#kids" data-toggle="tab">
                        Kids
                      </Link>
                    </li>
                    <li>
                      <Link to="#poloshirt" data-toggle="tab">
                        Polo shirt
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade active in" id="tshirt">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="blazers">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="sunglass">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="kids">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="poloshirt">
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <Link
                              to="#"
                              className="btn btn-default add-to-cart"
                            >
                              <i className="fa fa-shopping-cart"></i>Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="recommended_items">
                <h2 className="title text-center">recommended items</h2>

                <div
                  id="recommended-item-carousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="product-image-wrapper">
                          <div className="single-products">
                            <div className="productinfo text-center">
                              <img src="images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <Link
                                to="#"
                                className="btn btn-default add-to-cart"
                              >
                                <i className="fa fa-shopping-cart"></i>Add to
                                cart
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="left recommended-item-control"
                    to="#recommended-item-carousel"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </Link>
                  <Link
                    className="right recommended-item-control"
                    to="#recommended-item-carousel"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="companyinfo">
                  <h2>
                    <span>e</span>-shopper
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link to="">
                      <div className="iframe-img">
                        <img src="images/home/iframe1.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link to="">
                      <div className="iframe-img">
                        <img src="images/home/iframe2.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link to="">
                      <div className="iframe-img">
                        <img src="images/home/iframe3.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="video-gallery text-center">
                    <Link to="">
                      <div className="iframe-img">
                        <img src="images/home/iframe4.png" alt="" />
                      </div>
                      <div className="overlay-icon">
                        <i className="fa fa-play-circle-o"></i>
                      </div>
                    </Link>
                    <p>Circle of Hands</p>
                    <h2>24 DEC 2014</h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="address">
                  <img src="images/home/map.png" alt="" />
                  <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Service</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link to="">Online Help</Link>
                    </li>
                    <li>
                      <Link to="">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="">Order Status</Link>
                    </li>
                    <li>
                      <Link to="">Change Location</Link>
                    </li>
                    <li>
                      <Link to="">FAQ’s</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Quock Shop</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link to="">T-Shirt</Link>
                    </li>
                    <li>
                      <Link to="">Mens</Link>
                    </li>
                    <li>
                      <Link to="">Womens</Link>
                    </li>
                    <li>
                      <Link to="">Gift Cards</Link>
                    </li>
                    <li>
                      <Link to="">Shoes</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>Policies</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link to="">Terms of Use</Link>
                    </li>
                    <li>
                      <Link to="">Privecy Policy</Link>
                    </li>
                    <li>
                      <Link to="">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="">Billing System</Link>
                    </li>
                    <li>
                      <Link to="">Ticket System</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <Link to="">Company Information</Link>
                    </li>
                    <li>
                      <Link to="">Careers</Link>
                    </li>
                    <li>
                      <Link to="">Store Location</Link>
                    </li>
                    <li>
                      <Link to="">Affillate Program</Link>
                    </li>
                    <li>
                      <Link to="">Copyright</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-sm-offset-1">
                <div className="single-widget">
                  <h2>About Shopper</h2>
                  <form action="#" className="searchform">
                    <input type="text" placeholder="Your email address" />
                    <button type="submit" className="btn btn-default">
                      <i className="fa fa-arrow-circle-o-right"></i>
                    </button>
                    <p>
                      Get the most recent updates from <br />
                      our site and be updated your self...
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <p className="pull-left">
                Copyright © 2013 E-SHOPPER Inc. All rights reserved.
              </p>
              <p className="pull-right">
                Designed by{" "}
                <span>
                  <Link target="_blank" to="http://www.themeum.com">
                    Themeum
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
