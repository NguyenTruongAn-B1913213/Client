import { createRouter , createWebHistory } from 'vue-router';
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
import Home from '../page/Home.vue'
import donghoNam from '../products/donghoNam.vue'
import donghoNu from '../products/donghoNu.vue'
import phuKien from '../products/phuKien.vue'
import TinTuc from '../page/TinTuc.vue'
import giohang from '../products/cart.vue'
import Cookies from 'js-cookie'
import admin from '../admin/manager/Admin.vue'
import AddProduct from '../admin/manager/AddProduct.vue'
import AddCatorgory from '../admin/manager/AddCatorgory.vue'
import Overviews from '../admin/manager/detail/AddProductOverviews.vue'
import OverviewsContent from '../admin/manager/detail/AddContentHomeOverviews.vue'
import EditProduct from '../admin/manager/edit/EditProduct.vue'
// import EditContent from '../admin/manager/edit/EditContent.vue'
import StatusBill from '../admin/manager/status-bill/Status-Produt.vue'
import DetailProduct from '../detail-product/Detail-Product.vue'


import jwt_decode from 'jwt-decode';

const routes = [ 
    {
        path: "/Home",
        name:"home",
        component: Home,
        
    },
    {
        path: "/Detail-Product",
        name:"DetailProduct",
        component: DetailProduct,
        
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
        // meta: { requiresAuth: true, requiresAdmin: true }, 
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
    },
    {
        path: "/cart",
        component: giohang
    },
    {
        path: '/admin/manager',
        name: "admin",
        component: admin
    },
    {
        path: '/admin/manager/AddProduct',
        name: "AddProduct",
        component: AddProduct
    },
    {
        path: '/admin/manager/AddCatorgory',
        name: "AddCatorgory",
        component: AddCatorgory
    },
    {
        path: '/admin/manager/StatusBill',
        name: "StatusBill",
        component: StatusBill
    },
    {
        path: '/admin/manager/AddProduct/Overviews',
        name: "Overviews",
        component: Overviews
    },
    {
        path: '/admin/manager/AddContentHome/Overviews',
        name: "AddContentHomeOverviews",
        component: OverviewsContent
    },
    {
        path: '/admin/manager/AddProduct/Overviews/EditProduct',
        name: "EditProduct",
        component: EditProduct
    },
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