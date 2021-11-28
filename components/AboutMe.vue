<template>
  <div class="about">
    <div class="container">
      <div class="about__inner d-flex align-items-center">
        <div class="about__img">
          <img src="/images/about/me.png" alt="me">
        </div>
        <div class="about__info">
          <div class="about__name">
            Макиров Серик Калиулович
          </div>
          <div class="about__line"></div>

          <div class="about__text">
            Врач вертебролог, травматолог-ортопед
            Доктор медицинских наук, профессор
          </div>
          <div class="about__experience">
            Стаж более 40 лет
          </div>
          <div class="about__awards">
            Заслуженный врач Российской Федерации, Академик РАЭН
          </div>

          <div class="additional__information d-flex justify-content-between align-items-center">
            <div class="additional__info" @click="toggleModal()">Подробнее</div>
            <a class="link" href="https://prodoctorov.ru/moskva/vrach/196283-makirov/">
              <img src="/images/about/link.svg" alt="link">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" v-bind:style="{ display: show ? 'block' : 'none' }">
      <div class="modal__content">
        <div class="modal__exit" @click="toggleModal()">
          <img src="/images/exit.svg" class="transform" alt="exit">
        </div>

        <div class="modal__info">
          <div class="modal__img d-flex justify-content-center">
            <img src="/images/about/me.png" alt="me">
          </div>

          <div class="modal__text">
            <p class="modal__title">
              Макиров Серик Калиулович
            </p>

            <p>
              Врач вертебролог, травматолог-ортопед Доктор медицинских наук, профессор
            </p>

            <p class="modal__text__item">
              Стаж более 40 лет
            </p>

            <p class="modal__text__item">
              Заслуженный врач Российской Федерации, <br>
              Академик РАЭН
            </p>

            <p>
              Серик Калиулович является ведущим вертебрологом клиники. Ежегодно проводит более 500 операций на
              позвоночнике.
              Более 80 патентов в травматологии и ортопедии, (1984-2020 гг.)
              Лауреат ордена Н.И. Пирогова, (2011 г.)
              Лауреат ордена Гиппократа, (2014 г.)
              Заслуженный врач Республики Казахстан, (2016 г.)
              Заслуженный врач Российской Федерации, (2020 г.)
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",

  data: () => ({
    show: false
  }),
  methods: {
    toggleModal: function () {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  background: url("/images/about/bg.jpg");
  background-size: cover;

  @media (max-width: 900px) {
    background: url("/images/about/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 600px) {
    background: url("/images/about/bg3.jpg") center;
    background-size: cover;
  }
}

.about__inner {
  @media (max-width: 950px) {
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 60px;
  }

  @media (max-width: 600px) {
    padding-bottom: 100px;
  }
}

.about__img {
  margin-top: 150px;
  margin-bottom: 53px;
  margin-right: 94px;

  @media (max-width: 1290px) {
    margin-top: 84px;
    margin-bottom: 40px;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
    margin-bottom: 10px;
    margin-right: 0;
  }

  & > img {
    @media (max-width: 1290px) {
      width: 400px;
      height: 403px;
    }

    @media (max-width: 600px) {
      width: 307px;
      height: 311.67px;
    }
  }
}

.about__info {
  color: #003D4A;
}

.about__name {
  font-size: 39px;
  font-weight: 600;

  @media (max-width: 1290px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 27px;
  }
}

.about__line {
  margin-top: 25px;
  margin-bottom: 34px;
  width: 230px;
  border-radius: 3px;
  border-top: 3px solid #0197B8;

  @media (max-width: 1290px) {
    margin-top: 20px;
    width: 192px;
    margin-bottom: 28px;
  }

  @media (max-width: 600px) {
    margin-top: 38px;
    margin-bottom: 35px;
  }
}

.about__text {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 1290px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 19px;
  }
}

.about__experience {
  margin-bottom: 27px;
  font-size: 28px;
  font-weight: 500;

  @media (max-width: 1290px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    margin-bottom: 19px;
  }
}

.about__awards {
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 1290px) {
    font-size: 20px;
  }
}

.additional__information {
  margin-top: 25px;

  @media (max-width: 600px) {
    margin-top: 19px;
  }
}

.additional__info {
  text-decoration-line: underline;
  font-size: 23px;
  font-weight: 500;
  color: rgba(1, 151, 184, 1);

  &:hover {
    cursor: pointer;;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
  }
}

.link > img {
  @media (max-width: 350px) {
    width: 150px;
  }
}

.modal {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal__content {
  padding: 25px;
  margin: 20px auto 20px;
  width: 100%;
  max-width: 650px;
  background: #FFFFFF;
  border-radius: 15px;

  @media (max-width: 800px) {
    max-width: 600px;
  }

  @media (max-width: 670px) {
    max-width: 400px;
  }

  @media (max-width: 450px) {
    max-width: 380px;
  }

  @media (max-width: 390px) {
    padding: 20px;
    max-width: 300px;
  }
}

.modal__img > img {
  width: 220px;
  height: 225px;

  @media (max-width: 800px) {
    width: 180px;
    height: 185px;
  }

  @media (max-width: 390px) {
    width: 150px;
    height: 155px;
  }
}

.modal__title {
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 670px) {
    font-size: 20px;
  }

  @media (max-width: 390px) {
    font-size: 17px;
  }
}

.modal__text {
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 61, 74, 1);
  text-decoration: none;
  width: 100%;
  @media (max-width: 670px) {
    font-size: 16px;

    & > p {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
}

.modal__text__item {
  font-weight: 500;
}


.modal__exit {
  position: relative;
  top: -5%;
  right: -95%;
  cursor: pointer;

  & > img {
    width: 25px;
    height: 25px;

    @media (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }
}


</style>
