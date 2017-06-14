<template>
  <div class="reply-place">
    <!--//header-->
    <div class="header row" style="width:10rem;height:1.5rem;background:#11bf79;">
      <div class="col-xs-2">
        <router-link :to="'/child_place/'+value" style="color:white;"><span class="glyphicon glyphicon-arrow-left"  style="font-size:30px;" aria-hidden="true"></span></router-link>
      </div>
      <div class="col-xs-8" style="color: whitesmoke;font-size: 30px;">{{scene_info.name}}</div>
      <div class="col-xs-2"></div>
    </div>
    <!--//img显示-->
    <div class="r-p-body-img" style="margin-top: -2px;">
      <img src="../assets/img/child-place/c-p-picture.jpg">
    </div>
    <!--//景点信息显示-->
    <div class="row">
      <div class="row" style="height: 1rem;">
        <div class="col-xs-3 left">英文名字</div>
        <div class="col-xs-1"></div>
        <div class="col-xs-7 right">{{scene_info.englishname}}</div>
      </div>
      <div class="row" style="height: 1rem;">
        <div class="col-xs-3 left">所在位置</div>
        <div class="col-xs-1"></div>
        <div class="col-xs-7 right">{{scene_info.position}}</div>
      </div>
      <div class="row" style="height: 1rem;">
        <div class="col-xs-3 left">去过的人数</div>
        <div class="col-xs-1"></div>
        <div class="col-xs-7 right">{{scene_info.count}}</div>
      </div>
      <div class="row" style="height: 1rem;">
        <div class="col-xs-3 left">评价</div>
        <div class="col-xs-1"></div>
        <div class="col-xs-7 right">{{scene_info.grade}}</div>
      </div>
      <div class="row" style="height: 5rem;">
        <div class="col-xs-3 left">景点介绍</div>
        <div class="col-xs-1"></div>
        <div class="col-xs-7">
          <textarea style="height: 4.5rem;width: 100%;margin-top: 0.25rem;border: 0;">{{scene_info.text}}</textarea>
        </div>
      </div>
    </div>
    <!--//对景点的评论回复展示-->
    <div class="row">
      <div style="height: 1rem;font-size: 35px;" class="row">
        <div class="col-xs-9" style="text-align: left;line-height: 1rem;height: 1rem;">
          <span style="font-size: 35px;">评论</span>
        </div>
        <div class="col-xs-3">
          <button @click="show_div" style="height: 100%;width: 100%;background:#439865;color: white;border-radius: 10px;" data-toggle="modal" data-target="#myModal">添加评论</button>
        </div>
      </div>
      <div class="row">

        <pinglun class="pinglun" v-for="comment in commentlist" :comment="comment" @show_reply_box="show_reply_box" @show_comment_box="show_comment_box"></pinglun>

      </div>
    </div>

    <insert v-show="show" @exit_div="exit_div" :scene_id="scene_id" :values="value"></insert>
    <insert_reply_comment v-show="show_comment" @exit_comment="exit_comment" :comment_id="comment_id" :user_id="user_id" :scene_id="scene_id" :values="value"></insert_reply_comment>
    <insert_reply_reply v-show="show_reply" @exit_reply="exit_reply" :reply_id="reply_id" :to_id="to_id" :comment_id_reply="comment_id_reply" :scene_id="scene_id" :values="value"></insert_reply_reply>
  </div>
</template>
<script>
  import Axios from 'axios';
  import pinglun from "./pinglun.vue";
  import insert from "./insert.vue";
  import insert_reply_comment from "./insert_reply_comment.vue";
  import insert_reply_reply from "./insert_reply_reply.vue";
  export default{
    data:function(){
      return{
        scene_info:'',
        scene_id:0,
        value:"",
        commentlist:{},
        show:false,
        show_comment:false,
        show_reply:false,
        comment_id:0,
        user_id:0,
        reply_id:0,
        to_id:0,
        comment_id_reply:0
      }
    },
    mounted:function () {
      var scene_id=this.$route.params.id;
      this.value=this.$route.params.value;
      this.scene_id=scene_id;
      var _this = this;
      Axios.get("http://localhost:3000/publish_scene", {
        params: {
          id:scene_id
        }
      }).then(function (res) {
        _this.scene_info=JSON.parse(res.data);

      });

      Axios.get("http://localhost:3000/select_comment_by_scene_id", {
        params: {
          id:scene_id
        }
      }).then(function (res) {
        _this.commentlist=JSON.parse(res.data);
      })


    },
    components:{
      pinglun,insert,insert_reply_comment,insert_reply_reply
    },
    methods:{
        show_div:function () {
          if(document.cookie){
            this.show=true;
          }else{
            this.$router.push("/login_ma");
          }
        },
        exit_div:function (val) {
          this.show=val;
        },
        show_comment_box:function(val){
          if(document.cookie){
            this.show_comment=true;
            this.comment_id=val.comment_id;
            this.user_id=val.user_id;
          }else{
            this.$router.push("/login_ma");
          }
        },
        show_reply_box:function (val) {
          if(document.cookie){
            this.show_reply=true;
            this.reply_id=val.reply_id;
            this.to_id=val.to_id;
            this.comment_id_reply=val.comment_id;
          }else{
            this.$router.push("/login_ma");
          }
        },
        exit_comment:function (val) {
          this.show_comment=false;
        },
        exit_reply:function () {
          this.show_reply=false;
        }
    }
  }
</script>
<style src="../assets/css/reply.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.css" scoped></style>
<style src="../assets/lib/bootstrap/css/bootstrap-theme.min.css" scoped></style>
<style scoped>
  .row{
    margin: 0;
    padding: 0;
  }
  .row div{
    height: 100%;
    line-height: 1rem;
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;

  }
  .row .left{
    text-align: right;
  }
.row .right{
  text-align: left;
}
  .header div{
    text-align: center;
    line-height: 1.5rem;
  }
  .comment{
    margin-top: 0.3rem;
  }
</style>

