<template>
  <div class="box">
    <div class="container">

        <h1>{{post.title}}</h1>
        <h3>Categoria : {{post.category.name}}</h3>
        <p>{{post.content}}</p>

        <!-- <div>
            <span v-for="tag in post.tags" :key="tag.id">
                {{tag.name}}
            </span>
        </div> -->
        <a href="http://127.0.0.1:8000/blog"> Return</a>
    </div>

  </div>

</template>

<script>


export default {
    name: 'PostDetail',
    data(){
        return{
            post: {
                title: '',
                contetn:'',
                category:'',
                tags:[]
            },
            apiUrl: '/api/posts',
        }
    },
    mounted(){
        this.getApi()
    },

    methods:{
        getApi(){
            //console.log(this.$route.params.slug);
           axios.get(this.apiUrl + '/' + this.$route.params.slug)
           .then(r =>{
                this.post= r.data
           })
        }
    }
}
</script>

<style lang="scss" scoped>

    h3{
        color: white;
    }
    p{
        background-color: rgba(0,0,0,0.5);
        color: rgb(255, 255, 255);
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    a{

        text-decoration: none;
        color: white;
        padding: 10px;
        background-color: rgb(4, 175, 13);
        border-radius: 5px;
    }
</style>
