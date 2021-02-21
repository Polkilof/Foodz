import Vue from 'vue'
import App from './App.vue'
import Routes from './router'
import store from './store/index'
import * as fb from 'firebase/app'
import babelPolyfill from 'babel-polyfill'
import ProductItemComponent from './components/Common/ProductItem.vue'

Vue.component('app-product-item', ProductItemComponent)
Vue.config.productionTip = false

new Vue({
	router: Routes,
	store,
	render: h => h(App),
	created() {
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		var firebaseConfig = {
			apiKey: "AIzaSyD03Yg0g3don3DWrVLHXCBfQcU5CNGYZxA",
			authDomain: "foodz-220e0.firebaseapp.com",
			databaseURL: "https://foodz-220e0.firebaseio.com",
			projectId: "foodz-220e0",
			storageBucket: "foodz-220e0.appspot.com",
			messagingSenderId: "1054138859121",
			appId: "1:1054138859121:web:74581117768aba3fae65d0",
			measurementId: "G-XEHJ6P6LSE"
		};
		// Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user);
      }
    });
    this.$store.dispatch('fetchProducts');
	}
}).$mount('#app');
