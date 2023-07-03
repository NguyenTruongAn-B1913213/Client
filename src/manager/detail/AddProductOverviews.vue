<template>

  <div class="addproduct-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <!-- <TheSideBarAdminVue></TheSideBarAdminVue> -->
        </div>
        <div class="col-sm-9">
          <div class="header-sm-9">
            <span>Overview</span>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <form class="main-add-product-admin">
                  <table class="table table-light">
                    <thead>
                      <tr class="content-main-thead">
                        <th scope="col">ID</th>
                        <th scope="col">Hình Ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content-main-tbody-admin">
                        <th scope="row">1</th>
                        <td>
                          <img
                            src="https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-nike-home-dri-fit-adv-match-shirt-2023-24_ss4_p-13368107+u-6swpap3ahgp3lvfzx2td+v-b9d974f0ee1647239a47695dac55586b.jpg?_hv=2&w=340"
                            alt=""
                            class="img-product-page-admin"
                          />
                        </td>
                       
                          <td>12.99$</td>
                          <td>PSG Home Match Dri-FIT ADV Jersey 23/24</td>
                       <div class="mainEdit-Product">
                          <div class="EditProduct">
                            <td>
                              <router-link
                                to="/admin/manager/AddProduct/Overviews/EditProduct"
                              >
                                <i class="fa fa-edit"></i>
                                <span class="badge badge-light"></span>
                              </router-link>
                            </td>
                          </div>

                          <td>
                            <div class="delete">
                                <i class="fa fa-trash-alt"></i>
                                <span class="badge badge-light ml-2"></span>
                            </div>
                        </td> 
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
// import TheSideBarAdminVue from '../../layout/TheSideBar-Admin.vue';

export default {
  components:{
    // TheSideBarAdminVue
  }
};


</script>


<style scoped>

.content-main-tbody-admin{
  margin: 0;
}
.mainEdit-Product{
  display: flex;
  justify-content: center;
}
.EditProduct {
  background: rgb(145, 235, 11);
  border-radius: 10px;
  color: white;
  width: 40px;
  height: 40px;
  text-align: center;
  margin-top: 30px;
}
.delete {
  background: red;
  color: white;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  margin-top:18px;
  text-align: center;
}
.img-product-page-admin {
  width: 70px;
}
.content-main-tbody td,
th {
  text-align: center;
  margin-top: 20px;
}
.title-product-admin{
  justify-content: center;
  text-align: center;
}
</style>
