<template>
    <div class="box">
        <h1>Blog</h1>
        <div class="container">
            <PostItem
            v-for="post in posts"
            :key="post.id"
            :post="post"
            />
        </div>
        <div class="box-btn">
            <button class="btn btn-left" @click="getApi(pagination.current -1)"
            :disabled="pagination.current === 1"> indietro </button>

            <button class="btn "
            v-for="i in pagination.last" :key="i"
            @click="getApi(i)"
            :disabled="pagination.current === i">
            {{ i }}
            </button>

            <button class="btn btn-right" @click="getApi(pagination.current +1)"
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
            this.pages= null;
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
        overflow: hidden;
        &:hover{
                overflow: auto;
                &::-webkit-scrollbar {
                    width: 5px;
                }
                &::-webkit-scrollbar-track {
                    border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb {
                    background: rgb(32, 160, 0);
                    border-radius: 10px;
                }
        }
        h1{
            color:white ;
            text-align: center;
            padding: 50px 0;
        }
        .container{
            display: flex;
            flex-wrap: wrap;
            width: 80%;
            margin: auto;
            margin-bottom: 30px;


        }

        .box-btn{
            width: 80%;
            margin: auto;
            display: flex;
            justify-content: center;
            .btn{
                padding: 15px;
                background-color: rgb(4, 175, 13);
                border-radius: 5px;
                color: white;
            }
            .btn-left,
            .btn-right{
                margin: 0 10px;
            }
        }
    }
</style>
