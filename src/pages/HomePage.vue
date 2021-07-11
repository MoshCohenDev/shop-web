<template>
  <q-page class="bg-home" style="position: relative">
    <div class="row">
      <search/>
      <category/>
    </div>
    <add-product/>
    <card/>
    <carousel/>
  </q-page>
</template>

<script>
import Search from "components/Home/search";
import category from "components/Home/category";
import Carousel from "components/Home/carousel";
import Card from "components/Home/card";
import AddProduct from "components/addProduct";

export default {
  name: 'HomePage',
  components: {AddProduct, Card, Carousel, category, Search}
}
</script>
<style lang="scss">
.bg-home {
  background: -webkit-linear-gradient(to right, #8e9eab, #eef2f3); /* Chrome 10-25, Safari 5.1-6 */

}
</style>
