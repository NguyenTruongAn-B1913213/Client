import { createRouter , createWebHistory } from 'vue-router';
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
import Home from '../page/Home.vue'
import donghoNam from '../products/donghoNam.vue'
import donghoNu from '../products/donghoNu.vue'
import phuKien from '../products/phuKien.vue'
import TinTuc from '../page/TinTuc.vue'
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode';

const routes = [ 
    {
        path: "/Home",
        name:"home",
        component: Home,
        
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/donghoNam",
        component: donghoNam,
        meta: { requiresAuth: true, requiresAdmin: true }, 
    },
    {
        path: "/donghoNu",
        component: donghoNu,
        // meta: { requiresAuth: true }, 
    },
    {
        path: "/phuKien",
        component: phuKien
    },
    {
        path: "/TinTuc",
        component: TinTuc
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from ,next)=>{
    const token = Cookies.get("token")
    if(to.matched.some((record)=> record.meta.requiresAuth)){
        if(!token){
            next("/login")
        }else{
            const decodedToken = jwt_decode(token)
            if(to.matched.some((record)=> record.meta.requiresAdmin && decodedToken.role === 'admin')){
                next()
            }else{
                next("/home");
            }
        }
    }else{
        next();
    }
})

export default router;