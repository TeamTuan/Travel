<template>
  <div>
    <div class="container-fluid recentt">
      <div class="row list1">
        最近访问
      </div>
      <div class="row list1">
        东京
      </div>
      <div class="row list3">
        <div class="col-xs-3">
        <span class="glyphicon glyphicon-cutlery" aria-hidden="true"
              style="font-size: 35px;">

        </span>
        <div>景点美食</div>
      </div>

        <div class="col-xs-3">
        <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"
              style="font-size: 35px;">

        </span>
          <div>商城</div>
        </div>
        <div class="col-xs-3">
        <span class="glyphicon glyphicon-folder-close" aria-hidden="true"
              style="font-size: 35px;">

        </span>
          <div>锦囊</div>
        </div>

        <div class="col-xs-3">
        <span class="glyphicon glyphicon-globe" aria-hidden="true"
              style="font-size: 35px;">

        </span>
          <div>地图</div>
        </div>
      </div>
    </div>


    <div class="row goodd">
      <div class="col-xs-4">
        <goods>
          <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="font-size: 25px;" slot="icon"></span>
          <span slot="inner">佛罗伦萨</span>
        </goods>
      </div>
      <div class="col-xs-4">
        <goods>
          <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="font-size: 25px;" slot="icon"></span>
          <span slot="inner">巴厘岛</span>
        </goods>
      </div>
      <div class="col-xs-4">
        <goods>
          <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true" style="font-size: 25px;" slot="icon"></span>
          <span slot="inner">墨尔本</span>
        </goods>
      </div>
    </div>


  </div>

</template>

<script>
  import goods from "./good.vue";
  export default {
    components:{
      goods
    }
  }
</script>



<style>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  @import "../../assets/css/recent.css";

</style>
