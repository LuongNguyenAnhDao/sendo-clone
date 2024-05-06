<template>
  <v-container class="bg-white mt-4 rounded-lg">
    <v-row class="d-flex ">
      <v-col cols="5" md="3" xs="5" sm="3" lg="2" xl="2" class="px-9 me-auto">
        <v-img src="../public/images/flashsale-icon.6d0b98fffda3d7d526b45c53de367840.svg" cover></v-img>
      </v-col>
      <v-col cols="5" md="3" xs="5" sm="3" lg="2" xl="2" class="text-right text-subtitle-2">
        <span>Xem tất cả</span>
      </v-col>
    </v-row>
    <v-row>
      <v-slide-group>
        <v-slide-item v-for="(product, i) in products" :key="i" class=" ma-5">
          <v-card height="220" width="150" variant="text" elevation="2">
            <v-img :src="product.image" aspect-ratio="1"></v-img>
            <v-card-title class="text-h6 font-weight-bold text-red">{{ formatCurrency(product.price) }}</v-card-title>
            <v-card-subtitle>
              <span class="text-decoration-line-through text-caption">{{ formatCurrency(product.originalPrice) }}</span>
              <span class="text-red font-weight-bold"> -{{ Math.floor((product.originalPrice - product.price) /
                product.originalPrice *100) }}%</span>
            </v-card-subtitle>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </v-container>
  <v-container>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [
      { id: 1, price: 245000, image: '../public/images/5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg', originalPrice: 800000 },
      { id: 2, price: 7500, image: '../public/images/siW75CYUb4GBDnu87uQm_simg_de2fe0_250x250_maxb.png', originalPrice: 800000 },
      { id: 3, price: 99000, image: '../public/images/GU8aUr91d4wIDaiozG9K_simg_de2fe0_350x350_maxb.jpg', originalPrice: 800000 },
      { id: 4, price: 56000, image: '../public/images/hT4i3EST0pC7wU0EYC2Z_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 5, price: 110000, image: '../public/images/ixjLtH3Vg1p4844P9XDT_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 6, price: 65000, image: '../public/images/9seexP8Yl4rvnruNPzUw_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 7, price: 300000, image: '../public/images/vmLndFnj2PQhRgH6yQug_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 8, price: 740000, image: '../public/images/2HjVtf8MyDbGUsQtTbU7_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 9, price: 12000, image: '../public/images/UVftWuErciq8Fpq4k8ZX_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 10, price: 34000, image: '../public/images/i3JGgGdomWIYBWmGE8mi_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 11, price: 59000, image: '../public/images/oGb0sLiW4uFYiGgRBdUq_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 12, price: 59000, image: '../public/images/rRUlKtai6GginRfTwzSy_simg_de2fe0_250x250_maxb.png', originalPrice: 800000 },
      { id: 13, price: 59000, image: '../public/images/yfpl90BZQ2EXK8tkwcsa_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 14, price: 59000, image: '../public/images/lnZRs0H2YwkyaMDqURwR_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 15, price: 59000, image: '../public/images/h9PhpsHR7hNXTwe7XpMa_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 16, price: 59000, image: '../public/images/1lPJAWrwaX8Wvfbdh2Tl_simg_de2fe0_250x250_maxb.png', originalPrice: 800000 },
      { id: 17, price: 59000, image: '../public/images/1lPJAWrwaX8Wvfbdh2Tl_simg_de2fe0_250x250_maxb (1).png', originalPrice: 800000 },
      { id: 18, price: 59000, image: '../public/images/siW75CYUb4GBDnu87uQm_simg_de2fe0_250x250_maxb (1).png', originalPrice: 800000 },
      { id: 19, price: 59000, image: '../public/images/DDD9pd6W7slW1tziDzFs_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 20, price: 59000, image: '../public/images/b7NU8lkmDNAcHXL9g7Bs_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 21, price: 59000, image: '../public/images/QjvbhNoy36IYWSIp2LAX_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 22, price: 59000, image: '../public/images/Qwd3xo4PeJp8MoIl0OZ4_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 23, price: 59000, image: '../public/images/2gUauU_simg_de2fe0_250x250_maxb.jpg', originalPrice: 800000 },
      { id: 24, price: 59000, image: '../public/images/KWmA67JvgUNKqRmJg5Bp_simg_de2fe0_250x250_maxb.png', originalPrice: 800000 },
    ],
  }),
  methods: {
    formatCurrency(number) {
      let formatted = number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      formatted = formatted.replace(/(₫)(.+)/, '$2$1');
      return formatted.replace(/,/g, '.');
    }
  },
};
</script>

<style scoped>
.item {
  width: 120%;
}
</style>