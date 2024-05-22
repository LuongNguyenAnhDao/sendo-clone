<template>
  <v-container style="background-color: white ;margin-top: 10rem;" class=" rounded-lg">
    <v-row class="d-flex justify-space-between pa-5">
      <v-col cols="4">
        <v-row>
          <v-img cover :src="`/images/${productById.image}`"></v-img>
      
        </v-row>
        <v-row class="mt-5">
          <v-slide-group center-active show-arrows>
            <v-slide-group-item v-for="(item, index) in items" :key="index">
              <v-img class="mx-3" width="72" height="72" :src="item.image">
              </v-img>
            </v-slide-group-item>
          </v-slide-group>
          
        </v-row>
      </v-col>

      <v-col cols="7">
        <v-row class="d-flex justify-space-between" style="
            background-image: url(https://media3.scdn.vn/img4/2020/06_18/FBnN0sGbAeXbPuZ7IIWp.png);
            height: 40px;
          ">
          <v-col cols="3" class="py-0">
            <v-img width="157" cover src="/images/jaGsAfx1dzgHf82AyWSI.png"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-card flat>
            <P class="font-weight-bold text-h6">{{ productById.name }}</P>
            <P class="text-body-2">Thương hiệu: OEM</P>
            <p class="text-h5 text-red font-weight-bold">
              {{ formatCurrency(productById.originalPrice) }}
            </p>
            <v-card-subtitle class="pa-0">
              <span class="text-decoration-line-through text-caption">{{
                formatCurrency(productById.price)
              }}</span>
              <span class="text-red font-weight-bold"> Giảm {{ Math.floor((productById.originalPrice -
                productById.price)
                /
                productById.originalPrice * 100) }}%</span>
            </v-card-subtitle>
            <p>
              <span><v-rating readonly density="comfortable" size="x-small" :model-value="productById.ratings"
                  color="yellow" half-increments></v-rating></span>
              <span class="text-blue"> 293 đánh giá </span>
              <span style="color: rgb(111, 120, 126)">•</span>
              <span style="color: rgb(111, 120, 126)">1K lượt mua</span>
            </p>
            <v-row class="my-3">
              <v-col cols="3" class="d-flex align-center"><span>Chọn số lượng: </span></v-col>
              <v-col cols="1" class="px-3">
                <v-btn btn @click="decreaseCounter" style="min-width: 30px" class="ps-auto">-</v-btn>
              </v-col>
              <v-col cols="1" class="px-0">
                <v-text-field v-model="counter" density="compact" variant="outlined" type="input"
                  class="d-inline"></v-text-field>
              </v-col>
              <v-col cols="1" class="px-3">
                <v-btn @click="increaseCounter" style="min-width: 30px">+</v-btn>
              </v-col>
            </v-row>
            <div class="bg-blue-lighten-4 rounded py-3 my-3">
              <span>Chỉ được mua <b>40</b> sản phẩm khuyến mãi</span>
            </div>

            <v-row class="d-flex mt-3">
              <v-card-actions class="w-50 py-5">
                <v-btn size="large" class="bg-grey-lighten-3 w-100 rounded font-weight-bold text-body-1">Thêm vào
                  giỏ</v-btn>
              </v-card-actions>
              <v-card-actions class="w-50">
                <v-btn size="large" class="bg-red-accent-4 w-100 rounded font-weight-bold text-body-1">Mua ngay</v-btn>
              </v-card-actions>
            </v-row>
            <hr />
            <div class="mt-3 font-weight-bold">
              <span>Mã giảm giá của shop (1)</span>
            </div>

            <v-row class="my-1">
              <v-col cols="2" class="ma-3 rounded me-0" style="
                  border-right: 0.5px dashed black;
                  background-color: rgb(242, 242, 242);
                ">
                <p class="text-subtitle-2 font-weight-bold" style="color: #d5600c">
                  Giảm giá 10k
                </p>
                <p class="text-caption font-weight-bold" style="color: #0f62fe">
                  Chi tiết
                </p>
              </v-col>
              <v-col cols="1" class="my-auto rounded" style="
                  border-left: 0.5px dashed black;
                  background-color: rgb(242, 242, 242);
                ">
                <p class="font-weight-bold">Lưu</p>
              </v-col>
            </v-row>
            <hr />
            <div class="mt-3 font-weight-bold">
              <span>Ưu đãi dành cho bạn</span>
            </div>
            <v-row class="py-5">
              <v-col cols="3">
                <v-row class="pb-3">
                  <v-img style="width: 24px; height: 24px" src="/images/HDgWOVQr93hTWAFmecC3.png"></v-img>
                  <span>Trả sau AFTEE</span>
                </v-row>
                <v-row>
                  <v-img style="width: 24px; height: 24px" src="/images/k4fhvv3i925lb0CUgGn4.png"></v-img>
                  <span>Trả góp Kredivo</span>
                </v-row>
              </v-col>
              <v-col cols="3" class="ms-10">
                <v-row>
                  <v-img style="width: 24px; height: 24px" src="/images/9wtTH9rjcQ4CVH1s7SeW.png"></v-img>
                  <span>Trả góp Muadee</span>
                </v-row>
              </v-col>
            </v-row>
            <hr />
            <div class="mt-3 font-weight-bold">
              <span>Quyền lợi khách hàng & Bảo hành</span>
            </div>
            <v-row class="my-3 mx-2">
              <v-col cols="4">
                <v-text-field density="compact" variant="plain" readonly flat>
                  <template v-slot:prepend>
                    <v-img width="24" height="24" src="/images/baohanh.png"></v-img>
                  </template>
                  <span>48 giờ hoàn trả</span>
                </v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field density="compact" variant="plain" readonly flat>
                  <template v-slot:prepend>
                    <v-img width="24" height="24" src="/images/baohanh.png"></v-img>
                  </template>
                  <span>Bảo hành theo chính sách từ Nhà bán hàng</span>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row class="d-flex justify-space-between py-5">
      <v-col cols="5" class="pa-0">
        <v-card>
          <v-card-subtitle class="font-weight-bold my-5">
            Thông tin nhà cung cấp
          </v-card-subtitle>
          <v-row>
            <v-col cols="3">
              <v-img src="/images/InglLiQ1sJJOXSIxCBoL.jpg" class="rounded-circle ms-3"></v-img>
            </v-col>
            <v-col>
              <p class="font-weight-bold">Gia Dụng Pk</p>
              <span>TP Hồ Chí Minh | 4.5 ★</span>
            </v-col>
          </v-row>
          <v-card-text class="d-flex text-center justify-space-between">
            <v-col cols="2" class="pa-0">
              <p class="font-weight-bold truncate-1-lines">5 năm</p>
              <span class="text-caption">Bán ở Sendo</span>
            </v-col>
            <v-col cols="2" class="pa-0">
              <p class="font-weight-bold truncate-1-lines">990</p>
              <span class="text-caption">Sản phẩm</span>
            </v-col>
            <v-col cols="2" class="pa-0">
              <p class="font-weight-bold truncate-1-lines">2 ngày</p>
              <span class="text-caption">Chuẩn bị hàng</span>
            </v-col>
            <v-col cols="2" class="pa-0">
              <p class="font-weight-bold truncate-1-lines">33%</p>
              <span class="text-caption">Tỉ lệ phản hồi</span>
            </v-col>
            <v-col cols="2" class="pa-0">
              <p class="font-weight-bold truncate-1-lines">Trong vài ngày</p>
              <span class="text-caption">Shop phản hồi</span>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-col>
              <v-btn variant="tonal" class="text-subtitle-1"> <v-icon class="me-1">fa-solid
                  fa-heart-circle-plus</v-icon>
                Theo dõi shop </v-btn>
            </v-col>
            <v-col>
              <v-btn variant="tonal" class="text-subtitle-1"> <v-icon class="me-1"><i
                    class="fa-solid fa-store"></i></v-icon> Vào shop </v-btn>
            </v-col>
            <v-col>
              <v-btn variant="tonal"> <v-icon><i class="fa-solid fa-phone-volume"></i></v-icon></v-btn>
            </v-col>
          </v-card-actions>
          <hr />
          <span class="font-weight-bold ">Gợi ý thêm từ shop</span>
          <v-row class="my-5">
            <v-slide-group center-active show-arrows>
              <v-slide-group-item v-for="(item, index) in items" :key="index">
                <v-img class="mx-3" width="72" height="72" :src="item.image">
                </v-img>
              </v-slide-group-item>
            </v-slide-group>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="7" class="ps-3">
        <v-row class="ms-3 rounded" style="background-color: #fff;">
          <span class="font-weight-bold mx-3 my-3">Mô tả sản phẩm</span>
          <span class="mx-3 my-3">Cây lau nhà 3 trong 1 có chức năng phun sương đa năng - Thiết kế
            sang trong, xếp gọn- Bình xịt nước kèm theo tiện lợi- Vải bông mịn,
            thân nhôm hút nước- Siêu nhẹ- Phun sương tạo ẩm đơn giản bằng thao
            tác bóp và thả, lau đến đâu sạch đến đó, lau đến đ...</span>
          <span class="font-weight-bold mx-3 my-3">Chi tiết sản phẩm</span>
          <span class="mx-3 my-3">Cây lau nhà 3 trong 1 có chức năng phun sương đa năng - Thiết kế
            sang trong, xếp gọn- Bình xịt nước kèm theo tiện lợi- Vải bông mịn,
            thân nhôm hút nước- Siêu nhẹ- Phun sương tạo ẩm đơn giản bằng thao
            tác bóp và thả, lau đến đâu sạch đến đó, lau đến đ
          </span>
          <v-btn variant="tonal" class=" ma-auto mb-3 text-subtitle-1" width="600">Xem thêm</v-btn>
        </v-row>


      </v-col>
    </v-row>

  </v-container>
  <v-container>
    <span class="font-weight-bold">Ở đây có sản phẩm bạn thích</span>
  </v-container>

</template>

<script>

import {mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image: "/images/ldBoDr6GvVuM85XVQegS_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 2,
          image: "/images/gbPRF3zVuA5iEVQpXMQf_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 3,
          image: "/images/Z8r0MCCFkTxr4SqMNFiJ_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 4,
          image: "/images/ldBoDr6GvVuM85XVQegS_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 5,
          image: "/images/gbPRF3zVuA5iEVQpXMQf_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 6,
          image: "/images/Z8r0MCCFkTxr4SqMNFiJ_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 7,
          image: "/images/ldBoDr6GvVuM85XVQegS_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 8,
          image: "/images/gbPRF3zVuA5iEVQpXMQf_simg_02d57e_100x100_maxb.jpg",
        },
        {
          id: 9,
          image: "/images/Z8r0MCCFkTxr4SqMNFiJ_simg_02d57e_100x100_maxb.jpg",
        },
      ],
      counter: 0,
    };
  },
  created() {
    // this.getProductById(Number(this.$route.params.id));
    this.getProductById(Number(this.$route.params.id))
    console.log(typeof this.productById.price);
  },
  computed: {
    ...mapGetters(['productById']),

  },
  methods: {
    ...mapActions(['getProductById']),
    formatCurrency(price) {
      let formatted = price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      formatted = formatted.replace(/(₫)(.+)/, "$2$1");
      return formatted.replace(/,/g, ".");
    },
    test() {
      console.log(this.productById)
    },

    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },

};
</script>

<style scoped>
.v-field__input {
  padding: auto;
}

.truncate-1-lines {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>