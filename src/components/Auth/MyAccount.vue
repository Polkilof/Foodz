<template>
	<div class="l-section l-section--container l-section--top-margin">
		<div class="l-section__content">
			<div class="woocommerce">
				<header class="c-page-header c-page-header--no-padding">
					<h1 class="c-page-header__title c-page-header__title--tabs">
						<span
							class="c-page-header__tab-login"
							v-bind:class="[ activetab === '1' ? 'c-page-header__tab-login--active' : 'c-page-header__tab-login--not-active' ]"
						>
							<a v-on:click.prevent="activetab='1'">Login</a>
						</span>
						<span class="c-page-header__title-or">or</span>
						<span
							class="c-page-header__tab-register"
							v-bind:class="[ activetab === '2' ? '.c-page-header__tab-register--active' : 'c-page-header__tab-register--not-active' ]"
						>
							<a v-on:click.prevent="activetab='2'">Create Account</a>
						</span>
					</h1>
				</header>

				<div class="c-login">
					<div class="c-login__form c-login__form--active" v-if="activetab ==='1'">
						<form class="c-form">
							<p class="c-form__row">
								<label class="c-form__label" for="username">Username or email address <span class="required">*</span></label>
								<input
									type="text"
									class="c-form__input c-form__input--full c-form__input--fill woocommerce-Input woocommerce-Input--text input-text"
									name="username"
									v-model="email"
								/>
							</p>
							<p class="c-form__row">
								<label class="c-form__label" for="password">Password <span class="required">*</span></label>
								<span class="password-input">
									<input
										class="c-form__input c-form__input--full c-form__input--fill woocommerce-Input woocommerce-Input--text input-text"
										type="password"
										name="password"
										v-model="password"
									/>
								</span>
							</p>

							<p class="c-form__row c-form__row--inline">
								<input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="3a42e72913" /><input type="hidden" name="_wp_http_referer" value="/foodz/demo1/my-account/" />
								<label class="c-form__label"> <input class="c-form__checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /><i></i> Remember me </label>
								<span class="c-login__lost-password">
									<a class="c-login__lost-password-link" href="https://parkofideas.com/foodz/demo1/my-account/lost-password/">Lost your password?</a>
								</span>
							</p>

							<p class="c-form__row">
								<button
									type="button"
									class="c-form__button woocommerce-Button button"
									name="login"
									value="Log in"
                  :loading="loading"
                  :disabled="loading"
									@click="onSubmitLogin"
								>Log in</button>
							</p>
						</form>
					</div>

					<div class="c-login__form c-login__form--active" v-if="activetab ==='2'">
						<form method="post" class="c-form">
							<p class="c-form__row">
								<label class="c-form__label" for="reg_email">Email address <span class="required">*</span></label>
								<input
									class="c-form__input c-form__input--full c-form__input--fill woocommerce-Input woocommerce-Input--text input-text"
									type="email"
									name="email"
									v-model="email"
								/>
							</p>

							<p class="c-form__row">
								<label class="c-form__label" for="password">Password <span class="required">*</span></label>
								<span class="password-input">
									<input
										class="c-form__input c-form__input--full c-form__input--fill woocommerce-Input woocommerce-Input--text input-text"
										type="text"
										name="password"
										v-model="password"
									/>
								</span>
							</p>

							<div class="woocommerce-privacy-policy-text">
								<p>
									Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
									<a href="#" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.
								</p>
							</div>
							<p class="c-form__row">
								<button
									type="button"
									class="c-form__button woocommerce-Button button"
									name="register"
									value="Register"
                  :loading="loading"
                  :disabled="loading"
									@click="onSubmitRegister"
								>Register</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return{
			activetab: '1',
			email: '',
			password: '',
		}
	},
  computed: {
    loading(){
      return this.$store.getters.loading;
    }
  },
	methods: {
		onSubmitLogin(){
			const user = {
				email: this.email,
				password: this.password
			}
			this.$store.dispatch('loginUser', user)
			.then(() => {
				this.$router.push('/')
			})
			.catch(() => {})
		},
		onSubmitRegister(){
			const user = {
				email: this.email,
				password: this.password,
			};
			this.$store.dispatch('registerUser', user)
			.then(() => {
				this.$router.push('/')
			})
			.catch(() => {})
		}
	}
}
</script>
