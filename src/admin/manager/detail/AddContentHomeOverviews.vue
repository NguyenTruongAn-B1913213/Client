<template>
  <div class="addproduct-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
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
                <form class="main-add-content">
                  <table class="table table-light">
                    <thead>
                      <tr class="content-main-thead">
                        <th scope="col">ID</th>
                        <th scope="col">Hình Ảnh</th>
                        <th scope="col">Ngày</th>
                        <th scope="col">Tiêu Đề H1</th>
                        <th scope="col">Tiêu Đề</th>
                        <th scope="col">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content-main-tbody-product">
                        <th scope="row">1</th>
                        <td>
                          <img
                            src="../../../img/list-watch/watch-1.jpg"
                            alt=""
                            class="img-product-page-admin"
                          />
                        </td>
                        <td>01-10-2022</td>
                        <td>PSG Home Match Dri-FIT ADV Jersey 23/24</td>
                        <td>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Commodi molestias, dicta alias iure numquam
                          magni voluptatum aliquid vitae culpa dolor?
                        </td>
                        <div class="mainEdit-Product">
                          <div class="EditProduct">
                            <td>
                              <router-link
                                to="/admin/manager/AddContentHome/Overviews/EditContent"
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
import TheSideBarAdmin from '../../../layout/TheSideBar-Admin.vue'
export default {
  components:{
    TheSideBarAdmin
  }
};
</script>

<style>
.content-main-tbody-admin {
  margin: 0;
}
.mainEdit-Product {
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
  padding: 10px;
}
.img-product-page-admin {
  width: 70px;
}
.content-main-tbody td,
th {
  text-align: center;
  padding-top: 20px;
}
.title-product-admin {
  justify-content: center;
}
.table td,
.table th {
  vertical-align: middle;
  border-top: none;
}
</style>
