import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <>
      {(document.title = "Product-Details | E-Shopper")}
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

      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <h2>Category</h2>
                <div class="panel-group category-products" id="accordian">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#sportswear"
                        >
                          <span class="badge pull-right">
                            <i class="fa fa-plus"></i>
                          </span>
                          Sportswear
                        </Link>
                      </h4>
                    </div>
                    <div id="sportswear" class="panel-collapse collapse">
                      <div class="panel-body">
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
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#mens"
                        >
                          <span class="badge pull-right">
                            <i class="fa fa-plus"></i>
                          </span>
                          Mens
                        </Link>
                      </h4>
                    </div>
                    <div id="mens" class="panel-collapse collapse">
                      <div class="panel-body">
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

                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link
                          data-toggle="collapse"
                          data-parent="#accordian"
                          to="#womens"
                        >
                          <span class="badge pull-right">
                            <i class="fa fa-plus"></i>
                          </span>
                          Womens
                        </Link>
                      </h4>
                    </div>
                    <div id="womens" class="panel-collapse collapse">
                      <div class="panel-body">
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
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Kids</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Fashion</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Households</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Interiors</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Clothing</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Bags</Link>
                      </h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link to="#">Shoes</Link>
                      </h4>
                    </div>
                  </div>
                </div>

                <div class="brands_products">
                  <h2>Brands</h2>
                  <div class="brands-name">
                    <ul class="nav nav-pills nav-stacked">
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(50)</span>Acne
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(56)</span>Grüne Erde
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(27)</span>Albiro
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(32)</span>Ronhill
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(5)</span>Oddmolly
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(9)</span>Boudestijn
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          {" "}
                          <span class="pull-right">(4)</span>Rösch creative
                          culture
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="price-range">
                  <h2>Price Range</h2>
                  <div class="well">
                    <input
                      type="text"
                      class="span2"
                      value=""
                      data-slider-min="0"
                      data-slider-max="600"
                      data-slider-step="5"
                      data-slider-value="[250,450]"
                      id="sl2"
                    />
                    <br />
                    <b>$ 0</b> <b class="pull-right">$ 600</b>
                  </div>
                </div>

                <div class="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>
              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="product-details">
                <div class="col-sm-5">
                  <div class="view-product">
                    <img src="images/product-details/1.jpg" alt="" />
                    <h3>ZOOM</h3>
                  </div>
                  <div
                    id="similar-product"
                    class="carousel slide"
                    data-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="item active">
                        <Link to="">
                          <img
                            src="images/product-details/similar1.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar2.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="item">
                        <Link to="">
                          <img
                            src="images/product-details/similar1.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar2.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="item">
                        <Link to="">
                          <img
                            src="images/product-details/similar1.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar2.jpg"
                            alt=""
                          />
                        </Link>
                        <Link to="">
                          <img
                            src="images/product-details/similar3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>

                    <Link
                      class="left item-control"
                      to="#similar-product"
                      data-slide="prev"
                    >
                      <i class="fa fa-angle-left"></i>
                    </Link>
                    <Link
                      class="right item-control"
                      to="#similar-product"
                      data-slide="next"
                    >
                      <i class="fa fa-angle-right"></i>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-7">
                  <div class="product-information">
                    <img
                      src="images/product-details/new.jpg"
                      class="newarrival"
                      alt=""
                    />
                    <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                    <p>Web ID: 1089772</p>
                    <img src="images/product-details/rating.png" alt="" />
                    <span>
                      <span>US $59</span>
                      <label>Quantity:</label>
                      <input type="text" value="3" />
                      <button type="button" class="btn btn-fefault cart">
                        <i class="fa fa-shopping-cart"></i>
                        Add to cart
                      </button>
                    </span>
                    <p>
                      <b>Availability:</b> In Stock
                    </p>
                    <p>
                      <b>Condition:</b> New
                    </p>
                    <p>
                      <b>Brand:</b> E-SHOPPER
                    </p>
                    <Link to="">
                      <img
                        src="images/product-details/share.png"
                        class="share img-responsive"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div class="category-tab shop-details-tab">
                <div class="col-sm-12">
                  <ul class="nav nav-tabs">
                    <li>
                      <Link to="#details" data-toggle="tab">
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link to="#companyprofile" data-toggle="tab">
                        Company Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="#tag" data-toggle="tab">
                        Tag
                      </Link>
                    </li>
                    <li class="active">
                      <Link to="#reviews" data-toggle="tab">
                        Reviews (5)
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="tab-content">
                  <div class="tab-pane fade" id="details">
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="companyprofile">
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="tag">
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery1.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery2.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery3.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="product-image-wrapper">
                        <div class="single-products">
                          <div class="productinfo text-center">
                            <img src="images/home/gallery4.jpg" alt="" />
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <button
                              type="button"
                              class="btn btn-default add-to-cart"
                            >
                              <i class="fa fa-shopping-cart"></i>Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade active in" id="reviews">
                    <div class="col-sm-12">
                      <ul>
                        <li>
                          <Link to="">
                            <i class="fa fa-user"></i>EUGEN
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i class="fa fa-clock-o"></i>12:41 PM
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i class="fa fa-calendar-o"></i>31 DEC 2014
                          </Link>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <p>
                        <b>Write Your Review</b>
                      </p>

                      <form action="#">
                        <span>
                          <input type="text" placeholder="Your Name" />
                          <input type="email" placeholder="Email Address" />
                        </span>
                        <textarea name=""></textarea>
                        <b>Rating: </b>{" "}
                        <img src="images/product-details/rating.png" alt="" />
                        <button
                          type="button"
                          class="btn btn-default pull-right"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="recommended_items">
                <h2 class="title text-center">recommended items</h2>

                <div
                  id="recommended-item-carousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="item active">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend1.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend2.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="product-image-wrapper">
                          <div class="single-products">
                            <div class="productinfo text-center">
                              <img src="images/home/recommend3.jpg" alt="" />
                              <h2>$56</h2>
                              <p>Easy Polo Black Edition</p>
                              <button
                                type="button"
                                class="btn btn-default add-to-cart"
                              >
                                <i class="fa fa-shopping-cart"></i>Add to cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    class="left recommended-item-control"
                    to="#recommended-item-carousel"
                    data-slide="prev"
                  >
                    <i class="fa fa-angle-left"></i>
                  </Link>
                  <Link
                    class="right recommended-item-control"
                    to="#recommended-item-carousel"
                    data-slide="next"
                  >
                    <i class="fa fa-angle-right"></i>
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
