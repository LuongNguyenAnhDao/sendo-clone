<template>
    <div style="background-color: #ee2624;" class="mb-3">
        <v-container>
            <v-row class="d-flex justify-space-between">
                <v-col cols="5" xs="5" sm="4" md="3" lg="2" xl="2" class="px-0 text-center">
                    <span class="font-weight-black text-h4" style="color: white;">Sendo</span>
                    <v-btn icon color="#ee2624" flat class="mt-n3 d-none d-sm-inline">
                        <v-icon color="white">fa-solid fa-bars</v-icon>
                    </v-btn>
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
                    <v-btn icon color="#ee2624" flat class=" d-sm-none d-inline">
                        <v-icon color="white">fa-solid fa-bars</v-icon>
                    </v-btn>
                    <v-btn icon color="#ee2624" flat class="mt-n1">
                        <v-icon color="white">fa-solid fa-bag-shopping</v-icon>
                    </v-btn>
                    <v-btn btn class="bg-white font-weight-bold mt-n1 d-none d-sm-inline">
                        Đăng nhập
                    </v-btn>
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
                <v-tabs align-tabs="center" slider-color="white" show-arrows>
                    <v-tab v-for="(item, i) in items" :key="i" :text="item" class="text-white text-body-1 mx-8"></v-tab>
                </v-tabs>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
data() {
    return {
        items:['Cho bạn', 'Vệ sinh, chăm sóc nhà cửa', 'Đồ dùng nhà bếp', 'Đầm váy', 'Áo nữ', 'Áo khoác nữ']
    }
},
}
</script>

<style>
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
</style>