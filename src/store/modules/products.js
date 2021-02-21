import * as fb from 'firebase'

export default {
	state: {
    /*'categories': [{'name':'pizza'}, {'name':'burgers'}, {'name':'sushi'}, {'name':'noodles'}, {'name':'steaks'}, {'name':'desserts'}, {'name':'drinks'}],
		'products': {
			'pizza': [
				{
					'id': '1',
					'badge': ['Featured', 'New'],
					'sale': '17',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-0901996381-1-238x238.jpg?alt=media&token=15f3019a-2105-493f-899c-940c51f98902',
					'name': 'Pizza Bianca',
					'markers': ['Vegetarian', 'Spicy'],
					'facts': 'Serving Size 1 slice (63 g)<br>Per Serving:<br>Calories 168<br>Total Fat - 4.7g<br>Carbohydrates - 20.4g<br>Protein - 7.6g',
					'wishlist': false,
					'stock': true,
					'description': 'Garlic Flatbread with Mozzarella, Parmesan, Garlic, Rosemary',
					'crust': ['thick', 'thin'],
					'size': ['25cm', '30cm', '35cm'],
					'price': [13.99, 15.99],
					'category': 'pizza'
				},
				{
					'id': '2',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-0901188784-1-238x238.jpg?alt=media&token=1d5f1b5f-a5d9-41f7-b6ef-7aece97a5241',
					'name': 'Pizza Carne',
					'markers': ['Vegetarian', 'Spicy'],
					'facts': 'Serving Size 1 slice (63 g)<br>Per Serving:<br>Calories 168<br>Total Fat - 4.7g<br>Carbohydrates - 20.4g<br>Protein - 7.6g',
					'wishlist': false,
					'stock': true,
					'description': 'Tomato Sauce, Mozzarella, Chicken, Beef, Pepperoni, Onions, Rosemary',
					'crust': ['thick', 'thin'],
					'size': ['25cm', '30cm', '35cm'],
					'price': [13.99, 15.99],
					'category': 'pizza'
				}
			],
			'burgers': [
				{
					'id': '3',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-0927393382-1-238x238.jpg?alt=media&token=f136918c-4e61-4540-a6f7-59f69b837e43',
					'name': 'Angus burger',
					'wishlist': false,
					'stock': true,
					'description': 'A hamburger made using beef from Angus cattle.',
					'price': 8.99,
					'category': 'burgers'
				}
			],
			'sushi': [
				{
					'id': '4',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-1021605166-1-238x238.jpg?alt=media&token=95986c69-138a-4ea5-bdee-fe677d852b1c',
					'name': 'Tekkamaki',
					'wishlist': false,
					'stock': true,
					'description': 'One or more of the parts is deep-fried in a light batter.',
					'price': 3.99,
					'category': 'sushi'
				}
			],
			'noodles': [
				{
					'id': '5',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-1008274691-1-238x238.jpg?alt=media&token=9cc0beef-1a20-41fc-8757-c70368429d18',
					'name': 'Chicken Chow Mein',
					'wishlist': false,
					'stock': true,
					'description': 'Chicken, bok choy, celery, red bell pepper, oyster sauce.',
					'price': 8.99,
					'category': 'noodles'
				}
			],
			'steaks': [
				{
					'id': '6',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-1048717514-1-238x238.jpg?alt=media&token=97defe73-ba2a-4aa5-a7a2-934ff04b4802',
					'name': 'American Wagyu Eye of Rib',
					'wishlist': false,
					'stock': true,
					'description': 'American Wagyu Eye of Rib, Snake River Farm, ID.',
					'price': 45.99,
					'category': 'steaks'
				}
			],
			'desserts': [
				{
					'id': '7',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-1215178083-1-238x238.jpg?alt=media&token=110c89d7-9c3b-40cd-a3b5-e983f11889c6',
					'name': 'Amandine',
					'wishlist': false,
					'stock': true,
					'description': 'Flour, full-fat milk, egg yolks, whipping cream.',
					'price': 1.99,
					'category': 'desserts'
				}
			],
			'drinks': [
				{
					'id': '8',
					'badge': '',
					'sale': '',
					'imageSrc': 'https://firebasestorage.googleapis.com/v0/b/foodz-220e0.appspot.com/o/products%2Fdemo1-1050681807-1-238x238.jpg?alt=media&token=65b3be9e-19e1-4835-8e48-65b81e4f2006',
					'name': 'Blackberry smoothie',
					'wishlist': false,
					'stock': true,
					'description': 'Blackberry, almond milk, chia seeds.',
					'price': 2.99,
					'category': 'drinks'
				}
			]
		}*/
    categories: [],
    products: []
	},
	getters: {
		products (state) {
			return state.products
		},
		categories (state) {
			return state.categories
		},
		/*promoProducts (state) {
			return state.products.filter(product => {
				return product.promo
			})
		},*/
		/*myProducts (state, getters) {
			return state.products.filter(product => {
				return product.ownerId === getters.user.id
			})
		},*/
		/*productById (state) {
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		},*/
		/*productByCategory (state) {
			return productCategory => {
				return state.products.find(category => category === productCategory)
			}
		}*/
		product: (state, getters) => (category) => {
			return getters.products[category];
		}
	},
	mutations: {
		loadProducts (state, payload) {
			state.products = payload
		},
    loadCategories (state, payload) {
      state.categories = payload
    },
    /*updateProduct (state, {title, description, id}) {
      const product = state.products.find(a => {
        return a.id === id
      })
      product.title = title
      product.description = description
    }*/
	},
	actions: {
		async fetchProducts({commit}){
			commit('clearError');
			commit('setLoading', true);
			try {
				const productsVal = await fb.database().ref('products').once('value');
				const resultProducts = productsVal.val();
				/*Object.keys(products).forEach(key => {
					const product = products[key];
					resultProducts.push(
            key
					)
				});*/
        commit('loadProducts', resultProducts);

        const categoriesVal = await fb.database().ref('categories').once('value');
        const resultCategories = categoriesVal.val();
        commit('loadCategories', resultCategories);

				commit('setLoading', false);
			} catch (error) {
				commit('setError', error.message);
				commit('setLoading', false);
				throw error
			}
		},
		/*async updateProduct({commit}, {title, description, id}){
			commit('clearError')
			commit('setLoading', true)
			try {
				await fb.database().ref('products').child(id).update({
					title,
					description
				})
				commit('updateProduct', {
					title,
					description,
					id
				})
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}*/
	}
}
