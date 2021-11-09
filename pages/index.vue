<template>
  <div>
    <Header/>
    <Nav/>
    <Intro/>
    <AboutMe/>
    <Treatment/>
    <Diagnostics/>
    <Request/>
    <Team/>
    <Address/>
    <Reviews/>
    <Hospital/>
    <Questions/>
    <Footer/>

    <b-modal id="my-modal" ref="my-modal" hide-header centered hide-footer>
      <b-form class="form">
        <div class="form__title">
          Заказать обратный звонок
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
            v-model="name"
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
              v-model="phone"
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

    <b-modal ref="second-modal" centered hide-footer ok-only>
      <div class="d-flex align-items-center mb-3">

        <div class="d-flex flex-column">
          <span class="">Отлично!</span>
          <span class="">Заявка успешно отправлена!</span>
        </div>
      </div>
      <button @click="hideModal" class="bi-modal-btn">Закрыть</button>
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

export default {
  name: "index",
  components: {
    Header,
    Nav,
    Intro,
    AboutMe,
    Treatment,
    Diagnostics,
    Request,
    Team,
    Address,
    Reviews,
    Hospital,
    Questions,
    Footer
  },
  data() {
    return {
      phone: null,
      name: null
    }
  },

  methods: {
    showSecondModal() {
      console.log(this.phone)
      if (this.phone !== "") {
        axios.post("http://localhost:8080/api/send", {
            "name": this.name,
            "phone": this.phone
        })
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
}

.modal-body {
  padding: 0;
  background: #FFFFFF;
  border-radius: 15px;
  width: 100%;
  max-width: 940px;
}

.modal-content {
  padding: 3rem;
  background: #FFFFFF;
  border-radius: 15px;
}

.form__title {
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: 600;
  color: #003D4A;
}

.form__subtitle {
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

.form__group {
  margin-top: 20px;
  color: #003D4A;
  font-size: 16px;
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
}

.callback__icon {
  margin-right: .8rem;
  width: 18px;
  height: 18px;
}

.btn__callback {
  padding: 15px 0;
  justify-content: center;
  width: 85%;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  background: #03CCC1;
  box-shadow: 9px 20px 40px rgba(3, 204, 193, 0.35);
  border-radius: 40px;
  outline: none;
  border: none;

  &:hover {
    background: #42dcd5;
  }
}

.modal__text {
  text-decoration: underline;
  width: 80%;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}

</style>
