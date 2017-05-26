<template>
  <div class="container-fluid search">
    <div class="index">
      <span style="height: 50%;"><img src="../assets/img/search.jpg" alt=""></span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>



<style>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  @import "../assets/css/common.css";
  .search{
    height: 100px;
    padding: 10px;
  }
  .index{
    border-radius: 10px;
    border: 1px solid gray;
    height: 100%;
  }
  .icon{
    height: 50px;
    width: 50px;
  }
  .index img{
    height: 50%;
    width: 50px;
    margin-top: 25%;
  }
</style>
