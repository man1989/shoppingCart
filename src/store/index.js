import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";
import products from "./modules/productList";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    modules: { 
        products,
        cart 
    }
});