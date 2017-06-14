<template>
  <div>
    <div class="row" @click="show_reply_box">
      <div class="col-xs-4" style="text-align: right;">
        <span style="color:lightskyblue;">{{ from_username }}</span>
        <span>回复</span>
        <span style="color:lightskyblue;">{{ to_username }}</span>
        <span>:</span>
      </div>
      <div class="col-xs-8">
        <div>{{ reply_info.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from "axios";
export default{
    props:["reply_info"],
    data:function () {
      return{
          from_userid:this.reply_info.from_userid,
          to_userid:this.reply_info.to_userid,
          from_username:"",
          to_username:""
      }
    },
    mounted:function () {
        console.log(this.from_userid+":"+this.to_userid);
        var _this=this;
      Axios.get("http://localhost:3000/select_name_by_id",{
        params:{
          from_id:this.from_userid,
          to_id:this.to_userid
        }
      }).then(function (res) {
        _this.from_username=JSON.parse(res.data).from_name.name;
        _this.to_username=JSON.parse(res.data).to_name.name;
      });

    },
  methods:{
    show_reply_box:function () {
      var obj={
        reply_id:this.reply_info.reply_id,
        to_id:this.from_userid
      };
      this.$emit("show_reply_box",obj);

    }
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

</style>
