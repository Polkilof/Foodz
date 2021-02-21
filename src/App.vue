<template>
	<div id="app">
		<Navbar/>
    <template v-if="error">
      <div
        @input="closeError"
        class="snack__wrapper"
      >
        <div class="snack__content">
          {{ error }}
        </div>
        <div class="snack__action">
          <button
            class="btn"
            @click="closeError"
          >
            Close
          </button>
        </div>
      </div>
    </template>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
	name: 'app',
	components: {
		Navbar
	},
	data () {
		return {

		}
	},
  methods: {
    closeError(){
      this.$store.dispatch('clearError');
    }
  },
  computed: {
    error(){
      return this.$store.getters.error;
    }
  },
}
</script>

<style scoped>
  .snack__wrapper {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-flex;
    justify-content: space-between;
    background-color: #333;
    color: hsla(0,0%,100%,.87);
    border-radius: 4px;
  }
  .snack__content {
    flex-grow: 1;
    font-size: .875rem;
    font-weight: 400;
    letter-spacing: .0178571429em;
    line-height: 1.25rem;
    margin-right: auto;
    padding: 14px 16px;
    text-align: initial;
  }
  .snack__action {
    margin-right: 8px;
    align-items: center;
    align-self: center;
    display: flex;
  }
  .btn {
    display: inline-block;
    vertical-align: top;
    border: 0;
    background: transparent;
    outline: none;
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    font-size: .875rem;
    color: #e91e63 !important;
  }
</style>
