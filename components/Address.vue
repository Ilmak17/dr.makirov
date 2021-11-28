<template>
  <div class="address" id="Address">
    <div class="container d-flex justify-content-between">
      <div class="address__inner">
        <div class="title text-left text-white">Наш адрес</div>

        <div class="address__item">
          <div class="address__text d-flex">
            <div class="address__text__img">
              <img src="/images/address/place.svg" alt="place">
            </div>
            <div>
              метро Бауманская, ул. Госпитальная площадь дом 2 стр 1
            </div>
          </div>
          <div class="address__phone d-flex align-items-center mb-4">
            <div class="address__phone__img">
              <img src="/images/address/phone.svg" alt="place">
            </div>
            <div>
              <a class="address__tel" href="tel:84953613226">8 (495) 361 32 26</a>
            </div>
          </div>

          <div class="address__text d-flex">
            <div class="address__text__img">
              <img src="/images/address/place.svg" alt="place">
            </div>
            метро киевская, улица Брянская дом 3, клиника  "Семейная"
          </div>
          <div class="address__phone d-flex">
            <div class="address__phone__img mt-1">
              <img src="/images/address/phone.svg" alt="place">
            </div>
            <div>
              <a class="address__tel" href="tel:84956625885">8 (495) 662-58-85</a>
              <div class="address__tel__subtitle">
                Обращайтесь по всем <br> интересующим Вас вопросам
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="app">
        <no-ssr>
          <yandex-map
            ref="map"
            :coords="[55.766293, 37.700496]"
            zoom="11"
            class="yandex__map"
            :controls="[]"
          >
            <ymap-marker
              v-for="n in markers"
              :key="n.id"
              :marker-id="n.id"
              marker-type="placemark"
              :coords="n.coord"
              :balloon="{ body: n.text }"
            ></ymap-marker>
          </yandex-map>
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: "Address",
  components: {
    yandexMap, ymapMarker
  },
  data() {
    return {
      markers: [
        {coord: [55.766293, 37.700496], text: 'Госпитальная площадь, 2с1'},
        {coord: [55.744034, 37.562874], text: 'Брянская улица, 3'},
      ].map((n, i) => ({...n, id: i + 1})),
    };
  },
  methods: {
    onClick(m) {
      this.$refs.map.myMap.balloon.open(m.coord, m.text);
    },
  },
};
</script>

<style scoped lang="scss">

.yandex__map {
  width: 630px;
  height: 700px;

  @media (max-width: 1290px) {
    width: 540px;
    height: 552px;
  }

  @media (max-width: 950px) {
    width: 500px;
    height: 510px;
  }
}

.address {
  background: url("/images/address/bg.jpg");
  background-size: cover;
}

.address__item {
  margin-top: 50px;

  @media (max-width: 1290px) {
    margin-top: 30px;
  }
}

.address__text {
  width: 100%;
  max-width: 450px;
  margin-bottom: 36px;
  font-size: 28px;
  font-weight: 400;

  @media (max-width: 1290px) {
    margin-bottom: 50px;
    font-size: 20px;
  }
}

.address__text__img {
  margin-right: 31px;

  & > img {
    @media (max-width: 1290px) {
      width: 16px;
      height: 19px;
    }
  }

  @media (max-width: 1290px) {
    margin-right: 25px;
  }
}

.address__tel {
  color: #FFFFFF;
  font-size: 31px;
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 1290px) {
    font-size: 24px;
  }
}

.address__tel__subtitle {
  margin-top: 23px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 1290px) {
    margin-top: 13px;
    font-size: 16px;
  }
}

.address__phone__img {
  margin-right: 25px;

  & > img {
    @media (max-width: 1290px) {
      width: 18.34px;
      height: 18.34px;
    }
  }

  @media (max-width: 1290px) {
    margin-right: 20px;
  }
}
</style>
