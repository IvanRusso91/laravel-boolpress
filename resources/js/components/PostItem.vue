<template>
    <div class="box-card" >
        <div class="card">
            <h3>
                <router-link :to="{name:'detail', params:{slug: post.slug}}">{{post.title}}</router-link>
            </h3>
            <i>{{formatData}}</i>
            <p>{{post.content}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name:'PostItem',
    props:{
        post:Object,
    },

    computed:{

        formatData(){
            const d = new Date(this.post.updated_at);
            let day = d.getDate();
            let month = d.getMonth() + 1;
            const year = d.getFullYear();
            if(day < 10 ) day = '0' + day;
            if(month < 10 ) month = '0' + month;

            return `${day}/${month}/${year}`;
        }
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
        p{
            margin-top: 20px;
        }
    }
}

</style>
