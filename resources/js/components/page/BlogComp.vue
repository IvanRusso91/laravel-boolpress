<template>
    <div class="box">
        <h1>Blog</h1>
        <div class="container">
            <PostItem
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />

            <button @click="getApi(pagination.current -1)"
            :disabled="pagination.current === 1"> indietro </button>

            <button
            v-for="i in pagination.last" :key="i"
            @click="getApi(i)"
            :disabled="pagination.current === i">
            {{ i }}
            </button>

            <button @click="getApi(pagination.current +1)"
            :disabled="pagination.current === pagination.last"> avanti </button>
        </div>
    </div>
</template>

<script>

import PostItem from '../PostItem'

export default {
    name:'BlogComp',
    components:{
        PostItem
    },
    data(){
        return{
            apiUrl:'/api/posts',
            posts:null,
            pagination:{
                current:null,
                last:null,
            }
        }
    },

    mounted(){
        this.getApi(1);
    },

    methods:{
        getApi(page){
            axios.get(this.apiUrl + "?page=" + page)
            .then(r=>{
                this.posts= r.data.data;
                this.pagination={
                    current: r.data.current_page,
                    last: r.data.last_page,
                }
            });
        }
    }



}
</script>

<style lang="scss" scoped>
    .box{
        height: calc(100vh - 100px);
        background-color: rgb(0, 101, 184);
        h1{
            color:white ;
            text-align: center;
            padding: 50px 0;
        }
        .container{
            width: 80%;
            margin: auto;
            margin-bottom: 30px;
        }
    }
</style>
