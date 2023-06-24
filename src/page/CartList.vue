<template>
    <div class="container-fluid">
    <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Số Lượng Trong Kho</th>
                <th>Số Lượng</th>
                <th>Thành Tiền</th>
                <th>Hành Động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart,index) in cartList" :key="index" class="nameItem">
                <td scope="row">{{ index + 1 }}</td>
                <td >{{ cart.nameItem }}</td>
                <td>{{ cart.pricediscount }} VND</td>
                <td>{{ cart.tonkho }}</td>
                <td>
                        <button class="btn btn-success icon-up-down" @click="handleUpOrDownAmount(true,cart)">
                            <i class="fa fa-angle-up"></i>
                        </button>
                    <span class="mx-2">{{ cart.amount }}</span>
                        <button class="btn btn-success icon-up-down" @click="handleUpOrDownAmount(false, cart)">
                                <i class="fa fa-angle-down"></i>
                        </button>
                </td>
                <td>{{ cart.amount * cart.pricediscount }} VND</td>
                <td>
                    <button class="btn btn-danger" @click="handleDelete(cart)" >
                        <i class="fa fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </tbody>
        <tfoot>
          <th scope="row">Tổng Tiền</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {{ sumMonney }} VND 
          </td>
          <td>
            <button class="btn btn-success" @click="handleOpenModalBuy">Thanh Toán</button>
          </td>
        </tfoot>
        
        <teleport to='#app'>
                <app-modal 
                    :isOpen="isOpenModalBuy"
                    :handleCloseModal="handleCloseModalBuy" 
                >
                <Payment />
                </app-modal>
        </teleport>
    </table>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Payment from '../products/Pay.vue'
export default {
    name : "card-page",
    data() {
        return {
            isOpenModalBuy: false,
        };
    },
    components: { 
        Payment,
    }, 
    // props: {
    //     cartList: {
    //         type: Array,
    //     }
    // },
    computed: {
        ...mapState({
            cartList: (state) => state.cartList,
            
        }),
        ...mapGetters(['sumMonney'])
        // sumMonney() {

        //     // return this.cartList.reduce((sum , cart) => sum += cart.amount * cart.pricediscount, 0)
        // },
    },
    created(){
        const cartList = localStorage.getItem('cartList');
        if(cartList){
            this.$store.commit("setCartList",JSON.parse(cartList))
        }
    },
    methods: {
        handleDelete(cart) {
            this.$store.commit("deleteCart",cart)
            
        },
        handleUpOrDownAmount(increase ,cart) {
            if(increase){
                this.$store.commit("increaseAmount", cart);
            }else {
                this.$store.commit("decreaseAmount", cart);
            }
            
        },
        handleOpenModalBuy() {
            this.isOpenModalBuy = true;
        },
        handleCloseModalBuy() {
            this.isOpenModalBuy = false;
        }
    },
    
}

</script>

<style scoped>
.table{
    width: 100%;
}
.nameItem{
    font-size: 14px;
}
@media screen and (max-width: 575.99px) {
    .table thead{
        font-size: 10px;
    }
    .table tbody{
        font-size: 10px;
    }
     .table tfoot{
        font-size: 10px;
    }
}
</style>
