<template>
  <div>
    <commonheader class="navbar-fixed-top nav_fix" style="height: 1.6rem;"></commonheader>
    <banner style="margin-top: 1.6rem"></banner>
    <search class="m_search"></search>
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

import "../../assets/js/jquery-3.2.1.min";
import "../../assets/js/top.js";

  export default {
    components:{
      commonheader,banner,search,recent,banner2,now_go
    }
  }
</script>



<style>
body{
  height: 3000px;
}
  .new_search{
    background: #11bf79;
  }
</style>
