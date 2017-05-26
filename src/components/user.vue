<template>
  <div>
    <div class="main_img">
      <div class="row row1">
        <div class="col-xs-3 col-xs-offset-9" style="height: 100%;">
          <div class="row row2">
            <span class=" glyphicon glyphicon-bell col-xs-6" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-cog   col-xs-6" aria-hidden="true"></span>
          </div>
        </div>
      </div>
      <div class="row row3"  style="height:2rem;">
        <div class="col-xs-4"  style="height:100%">
          <img src="../assets/img/morentouxiang.jpeg" alt=""  class="img-circle user">
        </div>
        <div class="col-xs-6"  style="height:100%;line-height: 2rem;">
          <span>小魔女1111</span>&gt;
        </div>
        <div class="col-xs-2" style="height:100%">
          <span class="glyphicon glyphicon-calendar" style="position: relative;top:50%;margin-top:-1rem;" aria-hidden="true"></span>
        </div>
      </div>
      <div class="row" style="line-height:2rem;">
        <div class="col-xs-2 col-xs-offset-1">
          <span>0</span>粉丝
        </div>
        <div class="col-xs-2">
          <span>0</span>关注
        </div>
      </div>
    </div>
    <div  class="mine row">
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
          <div>我的收藏</div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-inbox" aria-hidden="true"></span>
          <div>我的锦囊</div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="div1">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
          <div>我的行程</div>
        </div>

      </div>
    </div>
    <div class="banner">
      <div class="banner1">
        <div class="row list">
          <span>

          </span>
          <span>我的折扣订单</span>
        </div>
        <div class="row list">
          <span>

          </span>
          <span>我的折扣优惠券</span>
          <span class="right">&gt;</span>
        </div>
      </div>
      <div class="banner2">
        <div class="row list">
          <span>

          </span>
          <span>我的游记</span>
          <span class="right">&gt;</span>
        </div>
        <div class="row list">
          <span>

          </span>
          <span>等我评价的目的地</span>
          <span class="right">&gt;</span>
        </div>
        <div class="row list">
          <span>

          </span>
          <span>我发布的帖子</span>
          <span class="right">&gt;</span>
        </div>
        <div class="row list">
          <span>

          </span>
          <span>我的问答</span>
          <span class="right">&gt;</span>
        </div>
        <div class="row list">
          <span>

          </span>
          <span>我的结伴</span>
          <span class="right">&gt;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default{};
</script>
<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  body{
    margin: 0;
    padding: 0;
  }
  .row{
    margin: 0;
  }
  .main_img{
    background: pink;
    height:6rem;
    width:10rem;
    overflow: hidden;
  }
  .row1{
    height:1rem;
    margin-top:0.3rem;
  }
  .row2{
    height: 100%;
  }
  .user{
    height: 2rem;
    width:2rem;
    margin-left:40px;
  }
  .mine{
    height:2rem;
    background:lightpink;
    color: green;
  }
  .div1{
    margin-top: 0.6rem;
    text-align: center;
  }
  .banner{
    height:12rem;
    background: gray;
    overflow:hidden;
  }
  .banner1{
    margin-top:0.5rem;
    height:3rem;
    width: 9rem;
    margin-left: 0.5rem;
  }
  .banner2{
    margin-top:0.5rem;
    height:7.5rem;
    margin-bottom:0.5rem;
    width: 9rem;
    margin-left: 0.5rem;
  }
  .banner div{
    background:#fff;
  }
  .list{
    height:1.5rem;
    line-height:1.5rem;
    position: relative;
    border-bottom: 1px solid gray;
  }
  .right{
    position: absolute;
    right:0;
  }
</style>
