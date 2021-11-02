<template>
  <div class="about">
    <div class="container">
      <div class="about__inner d-flex">
        <div class="about__img">
          <img src="/images/about/me.png" alt="">
        </div>
        <div class="about__info">
          <div class="about__name">
            Макиров Серик Калиулович
          </div>
          <div class="about__line"></div>

          <div class="about__text">
            Вертебролог, врач травматолог-ортопед д.м.н, профессор
          </div>
          <div class="about__experience">
            Стаж 40 лет
          </div>
          <div class="about__awards">
            Заслуженный врач Российской Федерации, Академик РАЭН
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped lang="scss">
.about {
  background: url("/images/about/bg.jpg");
  background-size: cover;
}

.about__img {
  margin-top: 150px;
  margin-bottom: 53px;
  margin-right: 94px;
}

.about__info {
  margin-top: 219px;
  color: #003D4A;
}

.about__name {
  font-size: 39px;
  font-weight: 600;
}

.about__line {
  margin-top: 25px;
  margin-bottom: 34px;
  width: 230px;
  border-radius: 3px;
  background: #0197B8;
  border: 3px solid #0197B8;
}

.about__text {
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
}

.about__experience {
  margin-bottom: 27px;
  font-size: 28px;
  font-weight: 500;
}

.about__awards {
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
}
</style>
