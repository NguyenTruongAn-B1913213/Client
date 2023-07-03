import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';
import router from '../src/router/index';
import AppModal from '../src/products/AppModal.vue'
import Cookies from 'js-cookie';
const store = createStore ({
    state() {
        return {
            cartList: [],

        }
    }, 
    getters:{
        getCartList(state){
            return state.cartList.length;

        },
        sumMonney: state => {
            return state.cartList.reduce((total, cart) => total + cart.amount * cart.gia, 0);
        },
        
    },
    mutations:{
        setCartList(state,cartList){
            state.cartList = cartList;

        },
        addCart(state,payload){
            console.log(payload)
            const existingProduct  = state.cartList.find(cart => cart._id === payload._id);
            if(existingProduct){
                existingProduct.amount +=1
            }else{
                payload.amount = 1;
                state.cartList.push(payload);
                
            }
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
        },
        increaseAmount(state, cart) {
            cart.amount++;
            localStorage.setItem('cartList', JSON.stringify(state.cartList));
          },
        decreaseAmount(state, cart) {
            if (cart.amount > 1) {
              cart.amount--;
              localStorage.setItem('cartList', JSON.stringify(state.cartList));
            }
    
        },
        deleteCart(state, payload){
            state.cartList = state.cartList.filter(cart => cart._id != payload._id);
            localStorage.setItem('cartList', JSON.stringify(state.cartList));

        }
    }

})
const app = createApp(App)
app.config.globalProperties.$cookies = Cookies;
app.use(router);
app.use(store)
app.component("app-modal",AppModal),
app.mount('#app');



