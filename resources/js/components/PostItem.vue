<template>
    <div class="box-card" >
        <div class="card">
            <h3>{{post.title}}</h3>
            <p>{{post.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PostItem',
    props:{
        post:Object,
    }
}
</script>

<style lang="scss" scoped>


.box-card{

    .card{
        width: 200px;
        height: 300px;
        background-color: white;
        border-radius: 20px;
        text-align: center;
        padding: 10px;
        margin: 35px;
        h3{
            margin-bottom: 20px;
        }
    }
}

</style>
