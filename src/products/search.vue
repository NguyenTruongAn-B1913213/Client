<template>
    <div class="donghoNam-page">
            <div class="container-fluid donghoNam-main">
                <h3>TRANG CHỦ / <span>ĐỒNG HỒ NAM</span></h3>
                <div class="row">
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
                            <div class="col-sm-4" v-for="(product, index) in seachResult" :key="index">
                                <div class="list-item-donghoNam"  >
                                    <div class="list-item-watch-donghoNam" >
                                            <productItem
                                                    :product="product"
                                            />
                                    </div>
                                </div>
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
            <Footer/>
            </div>
</template>

<script>
import Footer from '../layout/Footer.vue'
import productItem from '../products/productItem.vue'
import axios from 'axios';
export default {
    name: 'donghoNam-page',
    data() {
        return {
            seachResult: [],
            page: 1,
            totalPages: 0,
            
            
        }
    },
    components:{
        // Header,
        Footer,
        productItem
    },
    watch:{
    '$route.query.searchKey': {
        immediate: true,
        async handler(newValue) {
        if (newValue) {
            this.searchKey = newValue;
            console.log(this.searchKey)
            this.fetchSearchResult()
            // Xử lý kết quả tìm kiếm và hiển thị nó trên giao diện
        }
        }
    }
    },
    methods: {
         async fetchSearchResult() {
            const res = await axios.get(`http://localhost:3000/api/search?page=${this.page}`, {
            params: { searchKey: this.searchKey },
            });
            this.seachResult = res.data.search;
            console.log(this.seachResult);
            this.totalPages = res.data.totalPages;
         },
        previousPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchSearchResult()
            }
        }, 
        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
                this.fetchSearchResult()
            }
        },
        changePage(pageNumber){
            if(pageNumber != this.page ){
                this.page = pageNumber
                this.fetchSearchResult()
            }
        }
    },
  
}
</script>

<style>
.row{
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