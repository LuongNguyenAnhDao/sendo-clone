<template>
  <div class="px-9">
    <div
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #ffffff; 
        padding: 15px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
        z-index: 1000;
      "
    >
      <v-row class="d-flex justify-space-between">
        <v-col cols="1">
          <v-img
            width="64"
            height="48"
            src="./images/HIJ2DGOZlohnkJBQxSVY.png"
          ></v-img>
        </v-col>
        <v-col cols="10" class="d-flex align-center justify-space-between pa-0">
          <v-row align="center" justify="center" class="text-center">
            <v-col cols="2" class="py-auto text-subtitle-2"
              >Sendo Farm là gì?</v-col
            >
            <v-col cols="2" class="px-0 text-subtitle-2"
              >Tầm nhìn - Sứ mệnh</v-col
            >
            <v-col cols="1" class="px-0 text-subtitle-2">Quy mô</v-col>
            <v-col cols="2" class="px-0 text-subtitle-2"
              >Hướng dẫn mua hàng</v-col
            >
            <v-col cols="1" class="px-0 text-subtitle-2">Tải ứng dụng</v-col>
            <v-col cols="2" class="px-0 text-subtitle-2"
              >Đăng ký chào hàng</v-col
            >
            <v-col cols="1" class="px-0 text-subtitle-2">Tin tức</v-col>
            <v-col cols="1" class="px-0">
              <v-btn
                variant="tonal"
                class="text-subtitle-2"
                style="background-color: #3aaa35; color: white"
              >
                <span class="">Đăng ký đối tác</span></v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-row
      style="
        background-image: url(https://media3-og.scdn.vn/og/2024/01_24/wfs4sSxFIg675v73mT6E.webp);
        background-size: contain;
        position: relative;
        margin-top: 100px;
      "
    >
      <v-col cols="5">
        <div class="position-relative mb-2" style="padding-top: 64px">
          <div
            class="position-absolute"
            style="left: 250px; top: 64px; transform: translateY(-100%)"
          >
            <v-img
              width="126"
              height="34"
              src="./images/OfD1GdLLI6YZkk3p1OPy.png"
            ></v-img>
          </div>
          <v-img
            width="332"
            height="60"
            src="./images/XRiLEHViq6sUemtBd6IR.png"
          ></v-img>
        </div>
        <span style="color: #3aaa35"
          >Chuyên cung cấp nông sản tươi sạch, an toàn và chất lượng cao cho
          người tiêu dùng, hệ thống đa tích hợp công nghệ và phân phối theo mô
          hình:</span
        >
        <v-row class="d-flex justify-space-between mt-2">
          <v-col>
            <v-text-field density="compact" variant="plain" readonly flat>
              <template v-slot:prepend>
                <v-img
                  width="40"
                  height="40"
                  src="./images/waVrUx0di6KKg6J64tEI.png"
                ></v-img>
              </template>
              <span class="font-weight-bold">Được bảo trợ bởi</span>
              <span style="font-size: 14px"
                >Dự án phát triển Nông nghiệp số của Tập đoàn FPT. Được Sendo
                phân phối</span
              >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field density="compact" variant="plain" readonly flat>
              <template v-slot:prepend>
                <v-img
                  width="40"
                  height="40"
                  src="./images/uVb0lQ70cJb3Euu8Hihu.png"
                ></v-img>
              </template>
              <span class="font-weight-bold">Nay mua mai nhận</span>
              <span style="font-size: 14px"
                >Mua hôm nay, ngày mai lấy hàng tại điểm nhận hàng Sendo
                Farm</span
              >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-space-between">
          <v-col>
            <v-text-field density="compact" variant="plain" readonly flat>
              <template v-slot:prepend>
                <v-img
                  width="40"
                  height="40"
                  src="./images/xphSyMetKuJfLe9ZMR2p.png"
                ></v-img>
              </template>
              <span class="font-weight-bold">Miễn phí giao hàng</span>
              <span style="font-size: 14px"
                >Giao đến tận Điểm nhận hàng hoàn toàn miễn phí</span
              >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field density="compact" variant="plain" readonly flat>
              <template v-slot:prepend>
                <v-img
                  width="40"
                  height="40"
                  src="./images/1oA0dQY211LbLdttfjCL.png"
                ></v-img>
              </template>
              <span class="font-weight-bold">Hoàn tiền ngay nếu hàng lỗi</span>
              <span style="font-size: 14px"
                >Sendo Farm cam kết chất lượng và hoàn tiền ngay khi sản phẩm có
                lỗi</span
              >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="7"></v-col>
      <v-img
        width="12.5%"
        height="auto"
        src="./images/FkiwTvLJJZ10CvHwEajJ.png"
        style="position: absolute; right: 0; top: 39%"
      ></v-img>
    </v-row>
    <v-row class="px-0" style="padding-top: 64px; background-color: #f5fbf7">
      <v-container class="d-flex flex-column align-center">
        <span class="text-h4 mb-9" style="color: #3aaa35"
          >Tầm nhìn - Sứ mệnh</span
        >
        <v-img
          src="./images/maxresdefault.jpg"
          width="430"
          height="242"
        ></v-img>
        <v-row class="my-5">
          <v-col cols="4" class="d-flex">
            <v-col cols="2">
              <v-img
                src="./images/uAVJGAyZPnQEtSqR1iPX.png"
                height="64"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <span
                >Sendo Farm là cam kết mạnh mẽ của FPT với ngành nông nghiệp số,
                mong muốn kiểm soát từ canh tác, sản xuất, vận chuyển đến phân
                phối tới bàn ăn.
              </span>
            </v-col>
          </v-col>
          <v-col cols="4" class="d-flex">
            <v-col cols="2">
              <v-img
                src="./images/5jUSV523SV7EocQ9r9Wd.png"
                height="64"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <span
                >Sendo Farm sẽ là cú hích thúc đẩy mạnh mẽ chuyển đổi số cho
                ngành nông nghiệp và cho FPT được hiện thực sứ mệnh kiến tạo
                hạnh phúc cho người dân, quốc gia, doanh nghiệp.
              </span>
            </v-col>
          </v-col>
          <v-col cols="4" class="d-flex">
            <v-col cols="2">
              <v-img
                src="./images/2b4zKqxPWdNiIVEcdGk1.png"
                height="64"
              ></v-img>
            </v-col>
            <v-col cols="10">
              <span
                >Với sứ mệnh trao gửi nông sản Việt đến người Việt đạt chuẩn an
                toàn, Sendo Farm luôn nỗ lực từng ngày để ứng dụng công nghệ
                chuyển đổi số trong nông nghiệp, góp phần tạo nên hàng triệu bữa
                ăn sạch mỗi ngày.
              </span>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row class="mt-9">
      <v-container class="d-flex flex-column align-center">
        <v-img
          src="./images/mqaYJkEgi0XxP0NOOJEn.png"
          width="144"
          height="72"
        ></v-img>
        <span class="text-h4 mt-9" style="color: #3aaa35"
          >Giải thưởng Sao Khuê 2022</span
        >
        <v-row class="my-5">
          <v-col cols="6">
            <v-img
              src="./images/1XnSFv4qZATfVecqRt2w.webp"
              width="642"
              height="326"
            ></v-img>
          </v-col>
          <v-col cols="6">
            <p>
              <b style="display: block; margin-bottom: 8px"
                >SENDO FARM VINH DỰ NHẬN GIẢI SAO KHUÊ 2022</b
              >
              Ngày 23/04/2022, Lễ trao Giải Sao Khuê 2022 – giải thưởng danh giá
              nhất của ngành phần mềm và CNTT do Hiệp hội Phần mềm và Dịch vụ
              CNTT (VINASA) đã diễn ra tại Hà Nội.
            </p>
            <p class="mt-3">
              Khẳng định vị trí tiên phong trong chuyển đổi số nông nghiệp và
              cung ứng thực phẩm sạch bằng thương mại điện tử, dịch vụ Sendo
              Farm của sàn thương mại điện tử Sendo vinh dự là đơn vị duy nhất
              được vinh danh trong hạng mục Giải pháp cho Nông nghiệp và Chế
              biến thực phẩm.
            </p>
            <p class="mt-3">
              Hơn 500 tấn nông sản Việt tiếp cận với người tiêu dùng qua sàn
              TMĐT Sendo trong năm 2021, bất chấp những tác động của đại dịch,
              là một minh chứng cho hiệu quả của thương mại điện tử.
            </p>
            <v-btn
              variant="text"
              class="text-body-1"
              style="color: #0f62fe; font-weight: 700"
              >Xem chi tiết ></v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row class="mt-9" style="background-color: #f5fbf7">
      <v-container class="d-flex flex-column align-center">
        <span class="text-h4 mb-9" style="color: #3aaa35">Quy mô</span>
        <v-img
          src="./images/ZfeXTBG9tgWBwzhom6lY.png"
          width="1172"
          height="640"
        ></v-img>
      </v-container>
    </v-row>
    <v-row class="mt-9">
      <v-container class="d-flex flex-column align-center">
        <span class="text-h4" style="color: #3aaa35"
          >Tải ứng dụng Sendo Farm</span
        >
        <span class="mb-3 text-body-1"
          >Tải app trên iOS hoặc Android để sử dụng nhiều chương trình khuyến
          mãi hấp dẫn.</span
        >
        <span class="text-body-1"
          >Nông sản sạch chất lượng được bảo trợ bởi FPT</span
        >
        <v-row class="mt-5">
          <v-col>
            <v-img
              src="./images/qYZCzW9I97SNYDOyyQma.png"
              width="120"
              height="40"
            ></v-img>
          </v-col>
          <v-col>
            <v-img
              src="./images/fi82Yh0JVbkOWFzigQXV.png"
              width="120"
              height="40"
            ></v-img>
          </v-col>
        </v-row>
        <v-img
          class="mt-9"
          src="./images/6C1W4tlIrBpuxhGPPXvl.png"
          width="758"
          height="438"
        ></v-img>
      </v-container>
    </v-row>
  </div>
  <div style="background-color: #27343e; color: white" class="pb-5">
    <v-container>
      <v-row>
        <v-col class="text-caption">
          <p class="mb-3 font-weight-bold">
            Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
          </p>
          <p class="mb-3">
            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20,
            ngày 26/04/2022.
          </p>
          <p class="mb-3">Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
          <p class="mb-3">
            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
            Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
            Thành phố Hồ Chí Minh, Việt Nam.
          </p>
          <p class="mb-3">Email: lienhe@sendo.vn</p>
          <v-row>
            <v-col cols="7" xs="7" sm="5" md="4" lg="3" xl="3" class="pb-0">
              <v-img src="./images/XhpGDnvWqrlKeHLst3aS.png"></v-img>
            </v-col>
            <v-col cols="7" xs="7" sm="5" md="4" lg="3" xl="3" class="pb-0">
              <v-img src="./images/h6lEMGIAt4Uapd0Mls34.png"></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <p class="mb-3 font-weight-bold text-caption">
            Đăng ký nhận bản tin ưu đãi khủng từ Sendo
          </p>
          <v-form>
            <v-text-field
              variant="solo"
              placeholder="Email của bạn là"
              density="compact"
            >
              <template v-slot:append>
                <v-btn btn color="#ee2624">
                  <span class="text-body-2 font-weight-bold">Đăng ký</span>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>