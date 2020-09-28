import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import user from './modules/user.js'
/*import products from './modules/products.js'
import orders from './modules/orders.js'*/
import ProductItemComponent from '../components/Common/ProductItem.vue'

Vue.use(Vuex)
Vue.component('app-product-item', ProductItemComponent)

export default new Vuex.Store({
	modules: {
		user,
		common,
		/*products,
		orders*/
	}
})