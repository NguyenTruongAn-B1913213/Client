import donghoNam from '../products/donghoNam.vue'
import donghoNu from '../products/donghoNu.vue'
import phuKien from '../products/phuKien.vue'


const routes = [
    {
        path: "/donghoNam",
        component: donghoNam
    },
    {
        path: "/donghoNu",
        component: donghoNu
    },
    {
        path: "/phuKien",
        component: phuKien
    }
];
export default routes;
