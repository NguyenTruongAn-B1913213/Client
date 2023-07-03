<template>
  <div class="detail-product-page">
    <div class="container">
        <div class="row" style="margin-top: 0;">
            <div class="col-sm-3 content-1">
                <p class="list-title">Sản Phẩm</p>
                <div class="product-sidebar">
                    <aside id="woocommerce_products-2">
                        <ul class="product_list_widget">
                            <li>
                                <img src="../img/list-watch/watch-1.jpg" alt="">
                                <span>Dịch Vụ Khắc Laser Logo Công Ty Lên Đồng Hồ</span>
                            </li>
                            <li>
                                <img src="../img/list-watch/watch-2.jpg" alt="">
                                <span>Dịch Vụ In Logo Màu Lên Mặt Số Đồng Hồ</span>
                            </li>
                            <li>
                                <img src="../img/list-watch/watch-3.jpg" alt="">
                                <span>HỘP LÊN DÂY CÓT TỰ ĐỘNG ZRC DOUBLE-WATCH WINDER EM03201</span>
                            </li>
                            
                        </ul>
                    </aside>
                </div>
            </div>

            <div class="col-sm-9 content-2">
                <div class="row line-stop">
                    <div class="col-sm-6 img-detail-product">
                        <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-casio-ga-110gb-1adr-nam-pin-day-nhua-600x600.jpg" alt="">
                    </div>
                    <div class="col-sm-6">
                        <div class="src-detai-product">
                            <router-link to="/Home" class="id1">TRANG CHỦ</router-link>
                            <span>/</span>
                            <router-link to="/donghoNam" class="id1">ĐỒNG HỒ NAM</router-link>
                        </div>
                        <div class="content-detail-product">
                            <h3 class="new-list-title">ĐỒNG HỒ CASIO GA-110GB-1ADR NAM PIN DÂY NHỰA</h3>
                            <p>Đồng hồ nam CASIO GA-110GB-1AVDF có thiết kế mới sử dụng kim loại màu vàng làm vạch số và kim nổi bật, sang trọng hơn so với thiết kế cũ nên mẫu GA-110GB-1AVDF rất được lòng giới trẻ hiện nay.</p>
                            <ul>
                                <li>
                                    <span>Sản phẩm này đã hết hàng hoặc không có sẵn.</span>
                                </li>
                                <li>
                                    <span>Mã: GA-110GB-1ADR</span>
                                </li>
                                <li>
                                    <span>Danh Mục : <router-link to="/donghoNam">Đồng Hồ Nam</router-link></span>
                                </li>
                                <li>
                                    <span>Tag : Đồng Hồ Nam bán chạy nhất</span>
                                </li>
                                <li>
                                    <button class="btn buy-product">Mua Hàng</button>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 content-3">
                        <h6 class="new-list-title">Thông Tin Bổ Sung</h6>
                        <div class="tab-panels">
                            <div class="panel entry-content active">
                                <table class="shop_attributes">
                                    <tbody class="shop_attributes_tbody">
                                        <tr class="shop_attributes_tr">
                                            <th>Bộ máy & Năng lượng</th>
                                            <td>
                                                <p>Pin (Quartz)</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>CHẤT LIỆU MẶT KÍNH</th>
                                            <td>
                                                <p>Kính Cứng</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>CHẤT LIỆU DÂY</th>
                                            <td>
                                                <p>Dây Nhựa / Cao Su</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>GIỚI TÍNH</th>
                                            <td>
                                                <p>Nam</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>HÌNH DẠNG MẶT SỐ</th>
                                            <td>
                                                <p>Tròn</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>KÍCH THƯỚC MẶT SỐ</th>
                                            <td>
                                                <p>30 – 34 mm</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>MÀU MẶT SỐ</th>
                                            <td>
                                                <p>Đen, Vàng</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>MỨC CHỐNG NƯỚC</th>
                                            <td>
                                                <p>Đi Tắm (5 ATM)</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>THƯƠNG HIỆU</th>
                                            <td>
                                                <p>Casio, G-Shock & Baby-G</p>
                                            </td>
                                        </tr>
                                        <tr class="shop_attributes_tr">
                                            <th>XUẤT XỨ</th>
                                            <td>
                                                <p>Nhật Bản</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


.new-list-title{
  color: #000;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  font-family: 'Roboto Serif', serif;
  line-height: 32px;
  margin-bottom: 16px;
  padding-bottom: 25px;
  position: relative;
  margin-top: 30px;
}
.new-list-title::before{
  content:'';
  border-bottom: 4px double #e4e4e4;
  bottom: 3px;
  left: 0;
  margin: 0;
  right: 0;
  width: 50px;
  z-index: 1;
  position: absolute;
}
.content-1{
    text-align: left;
    width: 100%;
    margin-top: 110px;  
}
.product-sidebar{
    padding: 10px;
    border: 1px solid black;
}
.product_list_widget li:not(:last-of-type){
    border-bottom:1px solid black ;
}
.product_list_widget li{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.product_list_widget li img {
    width: 70px;
}
.content-2{
    margin-top: 110px;
    border-left:1px solid #E5E5E5 ;
}
.line-stop{
    border-bottom:1px solid #E5E5E5 ;
}
.img-detail-product img {
    width: 100%;
}
.content-detail-product h3 {
    color: black;
}
.src-detai-product .id1 { 
    color: black;
    text-decoration: none;
}
.src-detai-product .id1:hover{
    color: orange;
}
.src-detai-product span{
    margin: 0 10px;
}
.content-detail-product ul {
    list-style: none;
}
.content-detail-product ul li{
    padding: 10px 0;
}

.content-detail-product ul li:first-of-type{
    font-weight: bold;
    padding-bottom: 40px;
}
.content-detail-product ul li:not(:first-of-type){
    font-size: 13px;
    font-weight: 500;
}
.content-detail-product ul li:not(:last-of-type){
    border-bottom: 1px solid #E5E5E5 ;
}
.shop_attributes{
    width: 100% ;
    margin-bottom:10px ;
    border-color: #ececec;
    border-spacing: 0;
}
.shop_attributes_tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
.shop_attributes_tr{
    border-bottom: 1px solid black;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.shop_attributes_tr th  {
    padding: 13px;
    text-align: left;
    font-weight: 500;
    text-transform: uppercase;
}
.shop_attributes_tr td p{
    text-align: left;
    margin: 0;
}
.content-3 h6 {
    font-size: 17px;
    padding: 30px 0;
}
.buy-product{
    background: black;
    color: white;
    width: 100% ;
}
.buy-product:hover{
    background: rgb(189, 185, 185);
    color: black;
    border: 1px solid black;
}


</style>>