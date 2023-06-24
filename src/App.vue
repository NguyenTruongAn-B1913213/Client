<template>
    <headerpage 
    />
    <router-view/>
</template>
<script>
import headerpage from './layout/Header.vue';
export default {
  name: 'App',
  components: {
    headerpage,
  },
  data() {
    return {
        cartList:[], 
    }
  },
  methods: {
    handleAddCart(productItem) {
      const index = this.cartList.findIndex(
        (cart) => cart.id === productItem.id
      );
      if (index !== -1) {
        this.cartList[index].amount += 1;
      } else {
        const newProductItem = {...productItem, amount: 1};
        this.cartList = [...this.cartList, newProductItem];
      }
    },
    handleDelete(cart) {
      this.cartList = this.cartList.filter(
        (cartItem) => cartItem.id !== cart.id);
    },
    handleUpOrDownAmount(params) {
      const { status, cart } = params;
      const index = this.cartList.findIndex(
        (cartItem) => cartItem.id === cart.id
      );
      if(index !== -1){
        if (status)
        {
          //tăng
          if (this.cartList[index].amount < this.cartList[index].tonkho) {
            this.cartList[index].amount += 1;
          } else {
            alert("Đã Vượt Quá Số Lượng Trong Kho");  
          }
        } else {
          //giảm
          if (this.cartList[index].amount > 1) {
            this.cartList[index].amount -= 1;
          } else {
            alert("Sản Phẩm Không Được Âm !!!");
          }
        }
      }
    },
  },
}
</script>

<style></style>