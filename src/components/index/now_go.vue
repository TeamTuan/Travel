<template>
  <div>
    <div class="row now_go">
      <div style="height: 100%;">
        <span class="glyphicon glyphicon-flag" aria-hidden="true"></span>
        <div>现在出发</div>
      </div>
    </div>
    <div class="row nav2">
      <ul class="nav_list">
        <li>全部</li>
        <li>当季</li>
        <li>干货</li>
        <li>性价比</li>
        <li>商城</li>
        <li>旅拍</li>
        <li>游记</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import "../../assets/js/zepto.min";
  import "../../assets/js/touch";
  import "../../assets/js/now_go";
  export default {}
</script>


<style>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  .now_go{
    margin-top: 0.2rem;
    height: 1rem;
    text-align: center;
    color: #3c763d;
  }
  .nav2,.nav_list{
    height: 1.5rem;
    background: darkgray;
  }
  .nav2{
    overflow: hidden;
    position: relative;
  }
  .nav_list{
    width: 14rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .nav_list li{
    height: 100%;
    width: 2rem;
    float: left;
    text-align: center;
    line-height: 1.5rem;
  }
</style>
