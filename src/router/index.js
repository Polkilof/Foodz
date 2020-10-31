import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AuthGuard from './auth-guard'
import Home from '../components/Home'
import Product from '../components/Products/Product'
import ProductCategory from '../components/Products/ProductCategory'
import Checkout from '../components/User/Checkout'
import Cart from '../components/User/Cart'
import Wishlist from '../components/User/Wishlist'
import MyAccount from '../components/Auth/MyAccount'



const routes = [
	{
		path: '',
		name: 'home',
		component: Home
	},
	{
		path: '/product/:id',
		props: true,
		name: 'product',
		component: Product
	},
	{
		path: '/product-category/:categories',
		name: 'product-category',
		component: ProductCategory,
		//beforeEnter: AuthGuard
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: Checkout,
		//beforeEnter: AuthGuard
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart,
		//beforeEnter: AuthGuard
	},
	{
		path: '/wishlist',
		name: 'wishlist',
		component: Wishlist,
		//beforeEnter: AuthGuard
	},
	{
		path: '/my-account',
		name: 'my-account',
		component: MyAccount
	},
]

export default new VueRouter({
	routes,
	mode: 'history'
});