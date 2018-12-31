import Vue from "vue";
import App from "./App.vue";
import MuseUI from "muse-ui";

new Vue({
  el: "#app",
  //render: h => h(App)
  render: h => h("mu-button", {}, "Hello World")
})
