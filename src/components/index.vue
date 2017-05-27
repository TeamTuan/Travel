<template>
  <div>
    <commonheader></commonheader>
    <banner></banner>
    <search></search>
    <recent></recent>
  </div>

</template>

<script>
import commonheader from "./index/header.vue";
import banner from "./index/Carousel_figure.vue";
import search from "./index/search.vue";
import recent from "./index/recent.vue";
  export default {
    components:{
      commonheader,banner,search,recent
    }
  }
</script>



<style>

</style>
