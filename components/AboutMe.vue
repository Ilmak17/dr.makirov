<template>
  <div class="about">
    <div class="container">
      <div class="about__inner d-flex align-items-center">
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
            Стаж более 40 лет
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

  @media (max-width: 900px) {
    background: url("/images/about/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 600px) {
    background: url("/images/about/bg3.jpg");
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
</style>
