<template>
  <div class="addproduct-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
            <TheSideBarAdmin />
        </div>
        <div class="col-sm-9">
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
                    <label for="inputAddress">Choose Img</label>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="customFile"
                      />
                      <label class="custom-file-label" for="customFile"></label>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="date">Price</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="date">Type Price</label>
                      <select class="form-control">
                        <option value="&euro;">&euro;</option>
                        <option value="&yen;">&yen;</option>
                        <option value="&dollar;">&dollar;</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputCity">Name Product</label>
                      <input type="text" class="form-control" id="input" />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Sign in</button>
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
import TheSideBarAdmin from '@/components/TheSideBar-Admin.vue';
export default {
  components: {
    TheSideBarAdmin
  },
};
</script>
