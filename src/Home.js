import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
