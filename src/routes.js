import { createWebHistory, createRouter } from "vue-router"
//import Vue from "vue";
import Home from './components/Home.vue'
//import About from './components/About.vue'
//import Profile from './components/Profile.vue'
//import Login from './components/Login.vue'
//import Signup from './components/Signup.vue'
import Category from './components/Category.vue'
import Post from './components/Post.vue'
//Vue.config.productionTip = false;
const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    /*
    {
        name:'About',
        path:'/about',
        component:About
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Signup',
        path:'/signup',
        component:Signup
    },
    {
        name:'Profile',
        path:'/profile/:name',
        component:Profile
    },*/
    {
        name:'Post',
        path:'/post/:url',
        component:Post
    },
    {
        name:'Category',
        path:'/category/:name/:content',
        component:Category
    },
    
];

const router=createRouter({
    history:createWebHistory(),
    mode: 'history',
    routes
});

export default router;