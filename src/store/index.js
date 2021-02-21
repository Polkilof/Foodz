import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import user from './modules/user.js'
import products from './modules/products.js'
import orders from './modules/orders.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		user,
		common,
		products,
		orders
	}
})
