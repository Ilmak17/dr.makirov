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
                  {{ item.question }}
                  <div class="arrow">
                    <img v-bind:class="{ active: item.open }"
                      src="/images/questions/arrow.svg" alt="arrow">
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
}

.questions__inner {
  margin-top: 64px;
  padding-bottom: 141px;
}

.card {
  margin-bottom: 40px;
  border: none;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  border-radius: 40px;
  color: #003D4A;
}

.card-header {
  padding: 0;
  background: #FFFFFF;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  border: none;
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
    box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
    border: none;
    font-size: 24px;
    font-weight: 600;
    color: #003D4A;
  }

  &:focus {
    background: #FFFFFF;
    box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
    border: none;
  }


  &:active, &:focus {
    color: #003D4A;
  }

  &:visited {
    color: #003D4A;
  }
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  color: #003D4A;

}
.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
  background: #FFFFFF;
  box-shadow: 0 7px 30px rgba(0, 0, 0, 0.06);
  color: #003D4A;
}

.card-body {
  padding: 0 225px 30px 61px;
  background: #FFFFFF;
  font-size: 22px;
  font-weight: 400;
}

.arrow {
  padding: 17px 15px 14px;
  display: flex;
  width: 47px;
  height: 47px;
  background: #20B6D8;
  box-shadow: 0 12.3095px 22.381px rgba(32, 182, 216, 0.29);
  border-radius: 100%;
}

.active {
  transform: rotate(180deg);
}

</style>
