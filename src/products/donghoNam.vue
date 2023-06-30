<template>
    <div class="donghoNam-page">
        <!-- <Header style="background-color:black" class="pb-2" /> -->
            <div class="container-fluid donghoNam-main">
                <h3>TRANG CHỦ / <span>ĐỒNG HỒ NAM</span></h3>
                <div class="row  donghoNam-List">
                    <div class="col-sm-3 sidebar">
                        <aside id="nav_menu-2" class="widget widget_nav_menu">
                            <span class="widget-title shop-sidebar">DANH MỤC SẢN PHẨM</span>
                            <div class="line-height"></div>
                            <div class="nav_menu-3">
                                <ul class="sub-menu">
                                    <li><a href="./donghoNam">Đồng Hồ Nam</a></li>
                                    <li><a href="./donghoNu">Đồng Hồ Nữ</a></li>
                                    <li><a href="#">Đồng Hồ Đôi</a></li>
                                    <li>Phụ Kiện
                                        <select name="phukien" id="phukien">
                                            <option value="1">Dây Da Hirsch</option>
                                            <option value="2">Dây Da ZRC</option>
                                            <option value="3">Hộp Đồng Hồ</option>
                                            <option value="4">Dịch Vụ In Logo Lên Đồng Hồ</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <aside id="nav_menu-2" class="widget widget_nav_menu">
                            <span class="widget-title shop-sidebar">THƯƠNG HIỆU</span>
                            <div class="line-height"></div>
                            <div class="nav_menu-3">
                                <ul class="sub-menu">
                                    <li><a href="">Casio</a></li>
                                    <li><a href="#">Citizen</a></li>
                                    <li><a href="#">G-Shock & Baby-G</a></li>
                                    <li><a href="">Louis Erard</a></li>
                                    <li><a href="">Olym Pianus - Olympia Star</a></li>
                                    <li><a href="">Orient</a></li>
                                </ul>
                            </div>
                        </aside>

                        <aside id="nav_menu-2" class="widget widget_nav_menu">
                            <span class="widget-title shop-sidebar">CHẤT LIỆU DÂY</span>
                            <div class="line-height"></div>
                            <div class="nav_menu-3">
                                <ul class="sub-menu">
                                    <li><a href="#">Dây Da</a></li>
                                    <li><a href="">Dây Kim Loại</a></li>
                                    <li><a href="#">Dây Nhựa / Cao Su</a></li>
                                    <li><a href="">Dây Vải</a></li>
                                </ul>
                            </div>
                        </aside>

                        <aside id="nav_menu-2" class="widget widget_nav_menu">
                            <span class="widget-title shop-sidebar">GIỚI TÍNH</span>
                            <div class="line-height"></div>
                            <div class="nav_menu-3">
                                <ul class="sub-menu">
                                    <li><router-link to="/donghoNam">Nam</router-link></li>
                                    <li><router-link to="/donghoNu">Nữ</router-link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-4" v-for="(product, index) in products" :key="index">
                                <!-- <a href="/Detail-Product"> -->
                                <router-link to="/Detail-Product">
                                <div class="list-item-donghoNam"  >
                                    <div class="list-item-watch-donghoNam" >
                                            <productItem
                                                    :product="product"
                                            />
                                    </div>
                                </div>
                            </router-link>
                            <!-- </a> -->
                            </div>
                        </div>
                        <nav aria-label="Page navigation example" id="pagination">
                                <ul class="pagination">
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous" @click="previousPage">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    </li>
                                    <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === page }">
                                        <a class="page-link" href="#" @click="changePage(pageNumber)">{{ pageNumber }}</a></li>
                                    <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
</template>

<script>
// import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import productItem from '../products/productItem.vue'
// import axios from 'axios';
// import Cookies from 'js-cookie';
import img1 from '../img/list-watch/watch-1.jpg'
import img2 from '../img/list-watch/watch-2.jpg'
// import img3 from '../img/list-watch/watch-3.jpg'
export default {
    name: 'donghoNam-page',
    data() {
        return {
            cartList: [],
            products:[
                {
                id: 1,
                nameType: "Đồng Hồ Nam",
                img: img1,
                nameItem: "ĐỒNG HỒ NAM CAO CẤP CASIO MTP-1374L-1AVDF NAM PIN DÂY DA",
                price: '2000000',
                tonkho:'35',
                pricediscount: '1800000',
                discount: '-10%',
                amount:1
            },
            {
                id: 2,
                nameType: "Đồng Hồ Nam",
                img: img2,
                nameItem: "ĐỒNG HỒ NAM TRUNG BÌNH CASIO MTP-1374L-1AVDF NAM PIN DÂY DA",
                price: '2.000.000',
                tonkho: '15',
                pricediscount: '1600000',
                discount: '-20%',
                amount:1
                },
            ],
            page: 1,
            totalPages: 0,
            // [ {
            //     id: 1,
            //     nameType: "Đồng Hồ Nam",
            //     img: img1,
            //     nameItem: "ĐỒNG HỒ NAM CAO CẤP CASIO MTP-1374L-1AVDF NAM PIN DÂY DA",
            //     price: '2000000',
            //     tonkho:'35',
            //     pricediscount: '1800000',
            //     discount: '-10%',
            //     amount:1
            // },
            // {
            //     id: 2,
            //     nameType: "Đồng Hồ Nam",
            //     img: img2,
            //     nameItem: "ĐỒNG HỒ NAM TRUNG BÌNH CASIO MTP-1374L-1AVDF NAM PIN DÂY DA",
            //     price: '2.000.000',
            //     tonkho: '15',
            //     pricediscount: '1600000',
            //     discount: '-20%',
            //     amount:1
            //     },
            
        }

    },
    components:{
        // Header,
        Footer,
        productItem
    },
//     mounted() {
//     this.fetchData();
//   },
    // methods: {
    //     async fetchData(){
    //         try {
    //             const token = Cookies.get("token");
    //             const headers = {
    //                 Authorization: `Bearer ${token}`,
    //             };
    //             console.log(headers)
    //          // const configAxios = {
    //             //     method: "GET",
    //             //     url
    //             // }     // const res = await axios.get(`http://localhost:3000/api?page=${this.page}`,{headers})
              
    //             const res = await axios({
    //                 method: "GET",
    //                 url: `http://localhost:3000/api?page=${this.page}`,
    //                 headers
    //             })

    //             this.products = res.data.products
    //             console.log(this.products)
    //             this.totalPages = res.data.totalPages
    //         } catch (error) {
    //             console.log(error)
    //         }
            
    //     },
    //     previousPage() {
    //         if (this.page > 1) {
    //             this.page--;
    //             this.fetchData();
    //         }
    //     }, 
    //     nextPage() {
    //         if (this.page < this.totalPages) {
    //             this.page++;
    //             this.fetchData();
    //         }
    //     },
    //     changePage(pageNumber){
    //         if(pageNumber != this.page ){
    //             this.page = pageNumber
    //             this.fetchData();
    //         }
    //     }
    // },
  
}
</script>

<style>
.donghoNam-List{
    margin-top: 80px;
}
.discount{
    position: relative;
    width: 50px;
    top: 20px;
    left: -10px;
    z-index: 3;
    height: 50px;
    background-color: rgb(239, 179, 68);
    border-radius: 50%;
}
.discount span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: white;
    font-size: 18px;
    font-weight: 500;
}

.donghoNam-main h3{
    font-size: 15px;
    padding: 10px 0;
    color: rgba(102,102,102,0.7);
}
.donghoNam-main span{
    color: black;
}
.widget-title{
    font-weight: 500;
    font-size: 22px;
}
.line-height{
    width: 100%;
    border-bottom: 4px solid orange ;
    padding: 5px 0;
}
.row{
    padding: 0;
}
.sub-menu{
    width: 100%;
    /* height: 350px; */
    margin-top:20px ;
    border: 1px solid black;
    padding: 10px;
}
.sub-menu a{
    display: inline-block;
    text-decoration: none;
    color: black;
    font-size: 15px;
    font-weight: 450;
    padding: 5px 0;
    
}
.sub-menu a:hover{
    color: orange;
}
.sub-menu li {
    list-style: none;
    margin-top: 20px;
    border-bottom: 1px solid black ;
    
}
.sub-menu li:last-of-type{
    border-bottom: none ; 
}
/* lisst donghoNam */
.list-item-watch-donghoNam{
  transition:  all .5s ease-in;
}
.list-item-watch-donghoNam a {
  text-decoration: none;
}
.list-item-watch-donghoNam img {
  width: 100%;
  transition:  all .5s ease-in;
  margin: 0 auto;
}
.list-item-watch-donghoNam i{
  font-size: 30px;
  color: #000;
  margin-left: 30px;
  transition: .5s ease;
  opacity: 0;
}
.list-item-watch-donghoNam:hover{
  border: 1px dashed black ;
}
.list-item-watch-donghoNam:hover i{
  opacity: 1;
  transform: translateY(-20px);
}
.list-item-watch-donghoNam img:hover{
  transform: scale(.9);
}
.watch-detail-donghoNam{
  color: #000;
  text-align: center;
  font-family: 'Roboto Serif', serif;
}
.watch-detail-donghoNam h5:hover{
  color: orange;
}
.watch-detail-donghoNam h6:last-child{
  font-size: 15px;
}
.watch-detail-donghoNam span{
  text-decoration: line-through;
  opacity: .4;
}
#pagination{
    margin-top: 20px;
    margin-left: 15px;
}



</style>