<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn
          class="btn"
          rounded
          size="md"
          label="עגלה"
          flat
          icon="shopping_cart"/>
        <q-btn
          class="btn"
          rounded
          size="md"
          flat
          to="/favorite"
          label="המועדפים שלי"
          icon="favorite"/>
        <q-btn
          icon="phone"
          rounded
          flat
          class="text-weight-bold btn"
          outline label="צור קשר"/>
        <q-toolbar-title class="text-center">
        </q-toolbar-title>
        <q-btn
          icon="person"
          rounded
          to="/"
          class="text-weight-bold btn"
          outline label="כניסה"/>
        <q-btn
          to="/home"
          flat size="lg"  icon="home"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {}
  }

}
</script>
<style lang="scss">
.header {
  background: linear-gradient(to right, #232526, #414345); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.btn {
  margin: 0 10px;
}
</style>
