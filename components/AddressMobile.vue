<template>
  <div class="address" id="Address">
    <div class="container">
      <div class="address__inner">
        <div class="title text-white">Наш адрес</div>

        <div class="address__item">
          <div class="address__text d-flex">
            <div class="address__text__img">
              <img src="/images/address/place.svg" alt="place">
            </div>
            <div>
              метро Бауманская, ул. Госпитальная площадь дом 2 стр 1
            </div>
          </div>
          <div class="address__phone d-flex mb-4">
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
            метро киевская, улица Брянская дом 3, клиника "Семейная"
          </div>
          <div class="address__phone d-flex">
            <div class="address__phone__img">
              <img src="/images/address/phone.svg" alt="place">
            </div>
            <div>
              <a class="address__tel" href="tel:8495662-58-85">8 (495) 662-58-85</a>
              <div class="address__tel__subtitle">
                Обращайтесь по всем <br> интересующим Вас вопросам
              </div>
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
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: "AddressMobile",
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
  width: 100%;
  height: 520px;

  @media (max-width: 600px) {
    height: 491px;
  }

  @media (max-width: 450px) {
    height: 400px;
  }

  @media (max-width: 350px) {
    height: 350px;
  }
}

.address {
  background: url("/images/address/bg2.jpg") center;
  background-size: cover;
}

.address__item {
  padding-top: 54px;
  padding-bottom: 74px;

  @media (max-width: 600px) {
    padding-bottom: 65px;
  }

  @media (max-width: 450px) {
    padding-bottom: 30px;
  }
}

.address__text {
  width: 100%;
  max-width: 450px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 17px;
  }
}

.address__text__img {
  margin-right: 29px;

  & > img {
    width: 16px;
    height: 19px;
  }

  @media (max-width: 600px) {
    margin-right: 24px;
  }

  @media (max-width: 450px) {
    margin-right: 18px;
  }
}

.address__tel {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 450px) {
    font-size: 22px;
  }

}

.address__tel__subtitle {
  margin-top: 14px;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    margin-top: 10px;
  }
}

.address__phone__img {
  margin-right: 22px;

  & > img {
    width: 18.34px;
    height: 18.34px;
  }

  @media (max-width: 600px) {
    margin-right: 22px;
  }

  @media (max-width: 450px) {
    margin-right: 16px;
  }
}
</style>
