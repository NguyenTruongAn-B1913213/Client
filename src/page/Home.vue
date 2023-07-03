<template>
   
  <div id="home-page">
    <div class="bd-example home">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../img/header/slide1.jpg" class="d-block w-100" alt="slide1">
            <div class="carousel-item-overlay"></div>
          </div>
          <div class="carousel-item">
            <img src="../img/header/slide2.jpg" class="d-block w-100" alt="sldie2">
            <div class="carousel-item-overlay"></div>
          </div>
          <div class="carousel-item">
            <img src="../img/header/slide3.jpg" class="d-block w-100" alt="slide3">
            <div class="carousel-item-overlay"></div>
          </div>
        </div>
      </div>
    </div>
                      <!-- đồng hồ nam -->
      <div class="list-item container">
        <h2 class="list-title">Đồng Hồ Nam</h2>
        <div class="list-item-main">
        <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s" v-for="(product, index) in productNam" :key="index">
          <a href="#">
          <productItem 
            :product= product />
          </a>
        </div>

        <!-- <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s">
           <a href="#"> 
             <productItem 
              :product='{
                hinhanh: "http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-seiko-sgeg99p1-nam-pin-day-da-a-600x600-300x300.jpg",
                nameType: "Đồng Hồ Nam",
                nameItem: "ĐỒNG HỒ LOUIS ERARD 13900AA05.BDC102 NAM PIN DÂY DA",
                price: "20,217,000 ₫",
                pricediscount: "18,195,300 ₫",
                discount: "20%"
              }'
            />
            </a>
          </div> -->
          </div>
      </div>
                <!-- đồng hồ nứ  -->
        <div class="list-item container">
          <h2 class="list-title">Đồng Hồ Nữ</h2>
          <div class="list-item-main">
          <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s" v-for="(product, index) in productNu" :key="index" >
            <a href="#">
               <productItem 
              :product= product
            />
            </a>
          </div>

          <!-- <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s">
             <a href="#"> 
               <productItem 
                  :product='{
                    hinhanh: "http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-candino-c4433_3-nu-pin-day-inox-600x600-300x300.jpg",
                    nameType: "Đồng Hồ Nữ",
                    nameItem: "ĐỒNG HỒ LOUIS ERARD 13900AA05.BDC102 NAM PIN DÂY DA",
                    price: "20,217,000 ₫",
                    pricediscount: "18,195,300 ₫",
                    discount: "-10%"
                  }'
              />
              </a>
            </div> -->
            </div>
        </div>

                <!-- section -->
        <div class="section container-fluid">
          <div class="row">
            <div class="col-sm-6 section-main ">
              <img src="../img/section-img/section1.jpg" alt="">
              <div class="section-title animate__animated animate__backInLeft animate__delay-1s">
                <h2>
                  <strong>Romance <br> in the air</strong>
                </h2>
                <h4>WEAR YOUR STYLE <br> WITH VERVE & ATTITUDE</h4>
                <button class="btn btn-button"><a href="#"> DETAILS</a></button>
              </div>
            </div>
      
             <div class="col-sm-6 section-main">
                <img src="../img/section-img/section2.jpg" alt="">
                 <div class="section-title">
                  <h2>
                    <strong>Romance <br> in the air</strong>
                  </h2>
                  <h4>WEAR YOUR STYLE <br> WITH VERVE & ATTITUDE</h4>
                  <button class="btn btn-button" ><a href="#"> DETAILS</a></button>
                </div>
              </div>
          </div>
        </div>
                          <!-- đồng hồ đôi -->
      <div class="list-item container ">
        <h2 class="list-title mt-5">Đồng Hồ Đôi</h2>
        <div class="list-item-main">
        <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s" v-for="(product, index) in productDoi" :key="index">
          <a href="#">
            <productItem 
              :product= product
            />
          </a>
        </div>
          </div>
      </div>

                                 <!-- phụ kiện -->
      <div class="list-item container">
        <h2 class="list-title mt-5">Phụ Kiện</h2>
        <div class="list-item-main">
        <div class="list-item-watch animate__animated animate__backInLeft animate__delay-1s" v-for="(product, index) in productPhukien" :key="index" >
          <a href="#">
            <productItem 
                :product= product
              />
          </a>
        </div>
        </div>
      </div>

<!-- thông tin hữu ích -->
    <div class="list-item container">
        <h2 class="list-title">Thông Tin Hữu Ích</h2>
        <div class="row">
        <div class="col-sm-4 animate__animated animate__flipInX animate__delay-1s ">
          <a href="#" class="infor">
            <div class="box-img">
              <img src="../img/thongtinhuuich/slide1.jpg" class="w-100 " alt="">
              <div class="box-title">
                <h5>In rutrum tempus purus, ut euismod..</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra [...]</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-sm-4 animate__animated animate__flipInX animate__delay-1s">
          <a href="#" class="infor">
            <div class="box-img">
              <img src="../img/thongtinhuuich/slide2.jpg" class="w-100" alt="">
              <div class="box-title">
                <h5>In rutrum tempus purus, ut euismod...</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra [...]</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-sm-4 animate__animated animate__flipInX animate__delay-1s">
          <a href="#" class="infor">
            <div class="box-img">
              <img src="../img/thongtinhuuich/slide3.jpg" class="w-100" alt="">
              <div class="box-title">
                <h5>In rutrum tempus purus, ut euismod...</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra [...]</p>
              </div>
            </div>
          </a>
        </div>
      </div>
</div>
<Footer />
</div>

</template>

<script>
// import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import productItem from '@/products/productItem.vue';
import axios from 'axios';

export default {
  name: 'Home-page',
  components:{
    Footer,
    productItem
  },
  data(){
    return{
      productNam: [],
      productNu: [],
      productDoi: [],
      productPhukien: [],
    }
  },
  mounted(){
    this.fetchProductNam();
    this.fetchProductNu();
    this.fetchProductDoi();
    this.fetchProductphukien();
  },
  methods:{
    async fetchProductNam(){
      const res = await axios.get("http://localhost:3000/api/phanloai/Nam")
      this.productNam = res.data
    },
    async fetchProductNu(){
      const res = await axios.get("http://localhost:3000/api/phanloai/Nu")
      this.productNu = res.data
    },
    async fetchProductDoi(){
      const res = await axios.get("http://localhost:3000/api/phanloai/Doi")
      this.productDoi = res.data
    },
    async fetchProductphukien(){
      const res = await axios.get("http://localhost:3000/api/phanloai/phukien")
      this.productPhukien = res.data
    }
  }
}
</script>
<style scoped>
#home-page{
  box-sizing: border-box;
}
.home{
  position: relative;
  top: 0;
}
.carousel-item{
  position: relative;
}
.carousel-item img {
  margin-top: 90px;
  width: 100%;
  height: 750px;
}
/* Wactch-List */
.list-title{
  color: #000;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Roboto Serif', serif;
  line-height: 32px;
  margin-bottom: 16px;
  padding-bottom: 25px;
  position: relative;
  margin-top: 30px;
}
.list-title::before{
  content:'';
  border-bottom: 4px double #e4e4e4;
  bottom: 3px;
  left: 0;
  margin: 0 auto;
  right: 0;
  width: 50px;
  z-index: 1;
  position: absolute;
}
.list-item-main{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
  margin-bottom: 10px;
}
.list-item-watch{
  transition:  all .5s ease-in;
}
.list-item-watch a {
  text-decoration: none;
}
.list-item-watch img {
  width: 100%;
  transition:  all .5s ease-in;
  margin: 0 auto;
}
.list-item-watch i{
  font-size: 30px;
  color: #000;
  margin-left: 30px;
  transition: .5s ease;
  opacity: 0;
}
.list-item-watch:hover{
  border: 1px dashed black ;
}
.list-item-watch:hover i{
  opacity: 1;
  transform: translateY(-20px);
}
.list-item-watch img:hover{
  transform: scale(.9);
}
.watch-detail{
  color: #000;
  text-align: center;
  font-family: 'Roboto Serif', serif;
}
.watch-detail h5:hover{
  color: orange;
}
.watch-detail h6:last-child{
  font-size: 15px;
}
.watch-detail span{
  text-decoration: line-through;
  opacity: .4;
}
@media screen and (max-width: 575.999px){
  .carousel-item img{
    position: relative;
    top: -100px;
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  .list-item h2 {
    font-size: 20px;
  }
}
.section-main{
  position: relative;
  overflow: hidden;
  padding: 0;
}
.section-main img{
  width: 100% ;
  height: 400px;
  transition: all .2s ease;
}
.section-main img:hover{
  transform: scale(1.2);
}
.section-title{
  position: absolute;
  top: 0;
  right: 0;
}
.section-title h2,h4{
  color: #fff;
}
/* SECTION */
.section-title h2{
  color: #E2BA48;
}
.section-title{
  padding: 50px;
}
.section-title button{
  border: 1px solid #E2BA48;
  margin-top: 10px;
}
.section-title a{
  color: #E2BA48;
  text-decoration: none;
}
/* thông tin hữu ích  */
.infor{
  color: black;
  text-decoration: none;
}
.box-title h5{
  margin-top: 18px;
  font-size: 16px;
  text-transform: uppercase;
}
.box-title p{
  color: #8f8f8f;
}


</style>
