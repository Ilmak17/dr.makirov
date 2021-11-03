<template>
  <div class="team">
    <div class="container">
      <div class="title">Наша команда врачей </div>
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
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">
.team {
  background: url("/images/team/bg.jpg");
  background-size: cover;
}

.team__items {
  padding: 20px 0 164px;
}

.team__item {

  &:nth-child(3) {
    margin-top: 40px;
  }
  &:nth-child(4) {
    margin-top: 40px;
  }
}

.item__name {
  margin-bottom: 13px;
  font-size: 28px;
  font-weight: 500;
  color: #003D4A;
}

.item__post {
  font-size: 22px;
  font-weight: 400;
  color: #003D4A;
}
</style>
