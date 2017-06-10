<template>

</template>
<script>
  export default{
      mounted:function () {
        var scene_id=this.$route.params.id;
        var value=this.$route.params.value;
        this.$router.push("/reply/"+scene_id+"/"+value);
      }
  }
</script>
<style>

</style>
