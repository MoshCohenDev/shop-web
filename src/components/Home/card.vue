<template>
  <div class="row cards">
    <q-card
      bordered flat
      v-for="(product,index) of Products"
      :key="index"
      class="my-card text-center text-weight-bold">
      <p class="text-weight-bold text-h5">{{ product.name }}</p>
      <span class="text-h6">{{ product.type }}</span>
      <img :src="product.img">
      <q-separator/>
      <q-card-actions>
        <q-btn
          flat
          color=white
          to="/favorite"
          label="פרטים נוספים"
          style="background: #687cb8">
        </q-btn>
        <q-btn
          flat
          round
          @click="appendToFavorite(product)"
          :color="product.favorite?'red': 'black'"
          icon="favorite" class="absolute-bottom-right"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {Notify} from "quasar";

export default {
  name: "card",
  data() {
    return {}
  },
  methods: {
    ...mapActions('category', ['setToFavoritePage']),
    appendToFavorite(item) {
      if (this.favoriteProduct.find(element => element.id === item.id)) {
        return Notify.create(

        )
      }else {
        this.setToFavoritePage(item)
      }
    }
  },
  computed: {
    ...mapState('category', ['Products', 'favoriteProduct'])
  }
}
</script>

<style lang="scss" scoped>
.cards {
  justify-content: center;
  border-radius: 30%;
}

.my-card {
  width: 150px;
  border-radius: 20px;
  margin: 4px;
}

</style>
