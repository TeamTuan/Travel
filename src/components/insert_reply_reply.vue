<template>
  <div class="index">
    <div class="row" style="height: 4rem;">
      <textarea v-model="value" style="height: 3rem;margin-top: 0.5rem;width: 6rem;margin-left: 0.5rem;"></textarea>
    </div>
    <div class="row" style="height: 1rem;">
      <div class="col-xs-6">
        <button @click="click" style="width: 2rem;height: 100%;background:limegreen;color: white;border-radius: 20px;">
          回复回复
        </button>
      </div>
      <div class="col-xs-6">
        <button @click="exit_reply" style="width: 2rem;height: 100%;background:limegreen;color: white;border-radius: 20px;">
          取消
        </button>
      </div>

    </div>
  </div>
</template>
<script>
  import Axios from "axios";
  export default{
    props:["scene_id","values","reply_id","to_id","comment_id_reply"],
    data:function () {
      return{
        value:"",
        login_id:0
      }
    },
    methods:{
      exit_reply:function () {
        this.$emit("exit_reply",false);
      },
      click:function () {
        if(document.cookie){
          var arr=document.cookie.split(";")[1];
          var new_arr=arr.split("=")[1];
          this.login_id=new_arr;
        }

        var comment_id=this.comment_id_reply;
        var reply_id=this.reply_id;
        var user_id=this.login_id;
        var to_id=this.to_id;
        var value=this.value;

        var _this=this;
        Axios.get("http://localhost:3000/insert_reply_reply",{
          params:{
            comment_id:comment_id,
            reply_id:reply_id,
            user_id:user_id,
            to_id:to_id,
            value:value
          }
        }).then(function (res) {
          console.log(res.data);
          _this.exit_reply();
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
