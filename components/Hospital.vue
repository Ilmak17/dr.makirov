<template>
  <div class="hospital" id="Hospital">
    <div class="container">
      <div class="hospital__title">
        Фото нашего стационара и палат
      </div>

      <swiper :options="swiperOption" class="slider">
        <swiper-slide v-for="(item, index) in photos" :key="index">
          <img class="slide" :src="item.img" alt="photo">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hospital",

  data() {
    return {
      photos: [
        {
          img: require("@/static/images/hospital/img1.png")
        },
        {
          img: require("@/static/images/hospital/img2.png")
        },
        {
          img: require("@/static/images/hospital/img3.png")
        },
        {
          img: require("@/static/images/hospital/img4.png")
        },
        {
          img: require("@/static/images/hospital/img5.png")
        },
        {
          img: require("@/static/images/hospital/img6.png")
        },
        {
          img: require("@/static/images/hospital/img7.png")
        }
      ],

      swiperOption: {
        slidesPerView: 3,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1000,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.hospital {
  background: url("/images/hospital/bg.jpg");
  background-size: cover;
}

.hospital__title {
  padding-top: 140px;
  padding-bottom: 73px;
  font-size: 40px;
  font-weight: 600;
  color: #FFFFFF;
}

.slider {
 padding-bottom: 100px;
}

.slide {
  width: 410px;
  height: 259px;
  border-radius: 10.5607px;
}
</style>
