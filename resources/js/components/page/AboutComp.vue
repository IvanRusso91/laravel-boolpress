<template>
  <div class="box">
    <div class="container">
        <h1>About</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutComp'
}
</script>

<style lang="scss" scoped>

.box{
    height: calc(100vh - 100px);
    background-color: rgb(0, 101, 184);
    .container{
        width: 80%;
        margin: auto;
        h1{
            color:white ;
            text-align: center;
            padding: 50px 0;
        }
    }
}
</style>
