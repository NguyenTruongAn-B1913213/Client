<template>
    <div class="login-page">
      <div class=" login-main">
        <div class="container-login">
            <div class="login-form">
                <div v-if="!token"  class="box login">
                    <h2>LoGin</h2>
                    <form >
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" v-model="email" class="form-control" placeholder="Enter email" id="email">
                            </div>
                            <div class="form-group">
                                <label for="pwd">Mật Khẩu:</label>
                                <input type="password" v-model="password" class="form-control" placeholder="Enter password" id="pwd">
                            </div>
                            <div class="form-group form-check">
                                <label class="form-check-label">
                                <input class="form-check-input" type="checkbox"> Lưu Tài Khoản
                                </label>
                            </div>
                            <button type="submit" @click="login"  class="btn submitLogin">Đăng Nhập </button>
                            <router-link to="/Register" type="submit" class="btn submitLogin">Đăng ký</router-link>
                            <div class="icon-social">
                                <button class="facebook-button" @click="loginFacebook">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Facebook" class="facebook-icon">
                                </button>
                                <button class="google-button" @click="loginGoogle">
                                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" class="facebook-icon">
                                </button>

                            </div>
                    </form>
                    
                </div>
                <div v-else>
                    <h1>Bạn đã đăng nhập</h1>
                    <button type="submit" @click="back" class="btn submitLogin">Trở lại</button>
                </div>
                
            </div> 
            <div class="FormBox"></div>
            
        </div>
    </div>
        <Footer />
    </div>
</template>

<script>
// import Header from '../layout/Header.vue'
// import Home from '../page/Home.vue'
import Footer from '../layout/Footer.vue'
import Cookies from 'js-cookie'
import axios from 'axios'
import router from '@/router'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBb0Hlr7938oR6j3efPqPIqAoDFDDhA2G4",
  authDomain: "auth-46617.firebaseapp.com",
  projectId: "auth-46617",
  storageBucket: "auth-46617.appspot.com",
  messagingSenderId: "184227684705",
  appId: "1:184227684705:web:b6f39251661be43dd0e520",
  measurementId: "G-2K9PG2ZNSW"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default {
    name : "login-page",
    components:
    {
        // Header,
        Footer
    },
    data(){
        return {
            email: "",
            password: "",
            token : null
        }
    },
    created(){
        this.token = Cookies.get('token');
        console.log(this.token)
    },
    methods:{
        async loginFacebook(e){
            e.preventDefault();
            try {
                
                const provider = new GithubAuthProvider ();
                const result = await signInWithPopup(auth, provider);
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // const user = result.user;
                this.token = token
                const expirationTime = new Date();
                expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
                Cookies.set("token",this.token,{expires: expirationTime});
                // router.push("/donghoNam")
                
            } catch (error) {
                console.log(error)
            }
        },
        async loginGoogle(e){
            e.preventDefault();
            try {
                
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // const user = result.user;
                this.token = token
                const expirationTime = new Date();
                expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
                Cookies.set("token",this.token,{expires: expirationTime});
                // router.push("/donghoNam")
                
            } catch (error) {
                console.log(error)
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
            }
            

        },  
        back(){
            router.push("/home")
        },
        async login(e){
            e.preventDefault();
            try {
                const res = await axios.post("http://localhost:3000/api/user/login",{
                email: this.email,
                password: this.password
                })
                this.token = res.data.token
                console.log(this.token)
                const expirationTime = new Date();
                expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000); // Set expiration time to 3 hours from now
                Cookies.set("token",this.token,{expires: expirationTime});
                alert("Đăng nhập thành công")
                router.push("/admin/manager")
                window.location.reload();
            } catch (error) {
                console.log(error)   
            }
        },
        // async makeAuthenticatedRequest() {
        //     try {
        //     const token = Cookies.get("token");
        //     const headers = {
        //         Authorization: `Bearer ${token}`,
        //     };
        //     const response = await axios.get('/protected', { headers });
        //     console.log(response.data.json)
        //     return response.data.json()

        //     } catch (error) {
        //     console.error(error);
        //     }
        // },

    }
}

</script>

<style>
.login-main{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff ; 
}
.container-login{
    position: relative;
    width: 800px;
    height: 530px;
    margin: 20px;
    margin-top: 130px;
}
.login-form{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 450px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0,0,0, 0.25); 
    display: flex;
    justify-content: right;
    align-items: center;
}
.login-form .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
}
.login-form .box h2 {
    color: orange;
    font-size: 40px;
    font-weight: 500;
}
.FormBox{
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
    transition: 0.5s ease-in-out;
}
.submitLogin{
    margin-top: 10px;
    background-color: orange;
    border: 2px solid orange;
    width: 100%;
    color: white;
    transition: all 0.5s ease-in-out;
}
.submitLogin:hover{
    background-color: black;
    border: 2px solid orange;
    color: white;
}
 .FormBox{
    right: 50%;
}
.icon-social{
    text-align: center;
}
.icon-social img{
  width: 40px;
  height: 100%;
  margin: 20px;
}
.facebook-button{
    border: none ;
    background: white;
}
.google-button{
    border: none ;
    background: white;
}
</style>