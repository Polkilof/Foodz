<template>
	<div>
		<header class="l-section c-page-header c-page-header--category c-page-header--parallax">
			<nav class="с-breadcrumb">
				<ol class="с-breadcrumb__list">
					<li class="с-breadcrumb__item"><a href="/">Home</a></li>
					<li class="с-breadcrumb__item">Pizza</li>
				</ol>
			</nav>
			<h1 class="c-page-header__title">Pizza</h1>
		</header>

		<div class="l-section l-section--container l-section--top-margin l-section--with-sidebar">
			<div class="l-section__sidebar">
				<div class="c-sidebar c-shop-sidebar js-shop-sidebar js-sticky-sidebar" style="">
					<div class="c-shop-sidebar__shadow"></div>
					<div class="c-shop-sidebar__wrap">
						<div class="c-shop-sidebar__buttons">
							<button type="button" class="h-cb h-cb--svg c-shop-sidebar__close" id="ideapark-shop-sidebar-close">
								<svg class="c-shop-sidebar__close-svg"><use xlink:href="#svg-close"></use></svg>
							</button>
						</div>
						<div class="c-shop-sidebar__content c-shop-sidebar__content--desktop">
							<aside id="woocommerce_products-2" class="widget woocommerce widget_products">
								<h2 class="widget-title">We Recomend</h2>
								<ul class="c-product-list-widget">
									<li class="c-product-list-widget__item">
										<div class="c-product-list-widget__wrap">
											<div class="c-product-list-widget__thumb-col">
												<a href="#">
													<img
														src="../../assets/demo1-1030086168-1-55x55.jpg"
														class="c-product-list-widget__thumb lazyloaded"
														alt=""
														width="55"
														height="55"
													/>
												</a>
											</div>
											<div class="c-product-list-widget__title-col">
												<div class="c-product-list-widget__title">
													<a class="c-product-list-widget__title-link" href="https://parkofideas.com/foodz/demo1/product/shrimp-tempura-roll/">Shrimp Tempura Roll</a>
												</div>

												<div class="c-product-list-widget__price">
													<span class="woocommerce-Price-amount amount">
														<bdi><span class="woocommerce-Price-currencySymbol">$</span>3.99</bdi>
													</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</aside>
							<aside id="woocommerce_price_filter-2" class="widget woocommerce widget_price_filter">
								<h2 class="widget-title">Filter by price</h2>
								<form method="get" action="https://parkofideas.com/foodz/demo1/product-category/pizza/">
									<div class="price_slider_wrapper">
										<div class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" style="">
											<div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
											<span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span>
											<span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 100%;"></span>
										</div>
										<div class="price_slider_amount" data-step="10">
											<input type="text" id="min_price" name="min_price" value="10" data-min="10" placeholder="Min price" style="display: none;" />
											<input type="text" id="max_price" name="max_price" value="20" data-max="20" placeholder="Max price" style="display: none;" />
											<button type="submit" class="button">Filter</button>
											<div class="price_label" style="">Price: <span class="from">$10</span> — <span class="to">$20</span></div>
											<input type="hidden" name="orderby" value="menu_order" />
											<div class="clear"></div>
										</div>
									</div>
								</form>
							</aside>
						</div>
						<div class="c-shop-sidebar__content c-shop-sidebar__content--mobile"></div>
					</div>
				</div>
			</div>

			<div class="l-section__content l-section__content--with-sidebar">
				<div class="js-sticky-sidebar-nearby">
					<div class="c-ordering">
						<div class="c-ordering__filter-wrap c-ordering__filter-wrap--with-sidebar">
							<ul class="c-ordering__filter-list c-ordering__filter-list--with-sidebar">
								<li class="c-ordering__filter-item c-ordering__filter-list--chosen"><span class="c-ordering__filter-button c-ordering__filter-button--chosen">All</span></li>
								<li class="c-ordering__filter-item">
									<a rel="nofollow" href="#spicy"><span class="c-ordering__filter-button">Spicy</span></a>
								</li>
								<li class="c-ordering__filter-item">
									<a rel="nofollow" href="#vegetarian"><span class="c-ordering__filter-button">Vegetarian</span></a>
								</li>
								<li class="c-ordering__filter-item">
									<a rel="nofollow" href="#mushrooms"><span class="c-ordering__filter-button">Mushrooms</span></a>
								</li>
								<li class="c-ordering__filter-item">
									<a rel="nofollow" href="#meat"><span class="c-ordering__filter-button">Meat</span></a>
								</li>
								<li class="c-ordering__filter-item">
									<a rel="nofollow" href="#seafood"><span class="c-ordering__filter-button">Seafood</span></a>
								</li>
							</ul>
						</div>

						<div class="c-ordering__select c-ordering__select--filter">
							<form class="woocommerce-ordering" method="get">
								<select name="orderby" class="orderby hasCustomSelect" aria-label="Shop order" style="height: 14px; font-size: 14px;">
									<option value="menu_order" selected="selected">Default sorting</option>
									<option value="popularity">Sort by popularity</option>
									<option value="rating">Sort by average rating</option>
									<option value="date">Sort by latest</option>
									<option value="price">Sort by price: low to high</option>
									<option value="price-desc">Sort by price: high to low</option>
								</select>
							</form>
						</div>
					</div>
					<div class="c-product-grid">
						<ul class="c-product-grid__list c-product-grid__list--layout-product-3 c-product-grid__list--carousel columns-4 h-clearfix">
							<li class="c-product-grid__item c-product-grid__item--layout-product-3 product type-product post-138 status-publish first instock product_cat-pizza has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
								<div class="c-product-grid__item-wrap c-product-grid__item-wrap--layout-product-3">
									<div class="c-product-grid__thumb-wrap c-product-grid__thumb-wrap--layout-product-3">
										<a href="#">
											<div class="c-badge__list c-product-grid__badges c-product-grid__badges--layout-product-3"></div>
											<img
												src="../../assets/demo1-0901996381-1-238x238.jpg"
												alt="Pizza Bianca"
												class="c-product-grid__thumb c-product-grid__thumb--layout-product-3 front"
											/>
										</a>
										<div class="c-product-grid__thumb-button-list c-product-grid__thumb-button-list--layout-product-3">
											<button class="h-cb c-product-grid__thumb-button js-grid-zoom" type="button" data-product-id="138">
												<svg class="c-product-grid__thumb-zoom"><use xlink:href="#svg-search"></use></svg>
											</button>
											<button class="c-wishlist__btn c-wishlist__item-138-btn h-cb c-product-grid__thumb-button" data-product-id="138" data-title="Wishlist">
												<svg class="c-product-grid__thumb-wishlist"><use xlink:href="#svg-wishlist"></use></svg>
											</button>
										</div>
									</div>
									<div class="c-product-grid__details c-product-grid__details--layout-product-3">
										<div class="c-badge__list c-product-grid__badges-alt"></div>
										<div class="c-product-grid__title">
											<a class="c-product-grid__title-link" href="#">Pizza Bianca</a>
										</div>
										<div class="c-markers c-product-grid__markers">
											<span class="c-markers__wrap c-product-grid__marker js-marker">
												<span class="c-markers__title">Vegetarian</span>
												<img class="c-markers__icon" src="../../assets/demo1-1944807851-1.svg" alt="Vegetarian" />
											</span>
											<span class="c-markers__wrap c-product-grid__marker js-marker">
												<span class="c-markers__title">Spicy</span>
												<img class="c-markers__icon" src="../../assets/demo1-1927616421-1.svg" alt="Spicy" />
											</span>
											<span class="c-markers__wrap c-product-grid__marker">
												<button class="h-cb h-cb--svg c-product-grid__marker-info-icon js-extra-info" type="button">
													<svg><use xlink:href="#svg-info"></use></svg>
												</button>
												<div class="c-product-grid__marker-popup c-product-grid__marker-popup--layout-product-3 js-extra-info-popup">
													<div class="c-product-grid__marker-popup-title">Nutritional facts</div>
													<div class="c-product-grid__marker-popup-text">
														Serving Size 1 slice (63 g)<br />
														Per Serving:<br />
														Calories 168<br />
														Total Fat - 4.7g<br />
														Carbohydrates - 20.4g<br />
														Protein - 7.6g
													</div>
												</div>
											</span>
										</div>
										<div class="c-product-grid__short-desc">
											<p>Garlic Flatbread with Mozzarella · Parmesan · Garlic · Rosemary</p>
										</div>
										<form class="c-variation__form variations_form cart" action="#">
											<div class="c-variation__wrap variations">
												<div class="c-variation__label">
													<label for="pa_crust">Crust</label>
												</div>
												<div class="c-variation__select">
													<select class="hasCustomSelect" name="attribute_pa_crust" style="height: 32px; font-size: 13px;">
														<option value="" selected="selected">Choose an option</option>
														<option value="thick" class="attached enabled">thick</option>
														<option value="thin" class="attached enabled">thin</option>
													</select>
													
												</div>
											</div>
											<div class="c-variation__wrap variations">
												<div class="c-variation__label">
													<label for="pa_size">Size</label>
												</div>
												<div class="c-variation__select c-variation__select--last">
													<select class="hasCustomSelect" name="attribute_pa_size" style="height: 32px; font-size: 13px;">
														<option value="" selected="selected">Choose an option</option>
														<option value="25cm" class="attached enabled">25cm</option>
														<option value="30cm" class="attached enabled">30cm</option>
														<option value="35cm" class="attached enabled">35cm</option>
													</select>
												</div>
												<button class="reset_variations h-cb c-variation__reset" type="button">
													<svg class="c-variation__reset-svg"><use xlink:href="#svg-clear"></use></svg>Clear
												</button>
											</div>
											<div class="c-variation__single single_variation_wrap">
												<div class="c-variation__single-info single_variation" style="display: none !important;">
													<div class="woocommerce-variation-description"></div>
													<div class="woocommerce-variation-price">
														<span class="price">
															<span class="woocommerce-Price-amount amount">
																<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
															</span>
														</span>
													</div>
													<div class="woocommerce-variation-availability"></div>
												</div>
												<div class="c-variation__single-price" style="display: block !important;">
													<span class="price">
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
														–
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>15.99</bdi>
														</span>
													</span>
												</div>
												<div class="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
													<a
														href="#"
														class="c-add-to-cart c-product-grid__add-to-cart single_add_to_cart_button js-add-to-cart-variation disabled"
														rel="nofollow"
													>
														<svg class="c-add-to-cart__svg"><use xlink:href="#svg-cart"></use></svg>Add to cart
													</a>
													<input type="hidden" name="quantity" class="qty" value="1" />
													<input type="hidden" name="add-to-cart" value="138" />
													<input type="hidden" name="product_id" value="138" />
													<input type="hidden" name="variation_id" class="variation_id" value="139" />
													<span class="added_to_cart h-hidden"></span>
												</div>
											</div>
										</form>
										<div class="c-product-grid__quantity-wrap">
											<div class="c-quantity js-product-grid-quantity"></div>
										</div>
									</div>
								</div>
							</li>

							<li class="c-product-grid__item c-product-grid__item--layout-product-3 product type-product post-145 status-publish instock product_cat-pizza has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
								<div class="c-product-grid__item-wrap c-product-grid__item-wrap--layout-product-3">
									<div class="c-product-grid__thumb-wrap c-product-grid__thumb-wrap--layout-product-3">
										<router-link to="/product" tag="a">
											<div class="c-badge__list c-product-grid__badges c-product-grid__badges--layout-product-3"></div>
											<img
												src="../../assets/demo1-0901188784-1-238x238.jpg" 
												alt="Pizza Carne" 
												class="c-product-grid__thumb c-product-grid__thumb--layout-product-3 front"
											/>
										</router-link>
										<div class="c-product-grid__thumb-button-list c-product-grid__thumb-button-list--layout-product-3">
											<button class="h-cb c-product-grid__thumb-button js-grid-zoom" type="button" data-product-id="145">
												<svg class="c-product-grid__thumb-zoom"><use xlink:href="#svg-search"></use></svg>
											</button>
											<button class="c-wishlist__btn c-wishlist__item-145-btn h-cb c-product-grid__thumb-button" data-product-id="145" data-title="Wishlist">
												<svg class="c-product-grid__thumb-wishlist"><use xlink:href="#svg-wishlist"></use></svg>
											</button>
											<button class="c-wishlist__btn c-wishlist__item-145-btn h-cb c-product-grid__thumb-button c-wishlist__btn--added" data-product-id="145" data-title="Wishlist">
												<svg class="c-product-grid__thumb-wishlist"><use xlink:href="#svg-wishlist"></use></svg>
											</button>
										</div>
									</div>
									<div class="c-product-grid__details c-product-grid__details--layout-product-3">
										<div class="c-badge__list c-product-grid__badges-alt"></div>
										<div class="c-product-grid__title">
											<router-link to="/product" tag="a" class="c-product-grid__title-link" >Pizza Carne</router-link>
										</div>

										<div class="c-markers c-product-grid__markers">
											<span class="c-markers__wrap c-product-grid__marker">
												<button class="h-cb h-cb--svg c-product-grid__marker-info-icon js-extra-info" type="button">
													<svg><use xlink:href="#svg-info"></use></svg>
												</button>
												<div class="c-product-grid__marker-popup c-product-grid__marker-popup--layout-product-3 js-extra-info-popup">
													<div class="c-product-grid__marker-popup-title">Nutritional facts</div>
													<div class="c-product-grid__marker-popup-text">
														Serving Size 1 slice (63 g)<br />
														Per Serving:<br />
														Calories 168<br />
														Total Fat - 4.7g<br />
														Carbohydrates - 20.4g<br />
														Protein - 7.6g
													</div>
												</div>
											</span>
										</div>
										<div class="c-product-grid__short-desc">
											<p>Tomato Sauce · Mozzarella · Chicken · Beef · Pepperoni · Onions · Rosemary</p>
										</div>
										<form class="c-variation__form variations_form cart" action="#">
											<div class="c-variation__wrap variations">
												<div class="c-variation__label">
													<label for="pa_crust">Crust</label>
												</div>
												<div class="c-variation__select">
													<select
														id="pa_crust_138"
														class="hasCustomSelect"
														name="attribute_pa_crust"
														style="height: 32px; font-size: 13px;"
													>
														<option value="">Choose an option</option>
														<option value="thick" class="attached enabled" selected="selected">thick</option>
														<option value="thin" class="attached enabled">thin</option>
													</select>
												</div>
											</div>
											<div class="c-variation__wrap variations">
												<div class="c-variation__label">
													<label for="pa_size">Size</label>
												</div>
												<div class="c-variation__select c-variation__select--last">
													<select
														id="pa_size_138"
														class="hasCustomSelect"
														name="attribute_pa_size"
														style="height: 32px; font-size: 13px;"
													>
														<option value="">Choose an option</option>
														<option value="25cm" class="attached enabled" selected="selected">25cm</option>
														<option value="30cm" class="attached enabled">30cm</option>
														<option value="35cm" class="attached enabled">35cm</option>
													</select>
												</div>
												<button class="reset_variations h-cb c-variation__reset" type="button">
													<svg class="c-variation__reset-svg"><use xlink:href="#svg-clear"></use></svg>Clear
												</button>
											</div>
											<div class="c-variation__single single_variation_wrap">
												<div class="c-variation__single-info single_variation" style="">
													<div class="woocommerce-variation-description"></div>
													<div class="woocommerce-variation-price">
														<span class="price">
															<span class="woocommerce-Price-amount amount">
																<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
															</span>
														</span>
													</div>
													<div class="woocommerce-variation-availability"></div>
												</div>
												<div class="c-variation__single-price">
													<span class="price">
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
														–
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>15.99</bdi>
														</span>
													</span>
												</div>
												<div class="woocommerce-variation-add-to-cart variations_button woocommerce-variation-add-to-cart-enabled">
													<a
														href="#"
														class="c-add-to-cart c-product-grid__add-to-cart single_add_to_cart_button js-add-to-cart-variation"
														rel="nofollow"
													>
														<svg class="c-add-to-cart__svg"><use xlink:href="#svg-cart"></use></svg>Add to cart
													</a>
													<input type="hidden" name="quantity" class="qty" value="1" />
													<input type="hidden" name="add-to-cart" value="138" />
													<input type="hidden" name="product_id" value="138" />
													<input type="hidden" name="variation_id" class="variation_id" value="139" />
													<span class="added_to_cart h-hidden"></span>
												</div>
											</div>
										</form>
										<div class="c-product-grid__quantity-wrap">
											<div class="c-quantity js-product-grid-quantity"></div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>

</style>