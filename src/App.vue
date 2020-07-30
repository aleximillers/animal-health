<template>
  <div id="app">
<!--    <SearchBar></SearchBar>-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <DataList />
  </div>
</template>

<script>
import DataList from './components/DataList.vue'
import Vue from "vue";
// import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
      DataList
  }
}
Vue.config.productionTip = false
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
