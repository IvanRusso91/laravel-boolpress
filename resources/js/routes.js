
import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComp from 'resources/js/components/page/HomeComp';
import AboutComp from 'resources/js/components/page/AboutComp';
import BlogComp from 'resources/js/components/page/BlogComp';
import ContactsComp from 'resources/js/components/page/ContactsComp'




const router = new VueRouter({
    mode:'hystory',

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
            component: contactsComp,
        },
    ]
})


export default router;
