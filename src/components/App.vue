<template>
  <div id="app">
    <h1>Shooping Cart</h1>
    <hr>
    <h2>Products</h2>
    <producr-list></producr-list>
  </div>
</template>

<script>
    import producrList from "./productList.vue";
    export default {
      components: { producrList }
    }
</script>
