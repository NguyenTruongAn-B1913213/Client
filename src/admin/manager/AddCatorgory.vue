<template>

  <div class="addproduct-page">
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
                  <table class="table table-light">
                    <thead>
                      <tr class="content-main-thead">
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ngày Thêm</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="content-main-tbody-admin"  v-for="(product, index) in products" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                          {{ product.category }}
                        </td>
                        <td class="title-price">{{ product.createAt }}</td>
                       <div class="mainEdit-Product">
                          <!-- <div class="EditProduct">
                            <td>
                              <router-link
                                :to="`/admin/manager/Overviews/EditProduct/${product._id}`"
                              >
                                <i class="fa fa-edit"></i>
                                <span class="badge badge-light"></span>
                              </router-link>
                            </td>
                          </div> -->

                          <!-- <td>
                            <div class="delete" v-on:click="deleteId(product._id)" >
                                <i class="fa fa-trash-alt" ></i>
                                <span class="badge badge-light ml-2"></span>
                            </div>
                        </td>  -->
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
import TheSideBarAdmin from '../../layout/TheSideBar-Admin.vue';
export default {
  components:{
    TheSideBarAdmin
  },
  data(){
    return{
      products:[],
      page: 1,
      totalPages: 0,
    }
  },
  mounted(){
    this.fetchProduct()
  },
  methods:{
    async fetchProduct(){
      const res = await axios.get(`http://localhost:3000/api/danhmuc`)
      console.log(res.data)
      this.products = res.data
    },
    async deleteId(id){
            if(confirm("Bạn đã chắc chắn")){
                try{
                    await axios.delete("http://localhost:3000/api/"+id);
                    this.fetchProduct();

                }catch(e){
                    console.log(e);
                }
            }

        },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        this.fetchProduct()
      }
    }, 
    nextPage() {
     if (this.page < this.totalPages) {
         this.page++;
         this.fetchProduct()
        }
    },
    changePage(pageNumber){
      if(pageNumber != this.page ){
          this.page = pageNumber
          this.fetchProduct()
      }
    }
  },
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
.content-main-tbody th {
  text-align: center;
  margin-top: 20px;
}
.title-product-admin{
  justify-content: center;
  text-align: center;
}
</style>
