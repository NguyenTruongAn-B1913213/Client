<template>
  <div class="status-bill">
    <div class="container-fluid">
      <div class="row" style="margin-top: 0;">
        <div class="col-sm-3">
          <TheSideBarAdmin />
        </div>
        <div class="col-sm-9 Add-admin-product">
          <div class="header-sm-9">
            <span>Overview</span>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <form class="main-add-product-admin">
                  <!-- <table class="table table-light">
                    <thead>
                      <tr class="content-main-thead">
                        <th scope="col">ID</th>
                        <th scope="col">Tên Người Dùng</th>
                        <th scope="col">Tổng Giá</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content-main-tbody-admin">
                        <th scope="row">1</th>
                        <td class="title-name">
                         Phúc
                        </td>

                        <td class="title-price">12.99$</td>
                        <td class="title-name">
                          PSG Home Match Dri-FIT ADV Jersey 23/24
                        </td>
                        <div class="mainEdit-Product">
                          <div class="EditProduct-Button-Bill">
                            <td>
                                <button class="badge badge-light">
                                  Xác Nhận Đơn Hàng
                                </button>
                            </td>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table> -->

                  <h3 class="title-bill-status"> Đơn Hàng</h3>
                  <table class="table table-light">
                    <thead>
                      <tr class="content-main-thead">
                        <th scope="col">ID</th>
                        <th scope="col">Tên Người Dùng</th>
                        <th scope="col">Tổng Giá</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content-main-tbody-admin" v-for="(order, index) in delivery" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td class="title-name">
                          {{ order.hoten }}
                        </td>

                        <td class="title-price">{{ order.totalPrice }}</td>
                        <td class="title-name" v-for="(item, index) in order.item" :key="index">
                            {{ item.product }} - Số Lượng {{ item.soluong }}
                        </td>
                        <div class="mainEdit-Product">
                          <div class="EditProduct-Button-Bill">
                            <td>
                              <div class="status-bill">
                                <i class="fa fa-truck"></i>
                                <span class="badge badge-light ml-2"></span>
                              </div>
                            </td>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TheSideBarAdmin from "../../../layout/TheSideBar-Admin.vue";
export default {
  components: {
    TheSideBarAdmin,
  },
  data(){
    return {
      delivery:[],
      page: 1,
      totalPages: 0,
      products:[]
    }
  },
  created(){
    this.getDelivery()
        this.getProduct()
  },
  mounted(){

  },
  methods:{
    async getDelivery(){
      const res = await axios.get(`http://localhost:3000/api/delivery?page=${this.page}`)
      this.delivery = res.data.delivery
      this.totalPages = res.data.totalPages
    },
    async getProduct(){
      const res = await axios.get("http://localhost:3000/api/product/name")
      this.products = res.data
      console.log(this.products)
    },
  }
};
</script>

<style lang="css" scoped>
.title-bill-status{
  color: black;
  margin: 25px 0;
  text-align: left;
}
.badge-light {
  width: 100%;
  padding: 10px 20px;
  background: greenyellow;
  color: black;
  font-size: 14px;
}
.status-bill{
  color:black;
  text-align: center;
}
.status-bill i {
  font-size: 26px;
}
</style>
>
