<template>
   <div id="header">
      <nav class="navbar navbar-header container-fluid navbar-expand-sm">
              <a href="/"><img src="../img/header/logo-mona-watches-white.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon nav-icon">
                  <i class="fa fa-bars"></i>
                </span>
              </button>
               <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav">
                     <li class="nav-item ">
                       <router-link class="nav-link" to="/">Giới Thiệu</router-link>
                     </li>
                     <!-- <li class="nav-item" v-for="(Category, index) in categorys" :key="index">
                       <router-link to="/" class="nav-link">{{ Category.category }}</router-link>
                     </li> -->
                     <li class="nav-item">
                          <router-link to="/donghoNam" class="nav-link">Đồng Hồ Nam</router-link>
                     </li>
                     <li class="nav-item">
                          <router-link to="/donghoNu" class="nav-link">Đồng Hồ Nữ</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link to="/phuKien" class="nav-link">Phụ Kiện</router-link>
                     </li> 
                       <!-- <li class="nav-item">
                          <router-link to="/TinTuc" class="nav-link">Tin Tức</router-link>
                     </li> -->
                      <li class="nav-item">
                            <router-link class="nav-link" to="./Login">Đăng Nhập</router-link>
                     </li>
                   </ul>
                   <form class="form-inline">
                     <div id="app">
                     <div class="icon">
                        <form class="form" id="icon-search">
                            <button @click="search">
                                <svg width="17" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                            <input class="input" v-model="searchKey" placeholder="Type your text" required="" type="text">
                            <button class="reset" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div class="nav-search" >
                              <ul class="history-search">
                                 <li v-for="history in searchHistory" :key="history">{{ history }}</li>
                              </ul>
                           </div>
                        </form>
                       
                        
                       
                     </div>
                       
                     </div>
                     <div class="icon">
                        <router-link to="/Login"><i class="fa fa-user"></i></router-link>
                        <div class="logout">
                              <ul>
                                 <li>Log-out</li>
                              </ul>
                        </div>
                     </div>
                     <div class="icon">    
                        <i @click="handleOpenModalCartList" class="fa fa-shopping-bag cart-shopping"></i>
                        <!-- <span class="bages bages-light">{{ getCartList }}</span> -->
                        <div class="detail-cart">
                              <router-link to="/cart">
                                 <span>Chi Tiết Giỏ Hàng</span>
                              </router-link>
                        </div>
                     </div>
                   </form>
                 </div>
            </nav>
            <teleport to='#app'>
               <app-modal 
               :isOpen="isOpenModalCartList" 
               :handleCloseModal="handleCloseModalCartList" 
               >
               <section>
                  <cart-list 
                     :cartList="cartList" 
                     @handle-delete-cart="handleDelete" 
                     @handle-up-or-down-amount="handleUpOrDownAmount" />
               </section>
               </app-modal>
            </teleport>
         </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from '../page/CartList.vue'
import AppModal from '../products/AppModal.vue';
import axios from 'axios';
import Cookies from 'js-cookie'

 

export default {
   name:'header-page',
   el: '#app',
   components: {
      AppModal,
      CartList,
   },
   // props: {
   //    cartList: {
   //       type:Array
   //    } 
   // },
    data() {
      return {
         cartList: [], //push dữ liệu vào data cartList
         searchKey: '',
         searchHistory:[],
         categorys: [],
         isHistorySearchVisible: false,
         
       },
      {
         isOpenModalCartList: false,
         
      }
   },
   computed: {
      ...mapGetters(['getCartList'])
      // sumAmountCart() {
      //    return this.cartList.reduce((sum, cart) => (sum += cart.amount),0);
      // }
   },
   created(){
   //   const keyWork = Cookies.get("searchHistory")||[];
   },
   mounted(){
      this.Category()
   },
   methods: {
      async Category(){
      const res = await axios.get("http://localhost:3000/api/danhmuc")
      this.categorys = res.data
      console.log(this.categorys)
      },
      handleOpenModalCartList(){
         this.isOpenModalCartList = true;
      },
      handleCloseModalCartList() {
         this.isOpenModalCartList = false;
      },
      async search(e){
         e.preventDefault()
         try {
            const searchHistory  = Cookies.get('searchHistory');
            if(searchHistory){
               this.searchHistory = JSON.parse(searchHistory)
            }else{
               this.searchHistory = [];
            }

            this.searchHistory.push(this.searchKey);
            console.log(this.searchHistory)
            Cookies.set('searchHistory',JSON.stringify(this.searchHistory),{expires: 30})
            this.$router.push({ name: 'search', query: { searchKey: this.searchKey } });

            
         } catch (error) {
            console.log(error)
            
         }
         
      },
      clearSearchHistory() {
      // Xóa lịch sử tìm kiếm và xóa cookie
      this.searchHistory = [];
      Cookies.remove('searchHistory');
      },
      showHistorySearch() {
         this.isHistorySearchVisible = true;
      },
      hideHistorySearch() {
         this.isHistorySearchVisible = false;
      },
   },
}
</script>

<style>
#header{
   box-sizing: border-box;
}
#navbarNav{
  margin-left: 40px;
}
.navbar{
   position: fixed;
   z-index: 999;
   background-color: black;
   padding: 0;
}
.navbar-nav {
   text-align: center;
   margin: 0 50px;
}
.nav-icon i{
   width: 100%;
   color: aliceblue;
   padding: 5px;
   border: none;
   border-radius:10px;
   text-align: center;
}
.navbar img {
   width: 170px;
   padding: 20px 0;
   margin-left: 170px;
   max-height: 120px;
}
.nav-item .nav-link{
   line-height: 1px;
   color: #fff;
   text-decoration: none;
   font-size:17px ;
   text-transform: uppercase;
   font-weight: bold;
   font-family: 'Roboto', sans-serif;
   transition: all .5s ease;
   margin: 0 2px;
}
.nav-item .nav-link:hover{
   color: orange;
}
.nav-item:not(:last-child){
   border-right:1px solid white ;
}
/* .icon:not(:last-child){
    border-right:1px solid white ;
} */
.icon{
   position: relative;
}
.icon i {
   padding: 0 15px;
   line-height: 1px;
   color: #fff; ;
   font-size: 20px;
}
.icon i:hover{
   color: orange;
}
.fa-shopping-bag{
   cursor: pointer;
}
.bages{
   color: white;
}
@media screen and (max-width: 575.999px) {
   #header{
      box-sizing: border-box;
      padding: 50px 0;
   }
   .navbar-header{
      top: 0;
      position: fixed;
   }
   .navbar-header img {
      margin-left: 20px;
   }
   
   .nav-item .nav-link{
      font-size: 18px;
      line-height: 20px;
   }
   .form-inline{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
   }
   .navbar-search{
      display: flex;
      flex-flow: nowrap;
      width: 350px;
      position: absolute;
      left: 250px;
   }
}


.logout{
   background: #fff;
   position: absolute;
   top: 40px;
   left: -50px;
   width: 100px;
   opacity: 0;
   visibility: hidden;
   transition: .5s ease;
   border: 1px solid black;
}
.logout ul {
   list-style: none;
}
.logout ul li {
   text-align: left;
   margin-top: 10px;
   margin-left: 20px;
}
.icon:hover .logout{
   opacity: 1;
   visibility: visible;
}

/* history-search */
.nav-search {
   background:white;
   position: absolute;
   top: 50px;
   left: 0;
   width: 100%;
   padding: 20px;
   display: none;
}
.nav-search .history-search{
   list-style: none;
   text-transform: uppercase;
}
.history-search li {
   margin-bottom: 10px;
}
.input:focus ~ .nav-search{
   display: block;
}
.detail-cart{
   position: absolute;
   width: 200px;
   text-align: center;
   top:33px;
   left: -40px;
   z-index: 99;
   border: 1px solid black;
   padding: 20px;
   background: #fff;
   opacity: 0;
   visibility: hidden;
   transition:  .4s linear;
}
.detail-cart a{
   text-decoration: none;
}
.detail-cart span {
   background: #E2BA48;
   padding: 10px;
   color: #fff;
   border-radius:10px ;
}
.icon:hover .detail-cart{
   opacity: 1;
   visibility: visible;
}

/* .icon:hover .history-search{
   display: block;
} */


/* From uiverse.io by @satyamchaudharydev */
/* removing default style of button */

.form button {
  border: none;
  background: none;
  color: #8b8ba7;
}
/* styling of whole input container */
.form {
  --timing: 0.3s;
  --width-of-input: 200px;
  --height-of-input: 40px;
  --border-height: 2px;
  --input-bg: #fff;
  --border-color: orange;
  --border-radius: 30px;
  --after-border-radius: 1px;
  position: relative;
  width: var(--width-of-input);
  height: var(--height-of-input);
  display: flex;
  align-items: center;
  padding-inline: 0.8em;
  border-radius: var(--border-radius);
  transition: border-radius 0.5s ease;
  background: var(--input-bg,#fff);
  border: 1px solid black; 
}
/* styling of Input */
.input {
  font-size: 0.9rem;
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
}
/* styling of animated border */
.form:before {
  content: "";
  position: absolute;
  background: var(--border-color);
  transform: scaleX(0);
  transform-origin: center;
  width: 100%;
  height: var(--border-height);
  left: 0;
  bottom: 0;
  border-radius: 1px;
  transition: transform var(--timing) ease;
}
/* Hover on Input */
.form:focus-within {
  border-radius: var(--after-border-radius);
}

input:focus {
  outline: none;
}
/* here is code of animated border */
.form:focus-within:before {
  transform: scale(1);
}
/* styling of close button */
/* == you can click the close button to remove text == */
.reset {
  border: none;
  background: none;
  opacity: 0;
  visibility: hidden;
}
/* close button shown when typing */
input:not(:placeholder-shown) ~ .reset {
  opacity: 1;
  visibility: visible;
}
/* sizing svg icons */
.form svg {
  width: 17px;
  margin-top: 3px;
}
</style>