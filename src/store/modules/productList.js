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
    }
}

const actions = {
    getAllProducts({ commit }){
        // console.log("got invoked");
        Promise.resolve(shop.getProducts()).then(function(products){
            console.log(products);
            commit("recieve_products", {products});
        });
    }
}

export default {
   state,
   getters,
   mutations,
   actions
}

