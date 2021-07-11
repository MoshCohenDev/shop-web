<template>
  <div class="q-pt-lg q-ma-sm col" style="max-width: 280px">
    <q-expansion-item switch-toggle-side class="title" label="קטגוריות">
      <q-separator/>
      <q-list dir="rtl" class="border-radius-inherit listItem">
        <q-item
          class="text-weight-bold q-pa-sm"
          v-for="(item,index) of category"
          :key="index"
          @click="getData(item)"
          clickable v-ripple>
          {{ item.label }}
        </q-item>
      </q-list>
    </q-expansion-item>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: "category",
  data() {
    return {
      category: [
        {name: 'Electrical product', label: 'חשמל'},
        {name: 'furniture', label: 'רהיטים'},
        {name: 'Air conditioners', label: 'מזגנים'},
        {name: 'Cookware', label: 'כלי מטבח'},
        {name: 'Tools', label: 'כלי עבודה '},
      ]
    }
  },
  methods: {
    ...mapActions('category', ['getProducts']),
    getData(item) {
      debugger
      this.getProducts(item.name).then(() => {
        console.log('asdasdasd')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  box-shadow: 2px 2px 2px 2px;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-style: initial;
}
</style>
