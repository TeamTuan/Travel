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
import commonheader from "./header.vue";
import banner from "./Carousel_figure.vue";
import search from "./search.vue";
import recent from "./recent.vue";
import banner2 from "./Carousel_figure2.vue";
import now_go from "./now_go.vue";
  export default {
    components:{
      commonheader,banner,search,recent,banner2,now_go
    }
  }
</script>



<style>

</style>
