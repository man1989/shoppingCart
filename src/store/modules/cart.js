import shop from "../../apis/shop";

const state = {
    products: [],
    checkoutStatus: null
}

const getters = {
    getStatus: state => state.checkoutStatus
}

const mutations = {
    add_cart(state, {id}){
        let record = state.products.find(p=>p.id===id);
        state.products.push({
           id:id,
           qty: 1
        });
    },
    checkout_request(state){
        state.products = [];
        state.checkoutStatus = null;
    }
}

const actions = {
    addToCart({commit}, product){
        if(product.inventory){
            commit("add_cart", {id:product.id})
        }
    },
    checkout({commit}, products){
        commit("checkout_request");
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}