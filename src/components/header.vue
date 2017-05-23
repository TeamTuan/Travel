<template>
  <div>
    <div class="container-fluid header">
      <div class="row nav">
        <div class="col-xs-8">
          <ul class="menu">
            <li><a href="">首页</a></li>
            <li><a href="">目的地</a></li>
            <li><a href="">商城</a></li>
            <li><a href="">社区</a></li>
          </ul>
        </div>
        <div class="col-xs-2 user col-xs-offset-2"><img src="../assets/img/user.png" alt=""></div>
      </div>
    </div>
    <banner></banner>
  </div>
</template>
<script>
  import $ from 'jquery';
  import banner from './Carousel_figure.vue';
  export default {
    data:function () {
      return {
        timer:""
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/common.css";
  @import "../assets/css/header.css";
</style>
