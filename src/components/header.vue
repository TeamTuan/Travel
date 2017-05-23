<template>
  <div class="container-fluid header">
    <a class="logo"><img src="../assets/img/logo.png" alt=""></a>
    <ul class="menu">
      <li><a href="">目的地</a></li>
      <li><a href="">锦囊</a></li>
      <li><a href="">行程助手</a></li>
      <li><a href="">社区<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a></li>
      <li><a href="">商城</a></li>
      <li><a href="">机票</a></li>
      <li><a href="">酒店</a></li>
      <li><a href="">预定<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></a></li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'
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
