<template>
  <v-app>
    <Navbar1/>
    <Main/>
    <div style="background-color: #f2f3f4;">
      <flash-sale/>
      <typical-shop/>
      <Extensions/>
      <list-product/>
      <v-container class="mt-2 mb-8">
        <v-row class="d-flex justify-center">
        <v-col cols="6" xs="6" sm="6" md="6" lg="4" xl="4" class="pa-0">
          <v-btn style="background-color: white;" variant="text" class="w-100 text-body-1 font-weight-bold">Xem thêm</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar1 from '../components/Navbar.vue'
import Main from '../components/Main.vue'
import FlashSale from '../components/FlashSale.vue'
import Footer from '../components/Footer.vue'
import TypicalShop from '../components/TypicalShop.vue'
import Extensions from '../components/Extensions.vue'
import ListProduct from '../components/ListProduct.vue'
export default {
  components:{
    Navbar1,
    Main,
    FlashSale,
    Footer,
    TypicalShop,
    Extensions,
    ListProduct
  }
}
</script>

<style>

</style>