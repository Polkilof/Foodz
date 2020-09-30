<template>
	<li class="c-product-grid__item c-product-grid__item--layout-product-3 product type-product post-145 status-publish instock product_cat-pizza has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes">
		<div class="c-product-grid__item-wrap c-product-grid__item-wrap--layout-product-3">
			<div class="c-product-grid__thumb-wrap c-product-grid__thumb-wrap--layout-product-3">
				<router-link :to="'/product/' + product.id" tag="a">
					<div class="c-badge__list c-product-grid__badges c-product-grid__badges--layout-product-3">
						<span class="c-badge c-badge--featured">Featured</span>
						<span class="c-badge c-badge--new">New</span>
					</div>

					<img
						:src="product.imageSrc"
						:alt="product.name"
						class="c-product-grid__thumb c-product-grid__thumb--layout-product-3 front"
					/>
				</router-link>
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
					<router-link :to="'/product/' + product.id" tag="a" class="c-product-grid__title-link">{{ product.name }}</router-link>
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
					<span class="c-markers__wrap c-product-grid__marker c-product-grid__marker_has">
						<button class="h-cb h-cb--svg c-product-grid__marker-info-icon js-extra-info" type="button">
							<svg><use xlink:href="#svg-info"></use></svg>
						</button>
						<div class="c-product-grid__marker-popup c-product-grid__marker-popup--layout-product-3 js-extra-info-popup">
							<div class="c-product-grid__marker-popup-title">Nutritional facts</div>
							<div class="c-product-grid__marker-popup-text">
								{{ product.facts }}
							</div>
						</div>
					</span>
				</div>
				<div class="c-product-grid__short-desc">
					<p>{{ product.description }}</p>
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
</template>

<script>
export default {
	props: ['product'],
	data(){
		return{
			
		}
	},
	computed: {

	}
}
</script>

<style scoped>
	.c-product-grid__marker-popup {
		min-width: 248px;
	}
	.c-product-grid__markers{
		position: relative;
	}
	.c-product-grid__marker_has{
		position: static;
	}
	.c-product-grid__marker-popup {
		left: -18px;
		right: auto;
	}
	.c-markers__wrap:hover .c-product-grid__marker-popup {
		opacity: 1;
		visibility: visible;
	}
</style>