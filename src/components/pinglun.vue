<template>
<div  style="border-top: 1px solid gray;">
    <div class="row">
      <div class="row">
        <div class="col-xs-3" style="text-align: center;color:lightskyblue;"><span>{{ comment.name }}</span><span>:</span></div>
        <div class="col-xs-9">
          <div>{{comment.content}}</div>
        </div>
      </div>
      <div class="row info" style="height: 1rem;">
        <div class="col-xs-2"></div>
        <div class="col-xs-2"></div>
        <div class="col-xs-2"></div>
        <div class="col-xs-4"></div>
        <div class="col-xs-1"></div>
        <div class="col-xs-1"></div>
      </div>
    </div>
    <div>
      <div class="row">
        <huifu class="huifu" v-for="reply in replylist" :reply_info="reply"></huifu>
      </div>
    </div>
</div>
</template>
<script>
  import huifu from "./huifu.vue";
  import Axios from "axios";
  export default{
    props:["comment"],
    data:function () {
      return{
        replylist:{}
      }
    },
    components:{
        huifu
    },
    mounted:function () {
      var _this=this;
      Axios.get("http://localhost:3000/select_reply_by_comment_id", {
        params: {
          id:_this.comment.comment_id
        }
      }).then(function (res) {
        _this.replylist=JSON.parse(res.data);
      })


    },
    methods:{

    }
}
</script>
<style  scoped>
  @import "../assets/lib/bootstrap/css/bootstrap.css";
  *{
    margin: 0;
    padding: 0;
    font-size: 30px;
  }
  .info div{
    height: 100%;
    text-align: center;
    line-height: 1rem;
  }
</style>
