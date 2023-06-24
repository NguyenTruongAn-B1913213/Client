<template>
     <div class="list-item-donghoNam">
        <div class="list-item-watch-donghoNam">
                <div class="discount">
                    <span>{{ product.discount }}</span>
                </div>
                <img v-bind:src="product.hinhanh" class="img"  alt="" />
                <i @click="handleAddCart(product)" class="fa fa-shopping-bag "></i>
                <div class="watch-detail-donghoNam">
                    <h6>{{ product.nameType }}</h6>
                    <h5>{{ product.nameItem }}</h5>
                    <span>{{ product.amount }}</span>
                    <h6><span>{{ product.price }} VND</span> {{ product.pricediscount }} VND</h6>
                </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    state(){
        return {
            product:{}
        }
    },
    props: {
        product: {
            type: Object,
            requie: true
        },
    },
    methods: {
        // handleAddCart(product) {
        //     console.log(product)
        //     this.$emit("handle-addcart", product);
        // },
        ...mapMutations(["addCart"]),
        handleAddCart(){
            this.addCart(this.product)
        }
    },
}
</script>

<style>
 
</style>