<template>
	<div>
		<header class="l-section c-page-header c-page-header--category c-page-header--parallax">
			<nav class="с-breadcrumb">
				<ol class="с-breadcrumb__list">
					<li class="с-breadcrumb__item"><a href="/">Home</a></li>
					<li class="с-breadcrumb__item">{{ category | capitalize  }}</li>
				</ol>
			</nav>
			<h1 class="c-page-header__title">{{ category }}</h1>
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
							<app-product-item
								v-for="(product,i) in productsCategory" :key="i"
								:product="product"
							></app-product-item>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	filters: {
		capitalize: (str) => {
			return str.charAt(0).toUpperCase() + str.slice(1)
		}
	},
	computed: {
		category(){
			return this.$route.params.categories
		},
		productsCategory() {
			return this.$store.getters.product(this.category);
		},
	}
}
</script>

<style scoped>

</style>