<template>
    <div>
        <HeaderComp />

        <main>

        </main>
        <!-- <div class="box-x">

             <<h1>i miei post!</h1>

            <div class="container-r">
                <div class="box" v-for="post in posts" :key="post.id">
                    <h3>{{post.id}}. {{post.title}}</h3>
                    <p>{{post.content}}</p>
                </div>
            </div> -->

        <!-- </div> -->

        <FooterComp />
        <router-view></router-view>
    </div>

</template>

<script>

import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp'

export default {
    name: 'App',
    components:{
        HeaderComp,
        FooterComp,

    },

    data(){
        return{
            apiUrl: 'http://127.0.0.1:8000/api/posts',
            posts: null,
        }
    },

    mounted(){
        this.getApi();
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl).then(r =>{
                this.posts = r.data;
            })
        }
    },
}
</script>

<style>

</style>
