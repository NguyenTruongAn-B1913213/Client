<template>
  <div class="admin-page">
    <div class="admin">
    <div class="container-fluid">
      <div class="row" style="margin-top: 0;">
        <div class="col-sm-3 " id="admin-page">
          <TheSideBarAdmin />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TheSideBarAdmin from '../../layout/TheSideBar-Admin.vue';

export default {
  name: "admin-page",
  components:{
    TheSideBarAdmin
  }
};
</script>

<style >
.Add-admin-product{
  margin-top: 90px;
}
.avatar {
  display: flex;
}
.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 50px 0;
  margin-left: 50px;
}
.name-avatar {
  font-size: 14px;
  margin-top: 45px;
  margin-left: 15px;
}
.Add-main {
  padding: 50px;
  text-transform: uppercase;
  font-weight: bold;
}
.Add-main i {
  margin-left: 70px;
  cursor: pointer;
}
.aside-main {
  background: #1a2434;
  color: white;
  margin-left: -20px;
  margin-right: -20px;
  height: 763px;
}
.dropdown button {
  width: 10px;
  height: 15px;
  margin-top: 85px;
  margin-left: 10px;
}
.dropdown-toggle::after {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -10px;
}

/* col-sm-9 */
.Add-admin-product {
  background: #f1ebf2;
  width: 100%;
}
.header-sm-9 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
}
.main-add-product{
    background: white;
    padding: 20px;
    margin-bottom: 40px;
}
h3{
    color: white;
}
.title-price, .title-name{
  text-align: center;
}
</style>
