<template>
  <header>
    <div class="container d-flex align-items-center">
      <XyzTransition appear xyz="fade up big">
        <div class="header__logo">
          <img src="/images/logo.png" alt="logo">
        </div>
      </XyzTransition>

      <XyzTransition appear xyz="fade in big">
        <div class="header__info d-flex justify-content-between align-items-center">
          <div class="header__city d-flex" @click="openAddress">
            <img src="/images/place.svg" class="icon transform" alt="place">
            Москва
          </div>
          <div class="header__phone d-flex align-items-center">
            <img src="/images/phone.svg" class="icon transform" alt="phone">
            <a class="header__phone" href="tel:84956625885">8 (495) 662-58-85</a>
          </div>
          <a href="https://www.youtube.com/channel/UC_naXlwqsuWZPU5qSuXsZRg">
            <img class="youtube transform" src="/images/youtube.svg" alt="youtube">
          </a>
          <a href="https://www.instagram.com/dr.makirov">
            <img class="insta transform" src="/images/instagram.svg" alt="instagram">
          </a>
        </div>
      </XyzTransition>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    openAddress() {
      let services = document.getElementById("Address");
      let top = window.scrollY + services.getBoundingClientRect().y - 100;
      window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
  }
}
</script>

<style scoped lang="scss">
header {
  padding-top: 33px;
}

.header__logo > img {
  @media (max-width: 1290px) {
    width: 160px;
    height: 40.49px;
  }

  @media (max-width: 790px) {
    margin-right: 10px;
  }
}

.icon {
  margin-right: 14px;

  @media (max-width: 1290px) {
    margin-right: 12px;
  }
}

.header__info {
  margin-left: auto;
  width: 100%;
  max-width: 645px;
}

.header__city {
  cursor: pointer;
  font-weight: 600;
  font-size: 22px;
  color: #003D4A;

  & > img {
    @media (max-width: 1290px) {
      width: 17px;
      height: 22px;
    }
  }

  @media (max-width: 1290px) {
    font-size: 20px;
  }
}

.header__phone {
  font-weight: 600;
  color: #003D4A;
  font-size: 31px;

  & > img {
    @media (max-width: 1290px) {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    text-decoration: none;
    color: #196274;
  }

  @media (max-width: 1290px) {
    font-size: 25px;
  }
}

</style>
