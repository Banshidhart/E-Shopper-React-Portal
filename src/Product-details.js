import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <>
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
    </>
  );
}
