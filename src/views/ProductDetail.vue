<template>
<v-app>
  <Navbar/>
  <div style="background-color: rgb(242, 243, 244);" >
    <detail-main/>
  </div>
  <div style="background-color: #f2f4f5;">
  <list-product></list-product>
  <v-btn variant="tonal" class="text-subtitle-1 d-flex ma-auto my-3" width="400" style="background-color: rgb(255, 255, 255);" >Xem thêm </v-btn>
  </div>
  <Footer/>
  <div style="background-color: #fff;" class="fixed-bottom">
    <v-container>
      <v-row>
      <v-col cols="1">
      <v-img src="/images/CY5jLMG4MR4VOcdFQQoO_simg_b5529c_250x250_maxb.jpg"></v-img>
      </v-col>
      <v-col cols="3">
        <span class="truncate-1-lines font-weight-bold">Cây lau nhà phun sương thông minh 3 trong 1 đa năng, cây lau nhà thông minh hộp đen</span>
        <span style="color:#6f787e ;">x1</span>
      </v-col>
      <v-col cols="1">
        <span style="color:#6f787e ;">Tạm tính</span>
        <br>
        <span class="text-red">59.000đ</span>
      </v-col>
      <v-col cols="1">
        <v-btn variant="tonal"> <v-icon>fa-solid fa-store</v-icon></v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn variant="tonal"> <v-icon>fa-regular fa-message</v-icon></v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn variant="tonal" class="text-subtitle-1"> Thêm vào giỏ</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn variant="tonal" class="text-subtitle-1 text-white" width="300" style="background-color: red;"> Mua ngay</v-btn>
      </v-col>
    </v-row>
    </v-container>
  </div>
</v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import DetailMain from '../components/PDetailMain.vue'
import ListProduct from '../components/ListProduct.vue'
import Footer from '../components/Footer.vue'
export default {
    components:{
        DetailMain,
        Navbar,
        ListProduct,
        Footer,
    }

}
</script>

<style scoped>
.fixed-bottom {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
}
.truncate-1-lines {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>