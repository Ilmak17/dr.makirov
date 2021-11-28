<template>
  <div class="certificates" id="Certificates">
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
        breakpoints: {
          1000: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          }
        },
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

  @media (max-width: 1290px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 27px;
    margin-bottom: 40px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-slide > img {
  width: 410px;
  height: 284px;

  @media (max-width: 1290px) {
    width: 350px;
    height: 244px;
  }

  @media (max-width: 380px) {
    width: 300px;
    height: 220px;
  }
}

</style>
