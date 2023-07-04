<template>
  <div class="addproduct-page">
    <div class="container-fluid">
      <div class="row" style="margin-top: 0;">
        <div class="col-sm-3">
            <TheSideBarAdmin />
        </div>
        <div class="col-sm-9 Add-admin-product">
          <div class="header-sm-9">
            <h2>ADDPRODUCT</h2>
            <router-link to="/admin/manager/AddProduct/Overviews"
              ><span>Overview</span></router-link
            >
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <form class="main-add-product">
                  <div class="form-group">
                    <label for="inputAddress">Hình ảnh</label>
                    <div class="custom-file">
                      <input type="text" v-model="hinhanh" class="form-control" id="input" />
                      <!-- <label class="custom-file-label" for="customFile"></label> -->
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Giá</label>
                      <input v-model="gia"
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="date">Mã Sản Phẩm </label>
                      <input v-model="masp"
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputCity">Tên Sản Phẩm</label>
                      <input type="text" v-model="ten" class="form-control" id="input" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Chất Liệu</label>
                      <input
                        type="text" v-model="chatlieu"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="date">Xuất Xứ</label>
                      <input v-model="xuatxu"
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Thương Hiệu</label>
                      <input v-model="thuonghieu"
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="date">Số Lượng</label>
                      <input v-model="soluong"
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Giới tính</label>
                      <select class="form-control" v-model="gioitinh">
                        <option value="Nam;">Nam</option>
                        <option value="Nam;">Nữ</option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="date">Danh Mục</label>
                      <select class="form-control"  v-model="category"> 
                        <!-- <option value="nam" v-for="(Category, index) in categorys" :key="index">{{ Category.category }}</option> -->
                        <option value="Đồng Hồ Nam" >Đồng Hồ Nam</option> 
                        <option value="Đồng Hồ Nữ" >Đồng Hồ Nữ</option> 
                        <option value="Đồng Hồ Đôi" >Đồng Hồ Đôi</option> 
                        <option value="Phụ Kiện" >Phụ Kiện</option> 
                        

                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputCity" style="padding-right: 20px; top: 20px;">Mô Tả</label>
                      <textarea id="w3review" v-model="mota" name="w3review" style="margin-top: 20px;" rows="4" cols="60"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" @click.prevent="createProduct">Thêm Sản Phẩm</button>
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
import TheSideBarAdmin from '../../layout/TheSideBar-Admin.vue';
export default {
  components: {
    TheSideBarAdmin
  },
      
      
};
</script>
