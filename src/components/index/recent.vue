<template>
  <div>
    <div class="container-fluid recentt">
      <div class="list1">
        最近访问
      </div>
      <div class="list1">
        东京
      </div>
      <div class="list3">
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


    <div class="goodd">
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
  .recentt{
    height: 4rem;
    width: 9.7rem;
    margin-left: 0.15rem;
    background: #11bf79;
    border-radius: 7px;
  }
  .list1{
    text-align: center;
    height: 0.5rem;
    margin-top: 0.3rem;
    line-height:0.5rem;
    color: whitesmoke;
  }
  .recentt div{
    text-align: center;
    color: whitesmoke;
  }
  .list3{
    margin-top: 0.5rem;
  }

  .goodd{
    height: 1rem;
    width: 8rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .goodd div{
    border-radius: 30px;
    text-align: center;
    line-height: 1rem;
    height: 100%;
    background: lightgray;
  }




</style>
