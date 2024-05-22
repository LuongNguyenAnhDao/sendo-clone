<template>
    <v-container>

        <v-row>
            <v-col cols="6" xs="6" sm="4" md="3" lg="2" xl="2" v-for="(product) in products" :key="product.id" class="pa-1 ">
                <v-card class="rounded-lg" min-height="370" :to="`/detail/${product.id}`" @click="getProductById(product.id)">
                    <v-img :src="`/images/${product.image}`" cover></v-img>
                    <div class="ma-3">
                        <v-card-text class="pa-0 ">
                            <span class="truncate-2-lines">{{ product.name }}</span>
                        </v-card-text>
                        <v-card-subtitle class="pa-0">
                            <span class="text-decoration-line-through text-caption">{{
                                formatCurrency(product.originalPrice)
                            }}</span>
                            <span class="text-red font-weight-bold"> -{{ Math.floor((product.originalPrice -
                                product.price)
                                /
                                product.originalPrice * 100) }}%</span>

                        </v-card-subtitle>
                        <v-card-title class="text-h6 font-weight-bold text-red pa-0">{{ formatCurrency(product.price)
                            }}</v-card-title>
                        <v-chip v-if="product.description === 1" density="comfortable" size="x-small"
                            color="rgb(255, 242, 194)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="/images/VOz7ApKp5huVU7A97OAQ.png"></v-img>
                            </template>
                            <span color="rgb(103, 79, 0)">Chọn lọc bởi Sendo</span>
                        </v-chip>
                        <v-chip v-else-if="product.description === 2" density="comfortable" size="x-small"
                            color="rgb(253, 237, 226)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="/images/WxthNRjjOz4mP6X4uLj3.png"></v-img>
                            </template>
                            <span color="rgb(253, 237, 226)">Mua trước trả sau</span>
                        </v-chip>
                        <v-chip v-else-if="product.description === 3" density="comfortable" size="x-small"
                            color="rgb(242, 243, 244)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="/images/uRpqpuUUe3NDEoErtrUo.png"></v-img>
                            </template>
                            <span color="rgb(63, 75, 83)">Trả góp Muadee</span>
                        </v-chip>
                        <v-btn v-if="product.sold === 0" color="#f47c7b" class="w-100 rounded-pill" size="x-small"
                            variant="flat">
                            <span class="text-body-2">Mở bán</span>
                        </v-btn>
                        <v-card-text v-else-if="product.sold > 0" class="pa-0 pt-1">
                            <span class="text-caption">Đã bán {{ product.sold }}</span>
                        </v-card-text>
                        <v-row>
                            <v-col cols="6" class="pb-0">
                                <v-chip size="small" variant="text" class="ps-0">

                                    <template v-slot:append>
                                        <span style="color: #ffc600;">★</span>
                                    </template>
                                    <span>{{ product.ratings }}/5</span>
                                </v-chip>
                            </v-col>
                            <v-col cols="6" class="pb-0 text-end">
                                <span class="text-caption ">{{ product.location }}</span>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    computed: mapGetters(['products']),
    methods: {
        ...mapActions(['getProductById']),
        formatCurrency(number) {
            let formatted = number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
            formatted = formatted.replace(/(₫)(.+)/, '$2$1');
            return formatted.replace(/,/g, '.');
        }
    },
}
</script>

<style>
.truncate-2-lines {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>