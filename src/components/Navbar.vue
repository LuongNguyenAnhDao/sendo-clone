<template>
    <div style="background-color: #ee2624; position: fixed; top: 0; z-index: 9;" class="mb-3 w-100">
        <v-container>
            <v-row class="d-flex justify-space-between ">
                <v-col cols="5" xs="5" sm="4" md="3" lg="2" xl="2" class="px-0 text-center">
                    <router-link to="/"><span class="font-weight-black text-h4"
                            style="color: white;">Sendo</span></router-link>
                    <!-- <v-btn icon color="#ee2624" flat class="mt-n3 d-none d-sm-inline">
                        <v-icon color="white">fa-solid fa-bars</v-icon>
                        
                    </v-btn> -->
                    <!-- <v-menu location="buttom" open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-icon color="white" v-bind="props">fa-solid fa-bars</v-icon>
                        </template>
<v-list>
    <v-list-item v-for="(item, index) in menu" :key="index" :value="index">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
    </v-list-item>
</v-list>
</v-menu> -->
                    <v-menu open-on-hover class="text-left">
                        <template v-slot:activator="{ props }">
                            <v-icon color="white" v-bind="props" class="ms-3 mt-n3 d-none d-sm-inline-block">fa-solid
                                fa-bars</v-icon>
                        </template>
                        <v-list width="300px" style="position: relative; margin-left: -130px;">
                            <v-list-item v-for="(item, index) in menu" :key="index" :value="index">
                                <!-- <v-list-item-title>{{ item.name }}</v-list-item-title> -->
                                <v-menu open-on-hover location="right">
                                    <template v-slot:activator="{ props }">
                                        <!-- <v-list-item-title v-bind="props" @click="test()" @mouseenter="getMenuById(item.id)">{{ item.name }}</v-list-item-title>
                             -->

                                        <v-btn variant="elevated"
                                            class="text-subtitle-1 d-flex justify-start w-100 ma-0 custom-hover-button"
                                            v-bind="props" @mouseenter="getMenuById(item.id)"> <v-icon size="small"
                                                class="me-1">{{
                                                    item.icon }}</v-icon>
                                            {{ item.name }} </v-btn>

                                    </template>
                                    <v-list width="900px" height="677px">
                                        <v-row class="d-flex justify-start">
                                            <v-col cols="3" class="pa-0 ms-5 " v-for="(item, index) in menuById.list"
                                                :key="index" :value="index">
                                                <v-list-item>
                                                    <v-btn variant="text" class=" w-100 d-flex justify-start"><span
                                                            class="font-weight-bold text-subtitle-2">{{ item.name
                                                            }}</span></v-btn>
                                                    <v-btn variant="text"
                                                        class=" w-100 text-subtitle-2 d-flex justify-start"
                                                        v-for="item in item.list" :key="item.id"><span>{{
                                                            item.name
                                                        }}</span></v-btn>
                                                </v-list-item>
                                            </v-col>
                                        </v-row>

                                    </v-list>
                                </v-menu>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>

                <v-col xs="" sm="" md="6" lg="8" xl="8" class="px-0 d-none d-sm-flex">
                    <v-text-field density="compact" label="Tìm trên Sendo" variant="solo" rounded-sm>
                        <template v-slot:append>
                            <v-btn btn class="bg-white">
                                <v-icon icon="fa-solid fa-magnifying-glass" />
                            </v-btn>

                        </template>

                    </v-text-field>
                </v-col>
                <v-col cols="5" xs="5" sm="4" md="3" lg="2" xl="2" class="px-0">
                    <!-- <v-btn icon color="#ee2624" flat class=" d-sm-none d-inline">
                        <v-icon color="white">fa-solid fa-bars</v-icon>
                    </v-btn> -->
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-icon color="white" v-bind="props" class="mb-3 ms-3 d-sm-none d-inline">fa-solid
                                fa-bars</v-icon>
                        </template>
                        <v-list width="300px" style="position: relative; margin-left: -130px;">
                            <v-list-item v-for="(item, index) in menu" :key="index" :value="index">
                                <!-- <v-list-item-title>{{ item.name }}</v-list-item-title> -->
                                <v-menu open-on-hover location="right">
                                    <template v-slot:activator="{ props }">
                                        <!-- <v-list-item-title v-bind="props" @click="test()" @mouseenter="getMenuById(item.id)">{{ item.name }}</v-list-item-title>
                             -->

                                        <v-btn variant="elevated"
                                            class="text-subtitle-1 d-flex justify-start w-100 ma-0 custom-hover-button"
                                            v-bind="props" @mouseenter="getMenuById(item.id)"> <v-icon size="small"
                                                class="me-1">{{
                                                    item.icon }}</v-icon>
                                            {{ item.name }} </v-btn>

                                    </template>
                                    <v-list width="900px" height="677px">
                                        <v-row class="d-flex justify-start">
                                            <v-col cols="3" class="pa-0 ms-5 " v-for="(item, index) in menuById.list"
                                                :key="index" :value="index">
                                                <v-list-item>
                                                    <v-btn variant="text" class=" w-100 d-flex justify-start"><span
                                                            class="font-weight-bold text-subtitle-2">{{ item.name
                                                            }}</span></v-btn>
                                                    <v-btn variant="text"
                                                        class=" w-100 text-subtitle-2 d-flex justify-start"
                                                        v-for="item in item.list" :key="item.id"><span>{{
                                                            item.name
                                                        }}</span></v-btn>
                                                </v-list-item>
                                            </v-col>
                                        </v-row>

                                    </v-list>
                                </v-menu>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-btn icon color="#ee2624" flat class="mt-n1">
                        <v-icon color="white">fa-solid fa-bag-shopping</v-icon>
                    </v-btn>
                    <v-btn btn class="bg-white font-weight-bold mt-n1 d-none d-sm-inline" @click="dialog = true">
                        Đăng nhập
                    </v-btn>
                    <v-dialog v-model="dialog" width="500px">
                        
                        <v-card max-width="" class="pa-5">
                            <v-btn variant="text" class="ms-auto text-subtitle-2 font-weight-bold" text="Thoát" @click="dialog = false"></v-btn>
                            <v-card-title class="text-h6 font-weight-bold pa-0">Xin chào,</v-card-title>
                            <v-card-text class="text-body-2 ps-0 pt-0 mb-4">Đăng nhập hoặc đăng ký tài khoản</v-card-text>
                            <v-text-field placeholder="Nhập số điện thoại" variant="outlined" class="mb-3"></v-text-field>
                            <v-btn btn variant="tonal" size="large" class="bg-red mb-15 font-weight-bold text-subtitle-1">Tiếp tục</v-btn>
                            <v-card-text class="text-caption text-medium-emphasis ps-0 ">Hoặc thông qua</v-card-text>
                            <template v-slot:actions>
                                <v-row>
                                    <v-col cols="1" class="pa-0 me-2"><v-img width="45px" cover src="/images/1200px-Facebook_Logo_2019.png"></v-img></v-col>
                                    <v-col cols="1" class="pa-0 me-2"><v-img width="45px" cover src="/images/2991148.png"></v-img></v-col>
                                    <v-col cols="1" class="pa-0 me-2"><v-img width="45px" cover src="/images/fptid.jpg"></v-img></v-col>
                                </v-row>
                                
                            </template>
                        </v-card>
                    </v-dialog>
                    <v-btn icon color="#ee2624" flat class="mt-n1 d-sm-none d-inline">
                        <v-icon color="white">fa-regular fa-circle-user</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row class="d-flex d-sm-none">
                <v-col class="pt-0">
                    <v-text-field density="compact" label="Tìm trên Sendo" variant="solo" rounded-sm>
                        <template v-slot:prepend-inner>
                            <v-btn btn class="bg-white" flat>
                                <v-icon icon="fa-solid fa-magnifying-glass" />
                            </v-btn>

                        </template>

                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-tabs show-arrows="false" align-tabs="center" slider-color="white" class="">
                    <v-tab v-for="(item, i) in items" :key="i" :text="item" class="text-white text-body-1 mx-8"></v-tab>
                </v-tabs>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            items: ['Cho bạn', 'Vệ sinh, chăm sóc nhà cửa', 'Đồ dùng nhà bếp', 'Đầm váy', 'Áo nữ', 'Áo khoác nữ'],
            dialog: false,
        }
    },
    created() {

    },
    computed: mapGetters(['menu', 'menuById']),
    methods: {
        ...mapActions(['getMenuById']),
        test() {
            console.log(this.menuById)
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #d52220;
    color: white;
    height: auto;
}

.v-input {
    width: 100%;
}

.v-input__details {
    display: none !important;
}

.v-toolbar-title {
    flex: none !important;
}

.v-main {
    flex: none !important;
}

.custom-hover-button {
    transition: background-color 0.3s, color 0.3s;
    /* Thêm hiệu ứng chuyển đổi mượt */
}

.custom-hover-button:hover {
    background-color: pink;
    /* Đặt nền thành màu hồng */
    color: red;
    /* Đặt chữ thành màu đỏ */
}
.v-slide-group__next, .v-slide-group__prev {
  display: none !important;
}
</style>