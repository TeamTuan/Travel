<template>
  <div class="index">
    <div class="sex">
      <div class="row" @click="man">男</div>
      <div class="row" @click="woman">女</div>
    </div>
  </div>
</template>
<script>
  import Axios from "axios";
  export default{
      data:function () {
        return {
            login_id:0,
        }
      },
      mounted:function () {
        if(document.cookie){
          var arr=document.cookie.split(";")[1];
          var new_arr=arr.split("=")[1];
          this.login_id=Number(new_arr[1]);
        }
      },
      methods:{
          man:function () {
            this.$emit("change_sex","男");
            var _this=this;
            Axios.get('http://localhost:3000/save_sex',{
              params:{
                id:_this.login_id,
                value:1
              }
            }).then(function(res){
              console.log(JSON.parse(res.data));
            })

          },
          woman:function () {
            this.$emit("change_sex","女");
            var _this=this;
            Axios.get('http://localhost:3000/save_sex',{
              params:{
                id:_this.login_id,
                value:0
              }
            }).then(function(res){
              console.log(JSON.parse(res.data));
            })
          }
      }
  }
</script>
<style scoped>
  .row{
    margin: 0;
    padding: 0;
  }
  .index{
    height: 20rem;
    width: 100%;
    opacity: 0.5;
    background: #000;
  }
  .sex{
    height: 2rem;
    width: 8rem;
    position: fixed;
    top: 20%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -4rem;
    background: gray;
  }
  .sex div{
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    color: white;
    border-bottom: 1px solid black;
  }
</style>
