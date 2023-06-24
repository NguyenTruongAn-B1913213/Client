<template>
    <div class="container-fluid">
    <form>
      <div class="form-row">
                <div class="form-group col-sm-6">
                    <label for="inputHo">Họ*</label>
                    <input type="text" class="form-control" id="inputEmail4" required >
                </div>
                <div class="form-group col-sm-6">
                    <label for="inputTen">Tên*</label>
                    <input type="text" class="form-control" id="inputPassword4" required >
                </div>
                <div class="form-group col-sm-6">
                    <label for="inputSDT">Số Điện Thoại*</label>
                    <input type="text" class="form-control" id="inputPassword4" required>
                </div>
                <div class="form-group col-sm-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" required>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Địa Chỉ*</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required >
            </div>
            <div class="form-row">
                <div class="form-group col-sm-12">
                <label for="inputPayMethod">Phương Thức Thanh Toán</label>
                <br>
                <select name="pay-method" id="payment">
                    <option value="1">Thanh Toán Khi Nhận Hàng</option>
                    <option value="2">Thanh Toán Trực Tuyến</option>
                </select>
                </div>
            </div>
    </form>
    <button class="btn btn-success sb-mit-method-paying">Xác Nhận Thanh Toán</button>
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


export default {
    components: {
    },
    props: {
        cartList: {
            type: Array
        }
    },
    name: 'payment-page',
    
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