<template>
  <div class="index">
    <div class="sex">
      <div class="row" @click="man">男</div>
      <div class="row" @click="woman">女</div>
    </div>
  </div>
</template>
<script>
  export default{
      methods:{
          man:function () {
            this.$emit("change_sex","男");
          },
          woman:function () {
            this.$emit("change_sex","女");
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
