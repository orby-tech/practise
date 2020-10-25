<template>
  <div id="app">
    <img  @click="click"  alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld v-bind:msg="store.getters.name" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import store from "./store";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  store = store

  count = 11

  click(): void {
    console.log(store.state)
    store.commit('increment')
    store.commit('nameUpdate')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
