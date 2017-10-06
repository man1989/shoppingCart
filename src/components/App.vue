<template>
  <div id="app">
    <h1>Shooping Cart</h1>
    <hr>
    <h2>Products</h2>
    <producr-list></producr-list>
    <cart></cart>  
  </div>
</template>

<script>
    import producrList from "./productList.vue";
    import cart from "./cart.vue";

    export default {
      components: { producrList, cart }
    }
</script>
