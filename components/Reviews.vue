<template>
  <div class="reviews" id="Reviews">
    <div class="container">
      <div class="title">Отзывы</div>
    </div>
    <swiper :options="swiperOption" class="slider">
      <swiper-slide v-for="(item, index) in reviews" :key="index">
        <div class="card">
          <div class="d-flex justify-content-between align-items-center">
            <div class="card__title">{{ item.name }}</div>
            <div class="card__quote">
            </div>
          </div>
          <div class="card__text">{{ item.text }}</div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="/images/reviews/left.svg" alt="">
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next" slot="button-next">
        <img src="/images/reviews/right.svg" alt="">
      </div>
    </swiper>

    <div class="container">
      <div class="videos">
        <div class="video-item d-flex justify-content-between">
          <iframe width="400" height="250" src="https://www.youtube.com/embed/3b_yVzt35uY"
                  title="YouTube video player" frameborder="0" allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>

          <iframe width="400" height="250" src="https://www.youtube.com/embed/N4nzm8eGYyo" title="YouTube video player"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                 gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe width="400" height="250" src="https://www.youtube.com/embed/mQN8cUoa-TM" title="YouTube video player"
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                 gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <a class="youtube__link" href="https://www.youtube.com/channel/UC_naXlwqsuWZPU5qSuXsZRg">
        <span>Мы в YouTube:</span>
        <img src="/images/youtube.svg" alt="youtube">
      </a>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";

export default {
  name: "Reviews",

  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true
        },
        breakpoints: {
          1110: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 1.6,
          },
          320: {
            slidesPerView: 1,
          },
        },
      },
      reviews: [
        {
          name: 'Агафонова Т.',
          text: 'По рекомендации с проблемами позвоночника в сентябре 2020 года ' +
            'я обратилась в филиал "Семейная клиника", конкретно к травматологу-ортопеду Макирову ' +
            'С. К.. Выявленная гемангиома позвонков угрожала компрессионным переломом позвоночника. ' +
            'Потому срочно в октябре 2020 года я была прооперирована доктором Макировым С. К. ' +
            '(по полису ОМС). Высочайший профессионализм, мастерство, добросовестное отношение к ' +
            'своей работе устранили данную проблему. Доктор Макиров С. К. - это доктор с большой буквы, ' +
            'специалист с золотыми руками. Огромная благодарность Вам, доктор С. К. М. С уважением, ' +
            'Агафонова Т., г. Москва.'
        },
        {
          name: 'Марков Д.',
          text: 'После 3 месяцев безуспешного консервативного лечения (были и уколы, и капельницы ' +
            '- помогало только, пока была терапия, корешковый синдром не проходил), обратился в клинику' +
            ' "Семейная" на Госпитальной. После первого приема с профессором Макировым - ' +
            'назначили операцию по удалению межпозвоночного диска и установки импланта через' +
            ' 3 недели. 17. 04. 2021 была успешно проведена операция. Уже через 2 часа после ' +
            'операции можно было вставать и ходить. На 3 день (19. 04) меня выписали. Боль от ' +
            'корешкового синдрома прошла сразу после операции. Швы сняли через месяц. Спасибо ' +
            'большое профессору и его команде за профессионализм и заботу о пациентах! С уважением,' +
            ' Марков Д. В.'
        },
        {
          name: '',
          text: 'Хочу выразить огромную благодарность профессору Макирову! 27 июля доктор' +
            ' Макиров провёл мне вертебропластику трёх позвонков грудного отдела, операция ' +
            'была абсолютно бесплатной, по квоте. Серик Калиулович, у Вас волшебные руки,' +
            ' Вы - врач от Бога! И я от всей души желаю Вам крепкого здоровья и долгих лет жизни! ' +
            'Спасибо за Ваш профессионализм, за любовь к пациентам, за то, ' +
            'что не потеряли сострадание к больным, спасибо за высокий уровень всей Вашей команды. Вы со своими ребятами и медсестричками работаете, как один слаженный механизм!'
        },
        {
          name: 'Семья Гаджимурадовых.',
          text: 'Чуть более двух недель прошло после операции, швы сняты, полным ходом работа и ' +
            'уже не верится, что были боли, страхи, сомнения... Консультации разных врачей.' +
            ' Огромнейшая благодарность и признательность Вам, Серик Калиулович! Вашей' +
            ' профессиональной команде! Ваше компетентное мнение, твердое слово, профессионализм' +
            ' были решающими. У Вас золотые руки, операция прошла успешно, идет восстановление.' +
            ' Позвольте пожелать Вам здоровья! Успеха в нелегком труде! Побольше талантливых учеников,' +
            ' благодарных пациентов! Семья Гаджимурадовых.'
        },
        {
          name: '',
          text: 'На днях профессор со своей командой прооперировали отца (63 года). 1,5 месяца,' +
            ' как он не мог толком передвигаться, дали о себе знать давние грыжи на уровне L3-L4, L5-S1,' +
            ' стеноз позвоночного канала, корешковый болевой синдром, всего могу не упомнить.' +
            ' Отец прилетел из другого города, и, с его слов, не ожидал настолько доброжелательного' +
            ' отношения к себе и внимания к своей проблеме. Очень порадовало то, что операцию' +
            ' удалось сделать по квоте (бесплатно), а также провести ее спустя 10 дней после ' +
            'первичного приема. Выписка произошла на 3-й день. Поднялся папа уже в день проведения ' +
            'операции. Выражаем искреннюю благодарность всей команде профессора Макирова С.! За их ' +
            'профессионализм, неравнодушие и умелые руки!'
        },
        {
          name: '',
          text: 'Мне и сейчас не верится, как я попала к такому замечательном доктору ' +
            'Макирову Серику Калиуловичу, к гениальному врачу от бога. Спасибо вам и низкий поклон,' +
            ' и всей его команде. А теперь расскажу, какие у меня были нестерпимые боли, я не могла' +
            ' нормально жить и ходить, лечение мне не помогало совсем. Нога не слушалась, это не жизнь,' +
            ' а просто ад, пока я не попало к профессионалу своего дела. Спасибо большое Тимуру Рашидовичу' +
            ' за его добродушие к людям и помощи в документах по квоте. Низкий вам поклон! Спасибо ещё раз!'
        },
        {
          name: 'Высоцкая Елена',
          text: 'Мне просто улыбнулась удача, когда я попала на прием к профессору ' +
            'Макирову Серику Калиуловичу. После первого приема доктор сразу определил, ' +
            'что у меня проблемы с позвоночником' +
            ' Через неделю, сдав все нужные анализы,' +
            ' мне была сделана декомпрессивно-стабилизирующая операция на позвоночнике.' +
            ' Хочется выразить огромную благодарность Макирову Серику Калиуловичу и его ассистенту ' +
            'Макирову Тимуру Рашидовичу – специалистам с большой буквы. Это врачи от Бога. В клинике ' +
            '«Семейная» работают только профессионалы, отличная, слаженная команда. Условия в клинике' +
            ' замечательные, отношение к пациентам чуткое и внимательное. Спасибо вам за ваш бесценный' +
            ' труд, неравнодушие, высокий профессионализм.'
        },
        {
          name: '',
          text: 'Обратилась К Серику Калиуловичу с острой болью в поясничном отделе позвоночника.' +
            ' Было принято решение проводить операцию с целью удаления грыжи. Вместе с Азатом ' +
            'Дамировичем провели отличную консультацию: всё рассказали, показали на манекене, ' +
            'объяснили. Выдали всю информацию для оформления направления на операцию по ОМС. ' +
            'Тимур Рашидович был всегда на связи и помогал со всеми возникающими вопросами в процессе' +
            ' подготовки. 19.09.2020 была проведена операция. Понравились компетентность, бережное и' +
            ' доброжелательное отношение Серика Калиуловича и его коллег. После операции также имеется' +
            ' возможность задать вопросы и получить ответы/советы.'
        },
        {
          name: 'Равиля Косоурова',
          text: 'Выражаю особую благодарность Серику Калиуловичу Макирову за то,' +
            ' что профессионально определил наиболее оптимальный метод лечения для меня' +
            ' и великолепно провел операцию на спине после серьезной травмы. Спасибо, ' +
            'Серик Калиулович! Долгих Вам лет жизни и крепкого здоровья! С уважением, ' +
            'ваша благодарная пациентка Равиля Косоурова.'
        },
        {
          name: 'Рощупкина Нина Николаевна',
          text: 'Хочу выразить огромную благодарность хирургу, профессору, вертебрологу от' +
            ' бога Макирову Серику Калиуловичу и его ассистенту Макирову Тимуру Рашидовичу.' +
            ' По результатам МРТ у меня в грудном отделе позвоночника было 4 гемангиомы и ' +
            'одна в поясничном отделе. Была назначена операция на 22.05.2019, которая прошла ' +
            'в клинике "Семейная" успешно по квоте. Из 5 гемангиом самые большие были про оперированы.' +
            ' На следующий день я уехала домой. Восстановление у меня заняло около недели. ' +
            'Низкий поклон всей бригаде, которая обеспечивала проведение операции. Спасибо ' +
            'Макирову Серику Калиуловичу и Макирову Тимуру Рашидовичу за то, что вы есть. ' +
            'И что в нашей стране есть такие хирурги от бога. С уважением, Рощупкина Нина ' +
            'Николаевна, г. Москва.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.reviews {
  background: url("/images/reviews/bg.jpg");
  background-size: cover;
  padding-bottom: 100px;

  @media (max-width: 1290px) {
    padding-bottom: 80px;
  }

  @media (max-width: 600px) {
    background: url("/images/reviews/bg2.jpg");
    background-size: cover;
    padding-bottom: 60px;
  }

  @media (max-width: 410px) {
    padding-bottom: 40px;
  }
}

.card {
  padding: 60px 41px 0 62px;
  width: 600px;
  height: 720px;
  background: #FFFFFF;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 1290px) {
    padding: 21px 43px 0 50px;
    width: 540px;
    height: 590px;
    border-radius: 8.13178px;
    box-shadow: 0 16.2636px 32.5271px rgba(0, 0, 0, 0.1);
  }


  @media (max-width: 600px) {
    padding: 69px 62px 0 59px;
    width: 450px;
    height: 750px;
    box-shadow: 0 16.2636px 32.5271px rgba(0, 0, 0, 0.1);
    border-radius: 8.13178px
  }

  @media (max-width: 450px) {
    width: 420px;
    height: 700px;
  }

  @media (max-width: 410px) {
    padding: 30px 28px 0 25px;
    width: 380px;
    height: 450px;
  }

  @media (max-width: 380px) {
    padding: 20px 20px 0 18px;
    width: 350px;
    height: 480px;
  }

  @media (max-width: 350px) {
    padding: 20px 15px 0 13px;
    width: 300px;
    height: 400px;
  }
}

.card__title {
  font-size: 28px;
  font-weight: 500;
  color: #003D4A;

  @media (max-width: 1290px) {
    font-size: 22px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }

  @media (max-width: 410px) {
    font-size: 18px;
  }

  @media (max-width: 350px) {
    font-size: 16px;
  }

}

.card__quote {
  width: 81px;
  height: 68px;

  @media (max-width: 600px) {
    width: 70px;
    height: 60px;
  }

  &::after {
    content: "\201c";
    font-size: 176px;
    font-weight: 600;
    color: rgba(1, 151, 184, 0.17);

    @media (max-width: 1290px) {
      font-size: 143px;
    }

    @media (max-width: 600px) {
      font-size: 120px;
    }

    @media (max-width: 450px) {
      font-size: 100px;
    }
  }
}

.card__text {
  margin-top: 33px;
  font-size: 22px;
  font-weight: 400;
  color: #003D4A;

  @media (max-width: 1290px) {
    font-size: 18px
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }

  @media (max-width: 410px) {
    margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 350px) {
    font-size: 12px;
  }
}

.slider {
  padding-top: 94px;
  padding-bottom: 120px;
  width: 100%;
  max-width: 1300px;

  @media (max-width: 1290px) {
    padding-top: 50px;
    padding-bottom: 80px;
  }

  @media (max-width: 600px) {
    padding-bottom: 50px;
  }

  @media (max-width: 410px) {
    padding-top: 40px;
    padding-bottom: 30px;
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-button-prev {
  padding: 19px 24px 19px 20px;
  left: 2%;

  @media (max-width: 1290px) {
    left: 5%;
  }
}

.swiper-button-next {
  padding: 19px 21px 19px 24px;
  right: 2%;

  @media (max-width: 1290px) {
    right: 5%;
  }
}

.swiper-button-prev, .swiper-button-next {
  position: absolute;
  width: 58px;
  height: 58px;
  top: 94%;
  background: #20B6D8;
  box-shadow: 0 15.1905px 27.619px rgba(32, 182, 216, 0.29);
  border-radius: 38.0328px;

  &:hover {
    background: #49bed9;
  }

  &::after {
    display: none;
  }

  @media (max-width: 1290px) {
    width: 47.16px;
    height: 47.16px;
  }

  @media (max-width: 900px) {
    display: none;
  }
}

.videos {
  margin-top: 70px;
  margin-bottom: 40px;
}

.video-item {
  @media (max-width: 950px) {
    align-items: center;
    flex-direction: column;
  }
}

iframe {
  margin-top: 60px;

  @media (max-width: 1280px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 1100px) {
    width: 300px;
    height: 150px;
  }

  @media (max-width: 950px) {
    &:first-child {
      margin-top: 0;
    }

    width: 450px;
    height: 251.43px;
  }


  @media (max-width: 590px) {
    margin-top: 45px;
    width: 450px;
    height: 251.43px;
  }
  @media (max-width: 460px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 360px) {
    width: 280px;
    height: 150px;
  }
}

.youtube__link {
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  color: #20B6D8;

  & > img {
    margin-left: 20px;
  }

  @media (max-width: 360px) {
    font-size: 21px;
  }
}

</style>
