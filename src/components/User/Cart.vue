<template>
	<div>
		<header class="l-section c-page-header c-page-header--common">
			<h1 class="c-page-header__title">Cart</h1>
		</header>

		<div class="l-section l-section--container l-section--top-margin">
			<div class="l-section__content">
				<div class="woocommerce">
					<div class="c-cart">
						<div class="c-cart__wrap">
							<div class="c-cart__col-1">
								<div class="js-sticky-sidebar-nearby">
									<form class="woocommerce-cart-form" action="https://parkofideas.com/foodz/demo1/cart/" method="post">
										<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents c-cart__shop-table" cellspacing="0">
											<thead class="c-cart__shop-thead">
												<tr>
													<th class="c-cart__shop-th c-cart__shop-th--product-name" colspan="2">Product</th>
													<th class="c-cart__shop-th c-cart__shop-th--product-price c-cart__shop-th--item-price">Price</th>
													<th class="c-cart__shop-th c-cart__shop-th--product-quantity">Quantity</th>
													<th class="c-cart__shop-th c-cart__shop-th--product-subtotal">Subtotal</th>
												</tr>
											</thead>
											<tbody class="c-cart__shop-tbody">
												<tr class="c-cart__shop-tr cart_item">
													<td class="c-cart__shop-td c-cart__shop-td--product-thumbnail">
														<a
															href="https://parkofideas.com/foodz/demo1/cart/?remove_item=4ef1e408728cabcaef6fabab6dcb2011&amp;_wpnonce=0247ebbd0f"
															class="c-cart__shop-remove remove"
															aria-label="Remove this item"
															data-product_id="138"
															data-product_sku=""
														>
															<svg class="c-cart__shop-remove-svg"><use xlink:href="#svg-close"></use></svg>
														</a>
														<a class="c-cart__thumbnail-link" href="https://parkofideas.com/foodz/demo1/product/pizza-bianca/?attribute_pa_crust=thick&amp;attribute_pa_size=25cm">
															<img
																src="../../assets/demo1-0901996381-1-55x55.jpg"
																class="attachment-woocommerce_gallery_thumbnail size-woocommerce_gallery_thumbnail lazyloaded"
																alt=""
																width="55"
																height="55"
															/>
														</a>
													</td>

													<td class="c-cart__shop-td c-cart__shop-td--product-name" data-title="Product">
														<a href="https://parkofideas.com/foodz/demo1/product/pizza-bianca/?attribute_pa_crust=thick&amp;attribute_pa_size=25cm">
															Pizza Bianca<span class="c-cart__shop-variation">thick, 25cm</span>
														</a>
													</td>

													<td class="c-cart__shop-td c-cart__shop-td--product-price c-cart__shop-td--item-price" data-title="Price">
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
													</td>

													<td class="c-cart__shop-td c-cart__shop-td--product-quantity" data-title="Quantity">
														<div class="c-product__quantity">
															<label class="screen-reader-text" for="quantity_5f69c8ed48f23">Pizza Bianca - thick, 25cm quantity</label>
															<input
																type="number"
																id="quantity_5f69c8ed48f23"
																class="h-cb c-product__quantity-value qty"
																step="1"
																min="0"
																max=""
																name="cart[4ef1e408728cabcaef6fabab6dcb2011][qty]"
																value="1"
																title="Qty"
																size="4"
																placeholder=""
																inputmode="numeric"
															/>
															<button class="h-cb c-product__quantity-minus js-quantity-minus" type="button">-</button>
															<button class="h-cb c-product__quantity-plus js-quantity-plus" type="button">+</button>
														</div>
													</td>

													<td class="c-cart__shop-td c-cart__shop-td--product-price c-cart__shop-td--product-subtotal" data-title="Subtotal">
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
													</td>
												</tr>

												<tr class="c-cart__shop-tr c-cart__shop-tr--actions">
													<td colspan="5" class="c-cart__shop-td c-cart__shop-td--actions">
														<span class="c-cart__shop-update">
															<input type="submit" class="c-cart__shop-update-button button" name="update_cart" value="Update cart" aria-disabled="false" />
															<svg class="c-cart__shop-update-svg"><use xlink:href="#svg-update"></use></svg>
														</span>
														<input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="0247ebbd0f" /><input type="hidden" name="_wp_http_referer" value="/foodz/demo1/cart/" />
													</td>
												</tr>
											</tbody>
										</table>
									</form>
								</div>
							</div>
							<div class="c-cart__col-2">
								<div class="cart-collaterals c-cart__collaterals js-sticky-sidebar">
									<div class="c-cart__totals cart_totals">
										<div class="c-cart__coupon">
											<a href="#" class="js-cart-coupon">
												<div class="c-cart__sub-header">
													Coupon code <svg class="c-cart__select-svg"><use xlink:href="#svg-select"></use></svg>
												</div>
											</a>

											<div class="c-cart__coupon-from-wrap">
												<div class="c-cart__coupon-form">
													<input type="text" name="coupon_code" class="input-text" id="coupon_code" placeholder="Coupon code" />
													<button class="c-cart__coupon-apply button" id="ip-checkout-apply-coupon" name="apply_coupon" type="button">Apply coupon</button>
												</div>
											</div>
										</div>
										<table class="c-cart__totals-table shop_table">
											<tbody>
												<tr class="c-cart__totals-subtotal cart-subtotal">
													<th class="c-cart__sub-header">Subtotal</th>
													<td class="c-cart__totals-price" data-title="Subtotal">
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
													</td>
												</tr>

												<tr>
													<td colspan="2" class="c-cart__collaterals-hr"></td>
												</tr>

												<tr class="order-total">
													<th class="c-cart__sub-header">Total</th>
													<td class="c-cart__totals-price c-cart__totals-price--total" data-title="Total">
														<strong>
															<span class="woocommerce-Price-amount amount">
																<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
															</span>
														</strong>
													</td>
												</tr>

												<tr>
													<td colspan="2" class="c-cart__collaterals-hr"></td>
												</tr>

												<tr>
													<td class="c-cart__totals-action wc-proceed-to-checkout" colspan="2">
														<router-link to="/checkout" tag="a" class="c-form__button checkout-button button alt wc-forward">
															Checkout
														</router-link>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="c-cart__cross-sell"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>