<template>
  <div class="cart-shop">
    <div class="container">
      <div class="row layout-payment">
        <div class="col-7">
          <form class="woocommerce-cart-form">
            <div class="cart-wrapper sm-touch-scroll">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sản Phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Tổng Cộng</th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cart,index) in cartList" :key="index">
                    <th scope="row">
                      <img v-bind:src="cart.hinhanh" class="img-cart-detail" alt="" />
                    </th>
                    <td>{{ cart.gia}}</td>
                    <td>
                      <span>
                        <i class="fa fa-minus amount" @click="handleUpOrDownAmount(false ,cart)"></i>
                      </span>
                      <span class="mx-2">{{ cart.amount }}</span>
                      <span>
                        <i class="fa fa-plus amount" @click="handleUpOrDownAmount(true ,cart)" ></i>
                      </span>
                    </td>
                    <td>{{ cart.amount * cart.gia }}</td>
                    <td><i @click="handleDelete(cart)" class="fa fa-times"></i></td>
                  </tr>
                </tbody>
              </table>

              <div class="button-cart-shopping">
                <span>
                  <button>
                    <i class="fa fa-arrow-left"></i>Tiếp Tục Xem Sản Phẩm
                  </button>
                </span>
                <span>
                  <button>Cập Nhật Giỏ Hàng</button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class="col-5">
          <div class="cart_totals">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tổng Số Lượng</th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr>
                  <th>Tổng Cộng</th>
                  <th>{{ sumMonney }} Vnđ</th>
                </tr>
                <tr>
                  <th>Giao Hàng 1</th>
                  <th>Giao Hàng Miễn Phí</th>
                </tr>
                <tr>
                  <th>Tổng Cộng</th>
                  <th>{{ sumMonney }} Vnđ</th>
                </tr>
              </tbody>
            </table>
            <div>
              <button class="btn btn-success make-payment" @click="handleOpenModalBuy">
                Tiến Hành Thanh Toán
              </button>
            </div>

            <table class="table">
              <tfoot>
                <tr>
                  <th>
                    <i class="fa fa-tag"></i>
                    Mã Ưu Đãi
                  </th>
                </tr>
                <tr>
                  <th>
                    <input
                      type="text"
                      placeholder="Nhập Mã Ưu Đãi"
                      class="input-code"
                    />
                  </th>
                </tr>
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
            <div>
              <button class="btn make-code">Áp Dụng Mã Ưu Đãi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Payment from '../products/Pay.vue'
export default {
  name: "gio-hang",
  data() {
        return {
            isOpenModalBuy: false,
        };
    },
    components: { 
      Payment,
    }, 
    computed: {
        ...mapState({
            cartList: (state) => state.cartList,
            
        }),
        ...mapGetters(['sumMonney']),
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

<style>
.fa-times{
  cursor: pointer;
}
.table {
  text-align: left;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
}
.layout-payment {
  margin-top: 0;
  padding: 120px 0;
}
.img-cart-detail {
  width: 100px;
}
.table-body td {
  line-height: 80px;
}
.button-cart-shopping span {
  margin-left: 20px;
}
.button-cart-shopping span:first-of-type button {
  text-transform: uppercase;
  padding: 3px 30px;
  background: #fff;
  font-weight: 500;
  transition: 0.5s ease;
}
.button-cart-shopping span:first-of-type button:hover {
  background: black;
  color: white;
}
.button-cart-shopping span:first-of-type button i {
  margin-right: 10px;
}
.button-cart-shopping span:last-of-type button {
  padding: 3px 30px;
  background: rgb(98, 95, 95);
  text-transform: uppercase;
  font-weight: 500;
  color: white;
}
.make-payment {
  width: 100%;
  padding: 12px 0;
  font-size: 17px;
}
.make-code {
  width: 100%;
  background: #797878;
  color: white;
  padding: 12px 0;
}
.input-code {
  width: 100%;
  padding: 6px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.table-body tr th {
  font-weight: 470;
}
.amount{
  cursor: pointer;
}
</style>
