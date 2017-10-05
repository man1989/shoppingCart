<template>
  <ul>
      <li v-for="p in products">
          {{p.title}} - {{p.price}}
          <br>
          <button v-bind:disabled="!p.inventory" v-on:click="addToCard(p)">Add to cart</button>
      </li>
  </ul>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        computed: mapGetters({
            products:"allProducts"
        }),
        created: function(){
            this.$store.dispatch("getAllProducts");
        }
    }
</script>
