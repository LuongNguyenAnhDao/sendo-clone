<template>

  <v-container class="bg-white rounded-lg mt-n3 mb-2">
    <v-row class="d-flex " >
        <v-col cols="8" md="5" xs="8" sm="7" lg="3" xl="3" class=" me-auto d-flex ">
            <div class="me-3">
                <v-img src="/images/2qchQKBYZR2DeGt4eAa3.png" height="24" width="24"></v-img>
            </div>
            <div >
                <span class="text-subtitle-1 font-weight-bold me-auto">Shop tiêu biểu</span>
            </div>
        </v-col>
        <v-col cols="4" md="3" xs="4" sm="3" lg="2" xl="2" class="text-right text-subtitle-2 ">
            <span>Xem tất cả</span>
        </v-col>
    </v-row>
    <v-row>
        <v-carousel cycle class="h-auto rounded-lg" hide-delimiters :show-arrows="false">
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
      cover
      
    ></v-carousel-item>
  </v-carousel>
    </v-row>

    <v-row class="mt-5">
        <v-slide-group>
        <v-slide-item
          v-for="(product, i) in products"
          :key="i"
          class=" ma-5"
        >
          <v-card height="250" width="200" variant="text" elevation="2">
            <v-img :src="product.image" aspect-ratio="1"></v-img>
            <v-card-title class="text-button font-weight-bold text-center mt-2">{{ product.title }}</v-card-title>
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
        slides: [
        {
          src: '/images/z5405980811519_43c8525671c9d5ff5528be92facf435b.jpg',
        },
        {
            src: '/images/z5405980817506_6aae4121a2569522518ffa89813aeca9.jpg',
        },
        {
            src: '/images/z5405980817507_b43372aa11f3203cd98b5d24760ac273.jpg',
        },
      ],
      products: [
    { id: 1,title: 'GIẢM 50%++' , image: '/images/Jx3JEoPI3vXN2jqTQ9PT.png'},
    { id: 2,title: 'TỪ 1K' , image: '/images/Arw4L10NP9V91JpuGulo.png'},
    { id: 3,title: 'TỪ 20K' , image: '/images/WY9nZ7iN3UPiD6jNpmy2.png'},
    { id: 4,title: 'CHỈ TỪ 2K' , image: '/images/rIkTzsZGE68QBBglSa7J.png'},
    { id: 5,title: 'TỪ 8K' , image: '/images/iCd2O071dDwjqqQZSUDV.png'},
    { id: 6,title: 'CHỈ TỪ 1K' , image: '/images/HEXJpFu7ncem0oQc8udm.png'},
    { id: 7,title: 'VOUCHER 10%' , image: '/images/L6Wex4tphOUjJ698uJDN.png'},
    { id: 8,title: 'TỪ 8K' , image: '/images/3alwPIUdLcyORfsaVD8G.png'},
    { id: 9,title: 'GIẢM 50%' , image: '/images/C3OYACCdz5N9asPNJDwc.png'},
    { id: 10,title: 'GIẢM 80%' , image: '/images/T2vixhqMSpWWSR9RwKXF.png'},
    ],
    }
},
}
</script>

<style>

</style>