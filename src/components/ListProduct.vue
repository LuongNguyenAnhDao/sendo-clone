<template>
    <v-container>
        <v-row>
            <v-col cols="6" xs="6" sm="4" md="3" lg="2" xl="2" v-for="(product, i) in products" :key="i" class="pa-1 ">
                <v-card class="rounded-lg" min-height="370">
                    <v-img :src="product.image" cover></v-img>
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
                        <v-chip v-if="product.description===1" density="comfortable" size="x-small" color="rgb(255, 242, 194)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="./images/VOz7ApKp5huVU7A97OAQ.png"></v-img>
                            </template>
                            <span color="rgb(103, 79, 0)">Chọn lọc bởi Sendo</span>
                        </v-chip>
                        <v-chip v-else-if="product.description===2" density="comfortable" size="x-small" color="rgb(253, 237, 226)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="./images/WxthNRjjOz4mP6X4uLj3.png"></v-img>
                            </template>
                            <span color="rgb(253, 237, 226)">Mua trước trả sau</span>
                        </v-chip>
                        <v-chip v-else-if="product.description===3" density="comfortable" size="x-small" color="rgb(242, 243, 244)" variant="flat">
                            <template v-slot:prepend>
                                <v-img width="12" src="./images/uRpqpuUUe3NDEoErtrUo.png"></v-img>
                            </template>
                            <span color="rgb(63, 75, 83)">Trả góp Muadee</span>
                        </v-chip>
                        <v-btn v-if="product.sold===0" color="#f47c7b" class="w-100 rounded-pill" size="x-small" variant="flat">
                            <span class="text-body-2">Mở bán</span>
                        </v-btn>
                        <v-card-text v-else-if="product.sold>0" class="pa-0 pt-1">
                            <span class="text-caption">Đã bán {{ product.sold }}</span>
                        </v-card-text>
                        <v-row>
                            <v-col cols="6" class="pb-0">
                                <v-chip size="small"
                                    variant="text"
                                    class="ps-0"
                                    >
                                    
                                    <template v-slot:append>
                                        <span style="color: #ffc600;">★</span>
                                    </template>
                                    <span >{{ product.ratings}}</span>
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
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    originalPrice: 290000,
                    price: 165000,
                    image: '/images/XtpFqql1EyM7ULv55HNn_simg_b5529c_250x250_maxb.jpg',
                    name: 'Chảo siêu chống dính sâu lòng lưới tổ ong 32cm',
                    description:3,
                    sold: 0,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 2,
                    originalPrice: 800000,
                    price: 245000,
                    image: '/images/5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                    name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                    description: 1,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 3,
                    originalPrice: 159000,
                    price: 129000,
                    image: './images/7BbRxQHXdjcFlXBLiqM9_simg_b5529c_250x250_maxb.jpg',
                    name: 'Bàn ủi Du Lịch Mini Phillips Gấp Gọn Tiện Lợi Mang Đi Du Lịch Nhỏ Nhắn',
                    description:2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 4,
                    originalPrice: 89000,
                    price: 37000,
                    image: './images/Ehhi8LoRQ6Pn9tKQr8uA_simg_b5529c_250x250_maxb.jpg',
                    name: 'Combo 5 chai nước thủy tinh có dây xách 300ml an toàn vệ sinh',
                    description: 2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 5,
                    originalPrice: 149000,
                    price: 99000,
                    image: './images/r6nWRYnSDxca0THKb6os_simg_b5529c_250x250_maxb.png',
                    name: 'Đầm ôm nữ QKT đầm thun body thiết kế kẻ ngang da03',
                    description: 2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 6,
                    originalPrice: 800000,
                    price: 245000,
                    image: './images/5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                    name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                    description: 2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 7,
                    originalPrice: 800000,
                    price: 245000,
                    image: './images/5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                    name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                    description: 3,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 8,
                    originalPrice: 26000,
                    price: 11000,
                    image: './images/vtTtuC2STfG0AErMUmhE_simg_b5529c_250x250_maxb.jpg',
                    name: 'Combo 10 Đôi đũa gỗ tre được vót thủ công, không sơn phủ đánh bóng còn độ nhám tự nhiên LeeVan',
                    description:3,
                    sold: 0,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 9,
                    originalPrice: 8000,
                    price: 2500,
                    image: './images/EAw2qbpXHiv3hc6b3S3x_simg_b5529c_250x250_maxb.jpg',
                    name: 'Giấy ăn gấu trúc Sipiao (300 tờ/gói)',
                    description: 1,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 10,
                    originalPrice: 190000,
                    price: 119000,
                    image: './images/88tr0TNr4r4ND2d5w4um_simg_b5529c_250x250_maxb.jpg',
                    name: 'Áo Mưa 1 Người, 2 Người Phản Quang, Vải Dù Dày Dặn Chống Thấm Cao Cấp Có Kính Che Mặt, Che Gương',
                    description:2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 11,
                    originalPrice: 800000,
                    price: 245000,
                    image: './images/4pigayII3VrS8LQS9cFX_simg_b5529c_250x250_maxb.jpg',
                    name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                    description: 2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
                {
                    id: 12,
                    originalPrice: 13900000,
                    price: 7990000,
                    image: './images/jyZOBoRf10dF32M8D8d1_simg_b5529c_250x250_maxb.jpg',
                    name: 'Xiaomi Mi TV A2 58 inch - Đen',
                    description: 2,
                    sold: 5,
                    ratings: '4.7/5',
                    location: 'TP.HCM'

                },
            ]
        }
    },
    methods: {
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