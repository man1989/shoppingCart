const _products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5},
    {"id": 4, "title": "Samsung galaxy S8", "price": 550.01, "inventory": 20},    
];

export default {
    getProducts: function(){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve(_products);
            }, 3000);
        });
    }
}