
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComp from './components/page/HomeComp';
import AboutComp from './components/page/AboutComp';
import BlogComp from './components/page/BlogComp';
import ContactsComp from './components/page/ContactsComp';
import PostDetail from './components/page/PostDetail';





const router = new VueRouter({
    mode:'history',
    linkExactActiveClass: 'active',
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeComp,
        },
        {
            path: '/chi-siamo',
            name: 'About',
            component: AboutComp,
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogComp,
        },
        {
            path: '/contatti',
            name: 'contacts',
            component: ContactsComp,
        },
        {
            path: '/dettaglio-post/:slug',
            name: 'detail',
            component: PostDetail,
        },
    ]
})


export default router;
