<template>
  <div class="team" id="Team">
    <div class="container">
      <div class="title">Наша команда врачей</div>
      <div class="team__items d-flex justify-content-between flex-wrap">
        <div class="team__item text-center" v-for="(item, key) in team" :key="key">
          <div class="item__img">
            <img :src="item.img" alt="photo">
          </div>
          <div class="item__name">{{ item.name }}</div>
          <div class="item__post">{{ item.post }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",

  data() {
    return {
      team: [
        {

          img: require("@/static/images/team/img1.png"),
          name: 'Голубева Анна Сергеевна',
          post: 'Врач травматолог-ортопед, вертебролог'
        },
        {
          img: require("@/static/images/team/img2.png"),
          name: 'Демченко Василий Владимирович',
          post: 'Врач травматолог-ортопед, вертебролог'
        },
        {
          img: require("@/static/images/team/img3.png"),
          name: 'Макиров Тимур Рашидович',
          post: 'Врач вертебролог, нейрохирург, травматолог-ортопед'
        },
        {
          img: require("@/static/images/team/img4.png"),
          name: 'Еникеев Азат Дамирович',
          post: 'Врач травматолог-ортопед, вертебролог'
        },
        {
          img: require("@/static/images/team/img5.png"),
          name: 'Отаров Олжас Бекенович',
          post: 'Врач травматолог-ортопед, вертебролог'
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">
.team {
  background: url("/images/team/bg.jpg") center;
  background-size: cover;

  @media (max-width: 830px) {
    background: url("/images/team/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 600px) {
    background: url("/images/team/bg3.jpg");
    background-size: cover;
  }
}

.title {
  @media (max-width: 790px) {
    text-align: left;
  }
}

.team__items {
  padding: 20px 0 100px;

  @media (max-width: 1290px) {
    padding: 70px 0;
  }

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 450px) {
    padding: 20px 0 50px;
  }

}

.team__item {

  &:nth-child(3) {
    margin-top: 40px;

    @media (max-width: 1290px) {
      margin-top: 78px;
    }

    @media (max-width: 790px) {
      margin-top: 0;
    }
  }

  &:nth-child(4) {
    margin-top: 40px;

    @media (max-width: 1290px) {
      margin-top: 78px;
    }

    @media (max-width: 790px) {
      margin-top: 0;
    }
  }

  &:nth-child(5) {
    margin: 40px auto 0;

    @media (max-width: 1290px) {
      margin-top: 78px;
    }

    @media (max-width: 790px) {
      margin-top: 0;
    }
  }

  @media (max-width: 790px) {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.item__img > img {
  @media (max-width: 1290px) {
    width: 400px;
    height: 406px;
  }

  @media (max-width: 900px) {
    width: 340px;
    height: 346px;
  }

  @media (max-width: 830px) {
    width: 295.3px;
    height: 300px;
  }
}

.item__name {
  margin-bottom: 13px;
  font-size: 28px;
  font-weight: 500;
  color: #003D4A;

  @media (max-width: 1290px) {
    font-size: 24px;
  }

  @media (max-width: 900px) {
    font-size: 22px;
  }

  @media (max-width: 830px) {
    margin: 0 auto 13px;
    max-width: 227px;
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 500px;
    margin: 0 auto 13px;
  }
}

.item__post {
  font-size: 22px;
  font-weight: 400;
  color: #003D4A;
  width: 100%;
  max-width: 380px;
  margin: auto;

  @media (max-width: 1290px) {
    font-size: 20px;
  }
}
</style>
