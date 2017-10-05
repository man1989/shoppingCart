import Vue from "vue";
import App from "./components/App.vue";
import store from "./store";

new Vue({
    el:"#app",
    store,
    render: function(h){
        return h(App);
    }
});