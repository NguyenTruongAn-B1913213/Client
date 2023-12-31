import { createRouter , createWebHistory } from 'vue-router';
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
import Home from '../page/Home.vue'
import Search from '../products/search.vue'
import donghoNam from '../products/donghoNam.vue'
import donghoDoi from '../products/donghoDoi.vue'
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
import EditProduct from '../admin/manager/editProduct.vue'
// import EditContent from '../admin/manager/edit/EditContent.vue'
import StatusBill from '../admin/manager/status-bill/Status-Produt.vue'
import DetailProduct from '../detail-product/Detail-Product.vue'


import jwt_decode from 'jwt-decode';

const routes = [ 
    {
        path: "/",
        name:"home",
        component: Home,
        
    },
    {
      path: "/search",
      name:"search",
      component: Search,
      
  },
  {
      path: "/Detail-Product/:id",
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
    },
    {
        path: "/donghoNu",
        component: donghoNu,
        
    },
    {
        path: "/phuKien",
        component: phuKien,
        // meta: { }, 
    },
    {
      path: "/donghoDoi",
      component: donghoDoi,
      // meta: { }, 
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
        component: admin,
        meta: { requiresAuth: true,requiresAdmin: true}

    },
    {
        path: '/admin/manager/AddProduct',
        name: "AddProduct",
        component: AddProduct,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
    {
        path: '/admin/manager/AddCatorgory',
        name: "AddCatorgory",
        component: AddCatorgory,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
    {
        path: '/admin/manager/StatusBill',
        name: "StatusBill",
        component: StatusBill,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
    {
        path: '/admin/manager/AddProduct/Overviews',
        name: "Overviews",
        component: Overviews,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
    {
        path: '/admin/manager/AddContentHome/Overviews',
        name: "AddContentHomeOverviews",
        component: OverviewsContent,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
    {
        path: '/admin/manager/Overviews/EditProduct/:id',
        name: "EditProduct",
        component: EditProduct,
        meta: { requiresAuth: true,requiresAdmin: true}
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    const token = Cookies.get("token");
    if (to.meta.requiresAdmin) {
      if (!token) {
        next("/login");
      } else {
        const decodedToken = jwt_decode(token);
        if (decodedToken.role === "admin") {
          next();
        } else {
          next("/");
        }
      }
    } else if (to.meta.requiresAuth) {
      if (!token) {
        next("/login");
      } else {
        next();
      }
    } else {
      next();
    }
  });

export default router;