import shop from "../../apis/shop";

const state = {
    all:[]
}

const getters = {
    allProducts: state => state.all
}

const mutations = {
    recieve_products(state,{ products }){
        state.all = products
    },
    add_cart(state, {id}){
        state.all.find(p=>p.id===id).inventory--;
    }
}

const actions = {
    getAllProducts({ commit }){
        Promise.resolve(shop.getProducts()).then(function(products){
            commit("recieve_products", { products });
        });
    }
}

export default {
   state,
   getters,
   mutations,
   actions
}

