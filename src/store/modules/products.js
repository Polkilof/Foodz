import * as fb from 'firebase'

class Product {
	constructor (title, vendor, color, material, price, description, ownerId, imageSrc = '', promo = false, id = null) {
		this.title = title
		this.vendor = vendor
		this.color = color
		this.material = material
		this.price = price
		this.description = description
		this.ownerId = ownerId
		this.imageSrc = imageSrc
		this.promo = promo
		this.id = id
	}
}

export default {
	state: {
		products: [
			/*{
				id: '1',
				title: 'Ноутбук Lenovo G500A (59391955)',
				vendor: 'Lenovo G500A',
				color: 'black',
				material: 'Пластик',
				description: 'Экран 15.6" (1366x768) HD LED, глянцевый / Intel Core i3-3110M (2.4 ГГц) / RAM 4 ГБ / HDD 1 ТБ / AMD Radeon HD 8570M, 2 ГБ / DVD+/-RW / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.6 кг / черный',
				price: 500,
				promo: false,
				imageSrc: 'https://www.nix.ru/images/Lenovo-G500-1676662302.jpg?good_id=167666&width=500&height=500&view_id=2302',
			},*/
		]
	},
	getters: {
		products (state) {
			return state.products
		},
		promoProducts (state) {
			return state.products.filter(product => {
				return product.promo
			})
		},
		myProducts (state, getters) {
			return state.products.filter(product => {
				return product.ownerId === getters.user.id
			})
		},
		productById (state) {
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		}
	},
	mutations: {
		createProduct(state, payload){
			state.products.push(payload)
		},
		loadProducts (state, payload) {
			state.products = payload
		},
		updateProduct (state, {title, description, id}) {
			const product = state.products.find(a => {
				return a.id === id
			})
			product.title = title
			product.description = description
		}
	},
	actions: {
		async createProduct({commit, getters}, payload){
			commit('clearError')
			commit('setLoading', true)

			const image = payload.image

			try {

				const newProduct = new Product(
					payload.title,
					payload.vendor,
					payload.color,
					payload.material,
					payload.price,
					payload.description,
					getters.user.id,
					'',
					payload.promo
				)

				const product = await fb.database().ref('products').push(newProduct)

				const imageExt = image.name.slice(image.name.lastIndexOf('.'))
				const fileData = await fb.storage().ref(`products/${product.key}.${imageExt}`).put(image)
				const imageSrc = await fb.storage().ref().child(fileData.ref.fullPath).getDownloadURL()
				await fb.database().ref('products').child(product.key).update({imageSrc})

				commit('setLoading', false)
				commit('createProduct', {
					...newProduct,
					id: product.key,
					imageSrc
				})

			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		async fetchProducts ({commit}){
			commit('clearError')
			commit('setLoading', true)
			const resultProducts = []
			try {
				const productsVal = await fb.database().ref('products').once('value')
				const products = productsVal.val()
				Object.keys(products).forEach(key => {
					const product = products[key]
					resultProducts.push(
						new Product(
							product.title,
							product.vendor,
							product.color,
							product.material,
							product.price,
							product.description,
							product.ownerId,
							product.imageSrc,
							product.promo,
							key
						)
					)
				})
				commit('loadProducts', resultProducts)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		async updateProduct({commit}, {title, description, id}){
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
		}
	}
}