<template>
  <h4 class="text-center" style="background: steelblue;color: white">המועדפים שלי</h4>
  <div class="row cards">
    <div
      v-for="(product,index) of favoriteProduct"
      :key="index"
      class="text-center my-card text-weight-bold q-ma-sm q-pa-sm">
      <div>
        <p class="text-weight-bold text-h5">{{ product.name }}</p>
        <span class="text-h6">{{ product.type }}</span>
      </div>
        <q-img class="img" :src="product.img"/>
      <div>
        <span class="text-h6">מחיר :{{  product.price }}</span>
      </div>
      <q-btn class="q-ma-sm" label="הוסף לסל" color="primary" icon="shopping_cart"/>
      <q-btn label="הסר מרשימה " color="red" icon="delete"/>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "favoriteProducts",
  data() {
    return {}
  },
  computed: {
    ...mapState('category', ['favoriteProduct'])
  }
}
</script>

<style scoped lang="scss">
.cards {
  justify-content: center;
  border-radius: 30%;
}

.my-card {
  border-radius: 30px;
  border: 2px solid;
}
.img{
width: 40%;
}
</style>
