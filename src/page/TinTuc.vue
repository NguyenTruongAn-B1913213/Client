<template>
    <div class="tintuc-page">
        <div class="container-fluid tintuc-main">
            <h2 class="list-title">Tin Tức</h2>
            <div class="row">
                <div class="col-sm-3">
                    <div class="card text-left">
                        <div class="box-overlay">
                        <p>04<span>Th5</span></p>
                    </div>
                    <img class="card-img-top" src="../img/header/slide3.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Duis luctus elit nisi, et cursus magna pellentesque non.</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus [...]</p>
                    </div>
                    </div>
                 </div>

                 <div class="col-sm-3">
                    <div class="card text-left">
                    <div class="box-overlay">
                        <p>06<span>Th5</span></p>
                    </div>
                    <img class="card-img-top" src="../img/header/slide2.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Aliquam Phasellus tempus ligula id orci finibus feugiat.</h5>
                        <p class="card-text">Donec tempus eu ligula sed blandit. Vivamus vel enim ac quam iaculis rutrum. Sed nisi [...]</p>
                    </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card text-left">
                        <div class="box-overlay">
                        <p>08<span>Th5</span></p>
                    </div>
                    <img class="card-img-top" src="../img/header/slide1.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Mauris tristique pretium tempus. Vestibulum et accumsan magna.</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, massa non viverra consequat, tellus [...]</p>
                    </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <form action="#" class="" >
                        <div class="search-tintuc">
                            <input type="search" id="gsearch" name="gsearch" placeholder=" Tìm Kiếm....">
                            <i class="fa fa-search" id="search"></i>
                         </div>
                    </form>

                    <aside class="content-tintuc">
                        <h2 class="list-title">Bài Viết Mới</h2>
                        <ul>
                            <li>
                                <div class='recent-blog-posts-li'>
                                    <router-link to="#" class="post-new">
                                        <p>Lorem ipsum dolor sit amet phuc consectetur adipisicing elit. Iusto, rerum.</p>
                                    </router-link>
                                </div>
                            </li>
                            <li>
                                <div class='recent-blog-posts-li'>
                                    <router-link to="#" class="post-new">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum.</p>
                                    </router-link>
                                </div>
                            </li>
                            <li>
                                <div class='recent-blog-posts-li'>
                                    <router-link to="#" class="post-new">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum.</p>
                                    </router-link>
                                </div>
                            </li>
                            <li>
                                <div class='recent-blog-posts-li'>
                                    <router-link to="#" class="post-new">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum.</p>
                                    </router-link>
                                </div>
                            </li>
                            <li>
                                <div class='recent-blog-posts-li'>
                                    <router-link to="#" class="post-new">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum.</p>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
           
        </div>
        <Footer />
        </div>

</template>

<script>
// import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'


export default {
    name: 'TinTuc-page',
    components:{
        // Header,
        Footer,
    },
}
</script>

<style>
.list-title{
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Roboto Serif', serif;
  line-height: 32px;
  margin-bottom: 16px;
  padding-bottom: 25px;
  position: relative;
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
.card{
    position: relative;
    border: 1px solid orange;
    margin-bottom: 20px;
}
.card-img-top {
    width: 100%;
    height: 130px;
    object-fit: cover;
}
.card-body{
    width: 100%;
}
.card-title{
    height: 50px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
.card-text{
    height: 50px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    font-size: 14.5px;
}
.card-text:hover{
    color: orange;
}
.box-overlay{
    position: absolute;
    top: 20px;
    left: -10px;
    width: 50px;
    height: 50px;
    background-color: white;
    border: 2px solid orange;
    transition: all .3s ease;
}
.box-overlay:hover {
    background-color:black ;
    color: white;
}
.box-overlay p{
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 19px;
    font-weight: bold;
    transform: translate(-50%,-50%);
}
.box-overlay span{
    font-size: 13px;
    font-weight: normal;
    margin-left: 2px;
}
#search{
    background-color: orange;
    color: white;
    padding: 10px;
    margin-left: 2px;
    border: 1.5px solid black;
}
#gsearch{
    width: 80%;
    padding: 5px;
    border: 1.5px solid black;
    outline-offset: 0;
}

.content-tintuc li {
    list-style: none;
}
.recent-blog-posts-li .post-new{
    text-decoration: none;
}
.recent-blog-posts-li .post-new p {
    text-align: left;
    color: black;
    font-family: 'Roboto Serif', serif;
    height: 70px;
    font-weight: 550;
}
.recent-blog-posts-li .post-new p:hover{
    color: orange;
}
@media screen and (max-width:575.99px) {
    .search-tintuc input{
        width: 90%;
    }
}
</style>