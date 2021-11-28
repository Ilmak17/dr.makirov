<template>
  <footer>
    <div class="container">
      <div class="footer__inner">
        <div class="footer__first d-flex justify-content-between">
          <div class="footer__img">
            <img src="/images/footer/logoMobile.png" alt="logo">
          </div>

          <div class="social d-flex align-items-center">
            <a href="https://www.youtube.com/channel/UC_naXlwqsuWZPU5qSuXsZRg">
              <img class="footer__youtube transform" src="/images/footer/youtube.svg" alt="youtube">
            </a>

            <a href="https://www.instagram.com/dr.makirov">
              <img class="footer__insta transform" src="/images/footer/instagram.svg" alt="instagram">
            </a>
          </div>
        </div>

        <div class="footer__second d-flex justify-content-between">
          <div class="footer__city d-flex align-items-center">
            <img src="/images/footer/place.svg" class="icon transform" alt="place">
            Москва
          </div>
          <div class="footer__tel d-flex align-items-center">
            <img src="/images/footer/phone.svg" class="icon transform" alt="phone">
            <a class="footer__phone" href="tel:84953613226">8 (495) 361 32 26</a>
          </div>
        </div>

        <div class="footer__third">
          <div class="footer__address d-flex align-items-center">
            <img src="/images/footer/place.svg" class="icon transform" alt="place">
            ул. Госпитальная площадь дом 2 стр 1
          </div>
          <div class="footer__address d-flex align-items-center">
            <img src="/images/footer/place.svg" class="icon transform" alt="place">
            улица Брянская дом 3, клиника "Семейная"
          </div>
        </div>

        <div class="copyright d-flex justify-content-center align-items-start text-center">
            <img src="/images/footer/copyrightMobile.svg" class="copyright__img mr-2" alt="copyright">
            Центр вертебрологии профессора Макирова. <br> Все права защищены.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterMobile"
}
</script>

<style scoped lang="scss">
footer {
  background: linear-gradient(90deg, #3E697E 0%, #245076 100%);
}

.footer__inner {
  padding-top: 88px;
  padding-bottom: 50px;

  @media (max-width: 400px) {
    padding-top: 50px;
  }
}

.footer__second {
  margin-top: 40px;

  @media (max-width: 400px) {
    margin-top: 25px;
  }
}

.footer__city {
  & > img {
    width: 17px;
    height: 22px;

    @media (max-width: 400px) {
      width: 15px;
      height: 20px
    }
  }

  font-size: 20px;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 18px;
  }
}

.icon {
  margin-right: 12px;

  @media (max-width: 400px) {
    margin-right: 8px;
  }
}

.footer__tel > img {
    width: 20px;
    height: 20px;


  @media (max-width: 400px) {
    width: 18px;
    height: 18px;
  }
}

.footer__phone {
  color: #FFFFFF;
  font-size: 25px;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (max-width: 330px) {
    font-size: 18px;
  }
}

.footer__third {
  margin-top: 50px;

  @media (max-width: 400px) {
    margin-top: 35px;
  }
}

.footer__address {

  & > img {
    width: 19px;
    height: 20px;

    @media (max-width: 400px) {
      width: 15px;
      height: 20px
    }
  }
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 400px) {
    font-size: 16px;
    margin-bottom: 25px;
  }

  @media (max-width: 350px) {
    font-size: 14px;
  }

  @media (max-width: 330px) {
    font-size: 13px;
  }
}

.copyright {
  padding-top: 44px;
  border-top: 2px solid rgba(255, 255, 255, 0.44);
  font-size: 16px;
  font-weight: 400;


  @media (max-width: 400px) {
    padding-top: 35px;
    font-size: 14px;
  }
}

.copyright__img {
  margin-top: 5px;
}

.footer__youtube {
  margin-right: 53px;

  @media (max-width: 400px) {
    margin-right: 30px;
  }
}
</style>
