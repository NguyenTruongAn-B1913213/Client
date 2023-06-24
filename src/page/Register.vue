<template>
    <div class="login-page">
      <div class=" register-main">
        <div class="container-register">
            <div class="register-form">
                <div class="box register">
                    <h2>Register</h2>
                    <form action="#">
                            <div class="form-group">
                                <label for="email">Họ Và Tên</label>
                                <input type="text" v-model="name" class="form-control" placeholder="Họ và Tên" id="name">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Email</label>
                                <input type="Email" v-model="email" class="form-control" placeholder="Nhập Email" id="email">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Mật Khẩu:</label>
                                <input type="password" v-model="password" class="form-control" placeholder="Nhập password" id="pwd">
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox"> Lưu Tài Khoản
                                </label>
                            </div>
                           <button class="btn submitRegister" @click="signup"> Xác Nhận</button>
                    </form> 
                </div>
            </div> 
            <div class="FormBox-1"></div>
        </div>
    </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
// import Header from '../layout/Header.vue'
// import Home from '../page/Home.vue'
import Footer from '../layout/Footer.vue'
import router from '@/router';

export default {
    name : "login-page",
    components:
    {
        // Header,
        Footer
    },
    data(){
        return {
            name:"",
            email:"",
            password:"",
            message: ""
        }
    },
    methods:{
        async signup(e){
            e.preventDefault();
            try {
                const res = await axios.post("http://localhost:3000/api/user/register",{
                name: this.name,
                email: this.email,
                password: this.password
                })
                this.message = res.data.message
                alert("Đăng kí thành công");
                router.push("/Login")
            } catch (error) {
                this.message = "Đăng kí không thành công"
                alert("Đăng kí không thành công")
                
            }
            
        }
    }
}

</script>

<style>
.register-main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff ;
}
.container-register{
    position: relative;
    width: 800px;
    height: 530px;
    margin: 20px;
    margin-top: 130px;
}
.register-form{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 450px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0,0,0, 0.3); 
    display: flex;
    justify-content: left;
    align-items: center;
}
.register-form .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
.register-form .box h2 {
    color: orange;
    font-size: 40px;
    font-weight: 500;
}
.FormBox-1{
    position:absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgb(207, 139, 12);
    z-index: 2;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 45px rgba(0,0,0, 0.25);
    left: 50%;
}
.submitRegister{
    background-color: orange;
    border: 2px solid orange;
    width: 100%;
    transition: all 0.5s ease-in-out;
    color: white;
}
.submitRegister:hover{
    background-color: black;
    border: 2px solid orange;
    color: white;
}


</style>