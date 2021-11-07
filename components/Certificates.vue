<template>
  <div class="certificates">
    <div class="container">
      <div class="certificates__title">
        Сертификаты
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
  name: "Certificates",

  data() {
    return {
      photos: [
        {
          img: require("@/static/images/certificates/img1.png")
        },
        {
          img: require("@/static/images/certificates/img2.png")
        },
        {
          img: require("@/static/images/certificates/img3.png")
        },
        {
          img: require("@/static/images/certificates/img4.png")
        },
        {
          img: require("@/static/images/certificates/img5.png")
        },
        {
          img: require("@/static/images/certificates/img6.png")
        },
        {
          img: require("@/static/images/certificates/img7.png")
        },
        {
          img: require("@/static/images/certificates/img8.png")
        },
        {
          img: require("@/static/images/certificates/img9.png")
        },
        {
          img: require("@/static/images/certificates/img10.png")
        },
        {
          img: require("@/static/images/certificates/img11.png")
        },
        {
          img: require("@/static/images/certificates/img12.png")
        },
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

.certificates__title {
  margin-bottom: 60px;
  font-size: 40px;
  font-weight: 600;
  color: #003D4A;
}

.swiper-slide > img {
  width: 410px;
  height: 284px;
}

</style>
