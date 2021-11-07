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
          <masked-input
            class="form__input"
            mask="\+\7 (111) 111-11-11"
            placeholder="+7 (___) ___ __ __ "
            v-model="phone"
          />
        </b-form-group>

        <button class="mt-3 bi-modal-btn" @click="showSecondModal">
          Жду звонка
        </button>
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

  computed: {
    phoneStr() {
      let str = String(this.phone);
      let sendstr = str.replace(/[^0-9]/g, "");
      return sendstr;
    },
  },

  methods: {
    showSecondModal() {
      if (this.phoneStr !== "") {
        fetch("/rbd_leads_api/leads", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source: 1260,
            phoneNumber: this.phoneStr,
          }),
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
  //padding: 136px 220px 90px 110px;
  width: 100%;
  max-width: 940px;
  height: 931px;
  background: #FFFFFF;
  border-radius: 15px;
}

.form__title {
  margin-bottom: 40px;
  font-size: 42px;
  font-weight: 600;
  color: #003D4A;
}

.form__subtitle {
  font-size: 26px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}

.form__group {
  margin-top: 55px;
}

.form__input {
  padding: 16px 79px 10px 45px;
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 50px;

  &:focus {
    outline: none;
  }
}

</style>
