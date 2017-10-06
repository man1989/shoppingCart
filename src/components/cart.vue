<template>
   <div class="cart">
       <h2>Your cart</h2>
       <p v-show="!products.length">Your cart is empty</p>
       <ul>
           <li v-for="p in products">
               {{p.title}}-{{p.price}}
           </li>
       </ul>
       <p>Total Items: {{products.length}}</p>
       <p>Total Amount: {{total}}</p>
       <button :disabled="!products.length" @click="checkout()">checkout</button>
   </div>
</template>

<script>
   import {mapGetters, mapActions} from "vuex";
   export default {
       computed: {
            ...mapGetters({
                products: "cartProducts"
            }),
            total(){
                return this.products.reduce((t, p)=>{
                    return t+p.price;
                }, 0);
            }
       },
       methods:{
           checkout(){
               this.$store.dispatch("checkout", this.products);
           }
       }
   }
</script>
