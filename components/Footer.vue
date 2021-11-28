<template>
  <footer>
    <div class="container">
      <div class="footer__inner">
        <div class="first__line d-flex align-items-center">
          <div class="footer__logo">
            <img src="/images/footer/logo.png" alt="logo">
          </div>
          <div class="footer__info d-flex justify-content-between align-items-center">
            <div class="footer__city d-flex align-items-center">
              <img src="/images/footer/place.svg" class="icon transform" alt="place">
              Москва
            </div>
            <div class="footer__tel d-flex align-items-center">
              <img src="/images/footer/phone.svg" class="icon transform" alt="phone">
              <a class="footer__phone" href="tel:84956625885">8 (495) 662-58-85</a>
            </div>
            <a href="https://www.youtube.com/channel/UC_naXlwqsuWZPU5qSuXsZRg">
              <img class="footer__youtube transform" src="/images/footer/youtube.svg" alt="youtube">
            </a>
            <a href="https://www.instagram.com/dr.makirov">
              <img class="footer__insta transform" src="/images/footer/instagram.svg" alt="instagram">
            </a>
          </div>
        </div>

        <div class="second__line d-flex justify-content-between">
          <div class="footer__address d-flex justify-content-between align-items-center">
            <img src="/images/footer/place.svg" class="icon transform" alt="place">
            ул. Госпитальная площадь дом 2 стр 1
          </div>
          <div class="footer__address d-flex justify-content-between align-items-center">
            <img src="/images/footer/place.svg" class="icon transform" alt="place">
            улица Брянская дом 3, клиника "Семейная"
          </div>
        </div>

        <nav class="footer__nav d-flex justify-content-between">
          <a class="nav__link" v-for="item in navItems"
             @click="openSection(item.path)"
             :key="item.id">
            {{ item.name }}
          </a>
        </nav>

        <div class="copyright d-flex align-items-center">
          <div class="line mr-auto"></div>
          <div class="copyright__item d-flex align-items-center justify-content-center">
            <img src="/images/footer/copyright.svg" class="mr-2" alt="copyright">
            Центр вертебрологии профессора Макирова. Все права защищены.
          </div>
          <div class="line ml-auto"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    openSection(index) {
      let services = document.getElementById(index);
      let top = window.scrollY + services.getBoundingClientRect().y - 100;
      window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
  },

  data() {
    return {
      navItems: [
        {
          id: 0,
          name: "Врачи",
          path: "Team",
        },
        {
          id: 1,
          name: "Адреса",
          path: "Address",
        },
        {
          id: 2,
          name: "Вопросы",
          path: "Questions",
        },
        {
          id: 3,
          name: "Отзывы",
          path: "Reviews",
        },
        {
          id: 4,
          name: "Стационар",
          path: "Hospital",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  background: linear-gradient(90deg, #3E697E 0%, #245076 100%);
}

.footer__inner {
  padding: 125px 0 80px;

  @media (max-width: 1290px) {
    padding: 89px 0 80px;
  }
}

.footer__logo > img {

  @media (max-width: 1290px) {
    width: 160px;
    height: 40.49px;
  }
}

.footer__info {
  margin-left: auto;
  width: 100%;
  max-width: 675px;
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }
}

.icon {
  margin-right: 14px;

  @media (max-width: 1290px) {
    margin-right: 12px;
  }
}

.footer__city {
  font-size: 22px;
  font-weight: 600;

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

.footer__tel > img {

  @media (max-width: 1290px) {
    width: 20px;
    height: 20px;
  }
}

.footer__phone {
  font-size: 31px;
  font-weight: 600;
  color: #FFFFFF;

  &:hover {
    color: #e3dcdc;
    text-decoration: none;
  }

  @media (max-width: 1290px) {
    font-size: 25px;
  }
}

.second__line {
  margin-top: 75px;

  @media (max-width: 1290px) {
    margin-top: 63px;
  }
}

.footer__address {
  font-size: 24px;
  font-weight: 400;

  & > img {
    @media (max-width: 1290px) {
      width: 19px;
      height: 20px;
    }
  }

  @media (max-width: 1290px) {
    font-size: 20px;
  }
}

.footer__nav {
  margin-top: 77px;

  @media (max-width: 1290px) {
    margin-top: 69px;
  }
}

.nav__link {
  font-size: 22px;
  font-weight: 400;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #eae3e3;
  }

  @media (max-width: 1290px) {
    font-size: 18px;
  }
}

.line {
  width: 100%;
  max-width: 219px;
  border-top: 2px solid rgba(255, 255, 255, 0.44);
  border-radius: 3px;

  @media (max-width: 1290px) {
    max-width: 173px;
  }
}

.copyright {
  margin-top: 81px;
}

.copyright__item {
  font-size: 19px;
  font-weight: 400;

  @media (max-width: 1290px) {
    font-size: 17px;
  }
}

</style>
