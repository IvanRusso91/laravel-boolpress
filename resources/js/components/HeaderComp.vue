<template>
    <header>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name:'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name:'About'}">Chi Siamo</router-link>
                </li>
                <li>
                    <router-link :to="{name:'blog'}">Blog</router-link>
                </li>
                <li>
                    <router-link :to="{name:'contacts'}">Contatti</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>


header{
    background-color: brown;
    height: 50px;
    padding: 20px;

    ul{
        list-style: none;
        text-align: center;

        li{
            display: inline-block;
            a{
                text-decoration: none;
                color: white;
                margin: 0 10px;
                &.active,
                &:hover{
                    text-decoration: underline;
                    color: yellow;
                }
            }
        }
    }
}

</style>
