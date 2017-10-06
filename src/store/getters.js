export function cartProducts(state){
    return state.cart.products.map(({id, qty}) => {
        let product = state.products.all.find(p=> p.id===id)
        return {
            title: product.title,
            price: product.price
        }
    });
}