<template>
  <div class="container-fluid search">
    <div class="index row" style="padding: 0.13rem;margin: 0;">
      <div class="col-xs-1 icon">
        <span class="glyphicon glyphicon-search" aria-hidden="true"
        style="font-size: 35px;" @click="to_child_place"></span>
      </div>
      <div class="col-xs-10">
        <input type="text" class="search-value" v-model="value" placeholder="搜索目的地、锦囊、游记、特价、穷游er">
      </div>
      <div class="col-xs-1 icon">
        <span class="glyphicon glyphicon-qrcode" aria-hidden="true"
        style="font-size: 35px;"></span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data:function () {
      return {
        value:""
      }
    },
    methods:{
      to_child_place:function () {
        this.$router.push("/child_place/"+this.value);
      }
    }
  }
</script>



<style scoped>
  @import "../../assets/lib/bootstrap/css/bootstrap.css";
  @import "../../assets/css/common.css";
  .search{
    height: 1.33rem;
    width: 100%;
    padding: 0.13rem;
  }
  .index{
    border-radius: 10px;
    border: 1px solid gray;
    height: 100%;
  }
  .index div{
    height: 100%;
    padding: 0;
  }
  .icon{
    height: 1rem;
    text-align: center;
    line-height: 1rem;
  }
  .search-value{
    height: 100%;
    border: 0;
    width: 100%;
    text-indent: 10px;
    outline: none;
  }
  .icon{
    background: white;
  }

</style>
