<template>
  <div>
    <commonheader></commonheader>
    <banner></banner>
    <search></search>
    <recent></recent>
    <banner2></banner2>
    <now_go></now_go>
  </div>

</template>

<script>
import commonheader from "./index/header.vue";
import banner from "./index/Carousel_figure.vue";
import search from "./index/search.vue";
import recent from "./index/recent.vue";
import banner2 from "./index/Carousel_figure2.vue";
import now_go from "./index/now_go.vue";
  export default {
    components:{
      commonheader,banner,search,recent,banner2,now_go
    }
  }
</script>



<style>

</style>
