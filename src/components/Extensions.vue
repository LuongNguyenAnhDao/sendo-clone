<template>

    <v-container class="bg-white rounded-lg my-3">
      <v-row class="d-flex " >
          <v-col cols="8" md="5" xs="8" sm="7" lg="3" xl="3" class=" me-auto d-flex ">
              <div class="me-3">
                  <v-img src="./images/yinpavnKTeNesRxwyq5x.png" height="24" width="24"></v-img>
              </div>
              <div >
                  <span class="text-subtitle-1 font-weight-bold me-auto">Tiện ích cho bạn</span>
              </div>
          </v-col>
          <v-col cols="4" md="3" xs="4" sm="3" lg="2" xl="2" class="text-right text-subtitle-2 ">
              <span>Xem tất cả</span>
          </v-col>
      </v-row>
      <v-row class="mt-5">
          <v-slide-group :show-arrows="false">
          <v-slide-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-card :color="item.color" width="112" height="112" variant="flat" class="me-2 mb-2">
              <v-img :src="item.image" style="width: 40%;" class="ma-auto my-3"></v-img>
              
              <p class="text-center text-caption">{{ item.title }}</p>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-row>
  
     
    </v-container>
  </template>
  
  <script>
  export default {
  data() {
      return {
        items: [
      { id: 1,title: 'Hóa Đơn Điện' , image: './images/oTS47qm4NHgSucqXKo50.png', color:'rgb(254, 242, 242)'},
      { id: 2,title: 'Mau Thẻ Cào' , image: './images/6XeWaJY0gq5rf5g8B0AY.png', color:'rgb(226, 246, 247)'},
      { id: 3,title: 'Mua Thẻ Game' , image: './images/VTLUgFa6KOdIT1jdOYcs.png', color:'rgb(253, 237, 226)'},
      { id: 4,title: 'Máy bay giá rẻ!' , image: './images/3ZXUlSIWwBXgNyzkjHie.png', color:'rgb(231, 239, 254)'},
      { id: 5,title: 'Ưu đãi đói tác' , image: './images/udI33vs2vfdAX1XHPcQa.png', color:'rgb(253, 237, 226)'},
      { id: 6,title: 'Nạp Tiền Điện Thoại' , image: './images/NVVKXKYImjyVVLmTrh5u.png', color:'rgb(226, 230, 242)'},
      { id: 7,title: 'Hóa Đơn Nước' , image: './images/UxOzTiyxgMXe1eIBgxRp.png', color:'rgb(231, 239, 254)'},
      { id: 8,title: 'Hóa Đơn Internet' , image: './images/Ju39kvVpMR8vdKYz73Hn.png', color:'rgb(226, 246, 247)'},
      { id: 9,title: 'Vé tàu' , image: './images/J3Z3cu8Wp6JIvTmr7TQB.png', color:'rgb(226, 246, 247)'},
      { id: 10,title: 'Vé xe' , image: './images/RsogGM6TgtmZcGIZoT1m.png', color:'rgb(236, 235, 247)'},
      ],
      }
  },
  }
  </script>
  
  <style>
  .v-slide-group__next, .v-slide-group__prev {
  display: none !important;
}
  </style>