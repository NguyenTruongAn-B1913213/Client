<template>
  <div class="admin-page">
    <div class="bg-avatar"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <TheSideBarAdmin />
        </div>
        <div class="col-sm-9 Add-admin-product">
            <div class="header-sm-9">
            <h2>Catorgory</h2>
            <router-link to="/admin/manager/AddCatorgory">
              <button class="add-catorgory">Thêm Mới <i class="fa fa-plus"></i></button>
            </router-link>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheSideBarAdmin from '../../layout/TheSideBar-Admin.vue'

export default {
  components:{
    TheSideBarAdmin
  }
}
</script>

