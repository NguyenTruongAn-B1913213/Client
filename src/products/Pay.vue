<template>
    <div class="container-fluid">
    <form>
      <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="inputHo">Họ Và Tên*</label>
                    <input type="text" v-model="customerName" class="form-control" id="inputEmail4" required >
                </div>
                <div class="form-group col-sm-6">
                    <label for="inputSDT">Số Điện Thoại*</label>
                    <input type="text" v-model="customerPhone" class="form-control" id="inputPassword4" required>
                </div>
                <div class="form-group col-sm-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" v-model="customerEmail" class="form-control" id="inputEmail4" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Địa Chỉ*</label>
                <input type="text" class="form-control" v-model="customerAddress" id="inputAddress" placeholder="1234 Main St" required >
            </div>
            <div class="form-row">
                <div class="form-group col-sm-12">
                <label for="inputPayMethod">Phương Thức Thanh Toán</label>
                <br>
                <select name="pay-method" id="payment" v-model="selectedPaymentMethod">
                    <option value="1">Thanh Toán Khi Nhận Hàng</option>
                    <option value="2">Thanh Toán Trực Tuyến</option>
                </select>
                </div>
            </div>
    </form>
    <button class="btn btn-success sb-mit-method-paying" @click="payOption">Xác Nhận Thanh Toán</button>
    <!-- <teleport to='#app'>
            <app-modal 
                :isOpen="isOpenStatus"
                :handleCloseModal="handleCloseStatusBuy" 
            >
            </app-modal>
    </teleport> -->
    </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'payment-page',
    computed:{
        ...mapState({
            cartList: (state) => state.cartList,
            
        }),
        ...mapGetters(['sumMonney']),
    }, 
    data(){
        return {
            selectedPaymentMethod:''
        }
    },
    created(){
        console.log(this.sumMonney)
    },
    methods:{
        payOption(){
            if (this.selectedPaymentMethod === '1') {
                this.confirmPayment()
            }
            else{
                this.confirmPaypal()
            }
        },

        async confirmPayment(){
            try {
            const orderData = {
                hoten: this.customerName,
                sdt : this.customerPhone,
                email : this.customerEmail,
                diachi : this.customerAddress,
                item: this.cartList.map(item => ({
                    product : item._id,
                    soluong: item.amount
                })),
                totalPrice: this.sumMonney
            }
            const res = await axios.post("http://localhost:3000/api/delivery",orderData)
            if(res.status === 200){
                alert("Cảm ơn bạn đã đặt")
                localStorage.removeItem("cartList")
            }else{
                alert("Cảm ơn bạn đã đặt")
                // router.push("/")
            }
                
            } catch (error) {
                console.log(error   )
                
            }
        },
        async confirmPaypal(){
            try {
            const orderData = {
                totalPrice: this.sumMonney
            }
            const res = await axios.post("http://localhost:3000/api/create-payment",orderData)
            console.log(res.data)
            window.location.href = res.data.approval_url;
            } catch (error) {
                console.log(error)
                
            }
        }

    }
    
}
</script>

<style>

#payment{
    width: 100%;
    padding: 7px;
    margin-bottom: 10px ;
}
.form-group{
    text-align: left;
    font-weight: 500;
}
.sb-mit-method-paying{
    display: flex;
}

</style>