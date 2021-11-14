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
        breakpoints: {
          1000: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 2.3,
          },
          750: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 1.5,
          },
          455: {
            slidesPerView: 1.2,
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

  @media (max-width: 1290px) {
    font-size: 28px;
    padding-top: 70px;
    padding-bottom: 37px;
  }

  @media (max-width: 600px) {
    font-size: 27px;
    padding-top: 72px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    padding-top: 55px;
  }
}

.slider {
 padding-bottom: 100px;

  @media (max-width: 1290px) {
    padding-bottom: 87px;
  }

  @media (max-width: 450px) {
    padding-bottom: 50px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.slide {
  width: 410px;
  height: 259px;
  border-radius: 10.5607px;

  @media (max-width: 1290px) {
    width: 350px;
    height: 215px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 180px;
  }
  @media (max-width: 350px) {
    width: 280px;
    height: 150px;
  }

}
</style>
