const productsModule={
    state:{
        products: [
            {
                id: 1,
                originalPrice: 290000,
                price: 165000,
                image: 'XtpFqql1EyM7ULv55HNn_simg_b5529c_250x250_maxb.jpg',
                name: 'Chảo siêu chống dính sâu lòng lưới tổ ong 32cm',
                description:3,
                sold: 0,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 2,
                originalPrice: 800000,
                price: 245000,
                image: '5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                description: 1,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 3,
                originalPrice: 159000,
                price: 129000,
                image: '7BbRxQHXdjcFlXBLiqM9_simg_b5529c_250x250_maxb.jpg',
                // image: './images/de75bxOhygSxVPoBJ8G0_simg_b5529c_250x250_maxb.jpg',
                name: 'Bàn ủi Du Lịch Mini Phillips Gấp Gọn Tiện Lợi Mang Đi Du Lịch Nhỏ Nhắn',
                description:2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 4,
                originalPrice: 89000,
                price: 37000,
                image: 'Ehhi8LoRQ6Pn9tKQr8uA_simg_b5529c_250x250_maxb.jpg',
                name: 'Combo 5 chai nước thủy tinh có dây xách 300ml an toàn vệ sinh',
                description: 2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 5,
                originalPrice: 149000,
                price: 99000,
                image: 'r6nWRYnSDxca0THKb6os_simg_b5529c_250x250_maxb.png',
                name: 'Đầm ôm nữ QKT đầm thun body thiết kế kẻ ngang da03',
                description: 2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 6,
                originalPrice: 800000,
                price: 245000,
                image: '5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                description: 2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 7,
                originalPrice: 800000,
                price: 245000,
                image: '5JRbVAERPNl9WiVsE4Lz_simg_de2fe0_350x350_maxb.jpg',
                name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                description: 3,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 8,
                originalPrice: 26000,
                price: 11000,
                image: 'vtTtuC2STfG0AErMUmhE_simg_b5529c_250x250_maxb.jpg',
                name: 'Combo 10 Đôi đũa gỗ tre được vót thủ công, không sơn phủ đánh bóng còn độ nhám tự nhiên LeeVan',
                description:3,
                sold: 0,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 9,
                originalPrice: 8000,
                price: 2500,
                image: 'EAw2qbpXHiv3hc6b3S3x_simg_b5529c_250x250_maxb.jpg',
                name: 'Giấy ăn gấu trúc Sipiao (300 tờ/gói)',
                description: 1,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 10,
                originalPrice: 190000,
                price: 119000,
                image: '/88tr0TNr4r4ND2d5w4um_simg_b5529c_250x250_maxb.jpg',
                name: 'Áo Mưa 1 Người, 2 Người Phản Quang, Vải Dù Dày Dặn Chống Thấm Cao Cấp Có Kính Che Mặt, Che Gương',
                description:2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 11,
                originalPrice: 800000,
                price: 245000,
                image: '4pigayII3VrS8LQS9cFX_simg_b5529c_250x250_maxb.jpg',
                name: 'Combo 5 bóng đèn Led 30W tiết kiệm điện',
                description: 2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
            {
                id: 12,
                originalPrice: 13900000,
                price: 7990000,
                image: 'jyZOBoRf10dF32M8D8d1_simg_b5529c_250x250_maxb.jpg',
                name: 'Xiaomi Mi TV A2 58 inch - Đen',
                description: 2,
                sold: 5,
                ratings: '4.7',
                location: 'TP.HCM'

            },
        ],
        productById: null,
    },
    getters:{
        products: state=>state.products,
        productById: state=>state.productById,
    },
    mutations:{
        GET_PRODUCT_BY_ID(state, product){
            state.productById = product
        }
    },
    actions:{
        getProductById({commit, state}, productId){
            commit('GET_PRODUCT_BY_ID', state.products.find(product => product.id === productId))
        }
    },
    
}
export default productsModule