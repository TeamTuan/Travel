<template>
  <div class="index">
    <div class="row" style="height: 4rem;">
      <textarea v-model="value" style="height: 3rem;margin-top: 0.5rem;width: 6rem;margin-left: 0.5rem;"></textarea>
    </div>
    <div class="row" style="height: 1rem;">
      <div class="col-xs-6">
        <button @click="click" style="width: 2rem;height: 100%;background:limegreen;color: white;border-radius: 20px;">
          回复1
        </button>
      </div>
      <div class="col-xs-6">
        <button @click="exit_comment" style="width: 2rem;height: 100%;background:limegreen;color: white;border-radius: 20px;">
          取消
        </button>
      </div>

    </div>
  </div>
</template>
<script>
  import Axios from "axios";
  export default{
    props:["scene_id","values","comment_id","user_id"],
    data:function () {
      return{
        value:"",
        login_id:0
      }
    },
    methods:{
      exit_div:function () {
        this.$emit("exit_comment",false);
      },
      click:function () {
        var value=this.value;

        if(document.cookie){
          var arr=document.cookie.split(";")[1];
          var new_arr=arr.split("=")[1];
          this.login_id=new_arr;
        }

        var from_id=this.login_id;
        var comment_id=this.comment_id;
        var to_id=this.user_id;
        var _this=this;


        Axios.get("http://localhost:3000/insert_reply_comment",{
          params:{
            comment_id:comment_id,
            from_id:from_id,
            to_id:to_id,
            value:value
          }
        }).then(function (res) {
          console.log(res.data);
          _this.exit_div();
          _this.$router.push("/router/"+_this.scene_id+"/"+_this.values);
        });


      }
    }
  }
</script>
<style scoped>
  .index{
    width: 7rem;
    height: 5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -2.5rem;
    margin-left: -3.5rem;
    background: gray;
  }
  .index div {
    height: 100%;
  }
  .row div{
    text-align: center;
  }
</style>
