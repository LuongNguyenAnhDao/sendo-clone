import { createApp } from 'vue';
import App from '../App.vue'
import Vuex from 'vuex';

// Import modules
import products from './modules/products.js'
import menu from './modules/menu.js'
const app = createApp(App);
app.use(Vuex);

const storeData = {
	modules: {
		products,
		menu
	}
}

const store = new Vuex.Store(storeData)

export default store
