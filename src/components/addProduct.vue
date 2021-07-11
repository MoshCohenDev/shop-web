<template>
  <div class="q-ma-lg">
    <q-select outlined v-model="productsType" :options="categoryProduct" label="קטגוריה"/>
    <q-input label="הוספת מוצר" outlined class="q-pt-md" @keyup.enter.stop="addProduct" v-model="product"/>
    <q-input class="q-pt-md" outlined v-model="typeP" label="סוג"/>
    <q-input class="q-pt-md" outlined v-model="price" label="מחיר"/>
    <q-input class="q-pt-md" outlined v-model="img" label="תמונה"/>
    <q-btn @click="addProduct()" color="white" text-color="black" label="Standard"/>
  </div>
</template>
<script>
import {mapActions} from "vuex";
import {Notify} from "quasar";

export default {
  name: "addProduct",
  data() {
    return {
      product: '',
      price: '',
      typeP: '',
      img: '',
      productsType: '',
      categoryProduct: [
        {name: 'Electrical product', label: 'חשמל'},
        {name: 'furniture', label: 'רהיטים'},
        {name: 'Air conditioners', label: 'מזגנים'},
        {name: 'Cookware', label: 'כלי מטבח'},
        {name: 'Tools', label: 'כלי עבודה '},

      ]
    }
  },
  methods: {
    ...mapActions('category', ['addingProduct']),
    addProduct() {
      if (this.product === '' || this.categoryProduct === '' || this.price === '') {
        Notify.create({
            message: 'לא בחרת סוג סעיף ',
            position: 'top',
            timeout: 2500,
            textColor: 'white',
            actions: [{icon: 'close', color: 'white'}]
          }
        )
      } else {
        console.log(this.productsType)
        debugger
        let newProduct = {
          id: new Date().getTime(),
          category: this.productsType.name,
          name: this.product,
          type: this.typeP,
          favorite: false,
          price: this.price,
          img: this.img
        }

        this.addingProduct(newProduct)
        this.product = ''
        this.price = ''
        this.typeP = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
