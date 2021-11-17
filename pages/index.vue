<template>
  <div>
    <Header v-if="windowSize > 600"/>
    <HeaderMobile v-if="windowSize <= 600"/>

    <a href="tel:84953613226" class="tel-bt" v-if="windowSize <= 600">
      <div class="text-call">
        <img src="/images/tel.svg" alt="phone">
      </div>
    </a>
    <Nav v-if="windowSize > 800"/>
    <Intro/>
    <AboutMe/>

    <Treatment v-if="windowSize > 900"/>
    <TreatmentMobile v-if="windowSize <= 900"/>

    <Diagnostics v-if="windowSize > 900"/>
    <DiagnosticsMobile v-if="windowSize <= 900"/>
    <Request/>
    <Team/>

    <Address v-if="windowSize > 900"/>
    <AddressMobile v-if="windowSize <= 900"/>

    <Reviews/>
    <Hospital/>
    <Questions/>

    <Footer v-if="windowSize > 951"/>
    <FooterMobile v-if="windowSize <= 950"/>

    <b-modal id="my-modal" ref="my-modal" hide-header centered hide-footer>
      <b-form class="form">
        <div class="form__title">
          Заказать обратный звонок
        </div>
        <div class="modal__exit" @click="hideFirstModal">
          <img src="/images/exit.svg" class="transform" alt="exit">
        </div>
        <div class="form__subtitle">
          Отправьте нам свой номер телефона
          и мы позвоним Вам для консультации и записи на прием
        </div>

        <b-form-group class="form__group"
                      id="input-group-1"
                      label="Ваше ФИО"
                      label-for="input-1"
        >
          <b-form-input
            id="input-1"
            class="form__input"
            v-model="form.name"
            type="text"
            placeholder="Громов Андрей Олегович"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group class="form__group"
                      id="input-group-2"
                      label="Ваш номер телефона"
                      label-for="input-2"
        >
          <masked-input
            class="form__input"
            mask="\+\7 (111) 111-11-11"
            placeholder="+7 (___) ___ __ __ "
            v-model="form.phone"
          />
        </b-form-group>

        <button class="btn__callback d-flex align-items-center" @click="showSecondModal">
          <img src="/images/callback.svg" class="callback__icon" alt="callback">
          Жду звонка
        </button>
        <div class="modal__text">
          Нажимая на кнопку, вы даете свое согласие на обработку персональных данных
        </div>
      </b-form>
    </b-modal>

    <b-modal ref="second-modal" id="second-modal" hide-header centered hide-footer>
      <div class="d-flex justify-content-center">

        <div class="modal__ok ">
          <div class="modal__ok_item">
            <img src="/images/ok.svg" alt="ok">
          </div>
        </div>
        <div class="modal__exit" @click="hideModal">
          <img src="/images/exit.svg" class="transform" alt="exit">
        </div>
      </div>
      <div class="ok__text">
        <div class="ok__title">
          Ваша заявка
        </div>
        <div class="ok__item">
          Успешно принята!
        </div>
        <div class="ok__subtitle">
          Мы свяжемся с Вами в ближайшее время
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

import Header from "~/components/Header";
import Nav from "~/components/Nav";
import Intro from "~/components/Intro";
import AboutMe from "~/components/AboutMe";
import Treatment from "~/components/Treatment";
import Diagnostics from "~/components/Diagnostics";
import Request from "~/components/Request";
import Team from "~/components/Team";
import Address from "~/components/Address";
import Reviews from "~/components/Reviews";
import Hospital from "~/components/Hospital";
import Questions from "~/components/Questions";
import Footer from "~/components/Footer";
import axios from "axios";
import FooterMobile from "~/components/FooterMobile";
import AddressMobile from "~/components/AddressMobile";
import TreatmentMobile from "~/components/TreatmentMobile";
import DiagnosticsMobile from "~/components/DiagnosticsMobile";
import HeaderMobile from "~/components/HeaderMobile";

export default {
  name: "index",
  components: {
    HeaderMobile,
    Header,
    Nav,
    Intro,
    AboutMe,
    Treatment,
    TreatmentMobile,
    Diagnostics,
    DiagnosticsMobile,
    Request,
    Team,
    Address,
    AddressMobile,
    Reviews,
    Hospital,
    Questions,
    Footer,
    FooterMobile
  },
  mounted() {
    this.windowSize = window.innerWidth;
  },
  data() {
    return {
      form: {
        phone: null,
        name: null
      },
      windowSize: 0,
    }
  },

  methods: {
    showSecondModal(event) {
      event.preventDefault()
      if (this.form.phone !== "") {
        axios.post("https://drmakirov.herokuapp.com/send", this.form)
          .then((data) => {
            if (data.status === 201 || data.status === 200) {
              this.$refs["my-modal"].hide();
              this.$refs["second-modal"].show();
              this.phone = null;
            } else {
              console.log("no");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    hideFirstModal() {
      this.$refs["my-modal"].hide()
    },
    hideModal() {
      this.$refs["second-modal"].hide();
    },
  }
};
</script>
<style lang="scss">

body {
  line-height: 1.2;
  color: #FFFFFF;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0 0 15px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1300px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
}

.transform {
  &:hover {
    transform: translateY(-5px);
  }
}

.title {
  padding-top: 114px;
  font-size: 39px;
  font-weight: 600;
  text-align: right;
  color: #003D4A;

  @media (max-width: 1290px) {
    padding-top: 71px;
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 27px;
    padding-top: 72px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
    padding-top: 55px;
  }
}

.modal-body {
  padding: 0;
  background: #FFFFFF;
  border-radius: 15px;
  width: 100%;
  max-width: 940px;

  @media (max-width: 600px) {
    max-width: 800px;
  }
}

.modal-content {
  padding: 3rem;
  background: #FFFFFF;
  border-radius: 15px;

  @media (max-width: 600px) {
    padding: 2rem;
  }
}

.form__title {
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 600;
  color: #003D4A;

  @media (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
}

.form__subtitle {
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
}

.form__group {
  margin-top: 20px;
  color: #003D4A;
  font-size: 16px;

  @media (max-width: 600px) {
    margin-top: 15px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    margin-top: 10px;
    font-size: 12px;
  }
}

.form__input {
  margin-bottom: 20px;
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 50px;
  padding-left: 1rem;
  width: 85%;
  height: 39px;
  outline: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
    height: 30px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    width: 90%;
  }
}

.callback__icon {
  margin-right: .8rem;
  width: 18px;
  height: 18px;

  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 400px) {
    width: 13px;
    height: 13px;
    margin-right: .5rem;
  }
}

.btn__callback {
  padding: 15px 0;
  justify-content: center;
  width: 85%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: #03CCC1;
  box-shadow: 5px 10px 20px rgba(3, 204, 193, 0.35);
  border-radius: 40px;
  outline: none;
  border: none;

  &:hover {
    background: #42dcd5;
  }

  @media (max-width: 600px) {
    padding: 13px 0;
    font-size: 16px;
  }

  @media (max-width: 400px) {
    padding: 11px 0;
    font-size: 14px;
    width: 90%;
  }
}

.modal__text {
  text-decoration: underline;
  width: 80%;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 400px) {
    margin-top: 10px;
    font-size: 12px;
  }
}

.modal__exit {
  position: absolute;
  top: -5%;
  right: -5%;
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

.modal__ok {
  border-radius: 50%;
  padding: 33px;
  background: #FFFFFF;
  box-shadow: 0 0 54px rgba(0, 0, 0, 0.12);

  @media (max-width: 600px) {
    padding: 25px;
  }
}

.modal__ok_item {
  padding: 25px 15px;
  border-radius: 50%;
  background: #03CCC1;
  box-shadow: 0 0 32px rgba(3, 204, 193, 0.53);

  @media (max-width: 600px) {
    padding: 20px 13px;
  }

  & > img {
    width: 40px;
    height: 20px;

    @media (max-width: 600px) {
      width: 35px;
      height: 15px;
    }
  }
}

.ok__text {
  margin-top: 40px;
  color: rgba(0, 61, 74, 1);

  @media (max-width: 600px) {
    margin-top: 20px;
  }
}

.ok__title {
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 20px;
  }

}

.ok__item {
  margin-bottom: 12px;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 8px;
  }
}

.ok__subtitle {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 16px;
  }
}

.tel-bt {
  background: rgba(3, 204, 84, 0.8);
  border-radius:50%;
  cursor:pointer;
  text-align:center;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index:999;
  width: 80px;
  height: 80px;
}

.tel-bt:before,
.tel-bt:after {
  content: " ";
  display: block;
  position: absolute;
  border: 1px solid rgba(68, 212, 118, 0.8);
  border-radius:50%;
  left: -20px;
  right: -20px;
  top: -20px;
  bottom: -20px;
}

.tel-bt .text-call{
  padding: 20px;
  position:relative;
  overflow:hidden;
}

.tel-bt:before,
.tel-bt:after {
  animation: animate 1.5s linear infinite;
}

@keyframes animate
{
  0%
  {
    transform: scale(0.5);
    opacity: 0;
  }
  50%
  {
    opacity: 1;
  }
  100%
  {
    transform: scale(1.2);
    opacity: 0;
  }
}

</style>
