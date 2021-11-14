<template>
  <div class="block">
    <div class="container">
      <div class="questions" id="Questions">
        <div class="title">Часто задаваемые вопросы</div>

        <div class="questions__inner">
          <div class="accordion" v-for="(item, index) in questions"
               :key="index" role="tablist">
            <b-card no-body>
              <b-card-header header-tag="header" role="tab">
                <b-button @click="item.open = !item.open"
                  block v-b-toggle="`${item.accordion}`" class="card__button" variant="info">

                  <div class="accordion__question">
                    {{ item.question }}
                  </div>
                  <div class="arrow when-open">
                      <img class="active" src="/images/questions/arrow.svg" alt="arrow">
                  </div>
                  <div class="arrow when-closed">
                    <img src="/images/questions/arrow.svg" alt="arrow">
                  </div>
                </b-button>
              </b-card-header>
              <b-collapse :id="item.accordion" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>{{ item.answer }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>

      </div>
    </div>
    <Certificates/>
  </div>
</template>

<script>
import Certificates from "~/components/Certificates";
export default {
  name: "Questions",
  components: {
    Certificates
  },

  data() {
    return {
      questions: [
        {
          open: true,
          accordion: 'accordion-1',
          question: 'Как долго прослужат импланты? Нужно ли будет их менять в дальнейшем?',
          answer: 'Имплант, установленный в строгом соответствии с протоколом, приживается' +
            ' с вероятностью 98-100% и может прослужить всю жизнь'
        },
        {
          open: false,
          accordion: 'accordion-2',
          question: 'Какие импланты мы будем ставить? В чем их преимущество перед другими?',
          answer: 'Импланты фирмы Stryker, США. Титановый сплав высокого качества. -' +
            ' не вызывает металлоз; - не реагирует в рамке; металлоискателя в аэропорту;' +
            ' - возможность одращения после вмешательства к КТ, МРТ; -быстрая адаптация пациента' +
            ' к вживленному устройству за счет его компактного профиля и продуманной концепцией ' +
            'крепления'
        },
        {
          open: false,
          accordion: 'accordion-3',
          question: 'Смогу ли я в длительной перспективе, жить как нормальный человек?',
          answer: 'Да, именно для этого и делается операция. Реабилитация обязана' +
            ' пройти качественно и полноценно, независимо от локализации вмешательства'
        },
        {
          open: false,
          accordion: 'accordion-4',
          question: 'Как долго я буду находиться в лежачем положении после операции?',
          answer: 'Каждый пациент индивидуален, но в большинстве случаев активизация происходит' +
            ' через несколько часов после операции'
        },
        {
          open: false,
          accordion: 'accordion-5',
          question: 'Бывают ли осложнения после операции, как часто?',
          answer: 'Как и у любого медицинского вмешательства, теоретически возможны разные осложнения.' +
            ' Но опираясь на данные нашей статистики в плановом лечении осложнения крайне редки'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.block {
  padding-bottom: 152px;
  background: url("/images/questions/bg.jpg");
  background-size: cover;

  @media (max-width: 1290px) {
    padding-bottom: 100px;
  }

  @media (max-width: 900px) {
    background: url("/images/questions/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 380px) {
    padding-bottom: 70px;
  }
}

.questions__inner {
  margin-top: 64px;
  padding-bottom: 101px;

  @media (max-width: 1290px) {
    padding-bottom: 37px;
  }
}

.card {
  margin-bottom: 40px;
  border: none;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  border-radius: 40px;
  color: #003D4A;

  @media (max-width: 1290px) {
    margin-bottom: 34px;
    box-shadow: 0 6.02326px 25.814px rgba(0, 0, 0, 0.06);
    border-radius: 86.0465px;
  }

  @media (max-width: 980px) {
    padding-bottom: 37px;
    box-shadow: none;
    background: none;
    border-radius: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.17);
  }
}

.card-header {
  padding: 0;
  background: #FFFFFF;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  border: none;

  @media (max-width: 980px) {
    box-shadow: none;
    background: none;
  }
}

.card__button {
  padding: 20px 51px 20px 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border: none;
  font-size: 24px;
  font-weight: 600;
  color: #003D4A;

  &:hover {
    background: #FFFFFF;
    border: none;
    color: #003D4A;

    @media (max-width: 980px) {
      background: none;
    }
  }

  &:focus {
    background: #FFFFFF;
    box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
    border: none;

    @media (max-width: 980px) {
      background: none;
      box-shadow: none;
    }
  }

  &:active, &:focus {
    color: #003D4A;
  }

  &:visited {
    color: #003D4A;
  }

  @media (max-width: 1290px) {
    padding: 16px 43px 18px 52px;
    font-size: 20px;
  }

  @media (max-width: 980px) {
    padding: 0 5px 0 0;
    background: none;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  color: #003D4A;

  @media (max-width: 980px) {
    box-shadow: none;
  }
}

.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
  background: #FFFFFF;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  color: #003D4A;

  @media (max-width: 980px) {
    background: none;
    box-shadow: none;
  }
}

.card-body {
  padding: 0 225px 30px 61px;
  background: #FFFFFF;
  font-size: 22px;
  font-weight: 400;

  @media (max-width: 1290px) {
    padding: 0 193px 30px 52px;
    font-size: 18px;
  }

  @media (max-width: 980px) {
    background: none;
    text-align: left;
    line-height: 1.2;
    padding: 37px 280px 0 0;
  }

  @media (max-width: 790px) {
    padding-right: 200px;
  }

  @media (max-width: 600px) {
    padding-right: 100px;
  }

  @media (max-width: 400px) {
    padding-top: 20px;
    padding-right: 50px;
    font-size: 16px;
  }
}

.arrow {
  padding: 17px 15px 14px;
  display: flex;
  width: 47px;
  height: 47px;
  background: #20B6D8;
  box-shadow: 0 12.3095px 22.381px rgba(32, 182, 216, 0.29);
  border-radius: 100%;

  @media (max-width: 1290px) {
    padding: 17px 14px 15px;
    width: 40.44px;
    height: 40.44px;
  }
}

.accordion__question {
  @media (max-width: 980px) {
    width: 100%;
    max-width: 361px;
    line-height: 1.2;
    text-align: left;
  }
}

.active {
  transform: rotate(180deg);
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

</style>
