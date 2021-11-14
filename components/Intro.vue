<template>
  <div class="intro">
    <div class="container">
      <XyzTransition appear xyz="small-100% origin-top-right">
        <div class="intro__inner">
          <h1 class="intro__title">
            Центр вертебрологии профессора Макирова
          </h1>
          <div class="intro__line"></div>
          <div class="intro__text">
            Современные методы лечения заболеваний позвоночника
          </div>
        </div>
      </XyzTransition>
      <button @click="$bvModal.show('my-modal')" class="btn">
        Записаться на прием
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
}
</script>

<style scoped lang="scss">
.intro {
  margin-top: 3px;
  padding-top: 147px;
  background: url("/images/intro/bg.jpg") center;
  background-size: cover;

  @media (max-width: 1290px) {
    padding-top: 130px;
  }
  @media (max-width: 900px) {
    background: url("/images/intro/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 600px) {
    margin-top: 1px;
    background: url("/images/intro/bg3.jpg");
    background-size: cover;
  }
}

.intro__inner {
  width: 100%;
  max-width: 660px;
}

.intro__title {
  font-size: 52px;
  font-weight: 600;
  color: #003D4A;

  @media (max-width: 1290px) {
    font-size: 38px;
  }

  @media (max-width: 900px) {
    font-size: 44px;
    color: #FFFFFF;
  }

  @media (max-width: 600px) {
    font-size: 34px;
    color: #003D4A;
  }

  @media (max-width: 450px) {
    font-size: 28px;
  }
}

.intro__line {
  margin-bottom: 28px;
  margin-top: 29px;
  width: 100%;
  max-width: 337px;
  background: #0197B8;
  height: 4px;
  border-radius: 2px;

  @media (max-width: 1290px) {
    width: 255px;
    margin-top: 36px;
    margin-bottom: 30px
  }

  @media (max-width: 900px) {
    margin-top: 42px;
    margin-bottom: 44px;
    width: 325px;
    background: #FFFFFF;
  }

  @media (max-width: 600px) {
    margin-top: 33px;
    margin-bottom: 35px;
    width: 255px;
    background: #0197B8;
  }

  @media (max-width: 450px) {
    margin-top: 25px;
    margin-bottom: 27px;
    width: 200px;
  }
}

.intro__text {
  width: 100%;
  max-width: 490px;
  font-size: 28px;
  font-weight: 400;
  color: #003D4A;

  @media (max-width: 1290px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 28px;
    color: #FFFFFF;
  }

  @media (max-width: 600px) {
    font-size: 22px;
    color: #003D4A;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }
}

.btn {
  margin-top: 20px;
  margin-bottom: 226px;
  padding: 17px 31px;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  background: #20B6D8;
  box-shadow: 9px 20px 40px rgba(32, 182, 216, 0.35);
  border-radius: 40px;

  &:hover {
    background: #41afc5;
  }

  @media (max-width: 1290px) {
    margin-bottom: 131px;
    font-size: 18px;
    padding: 16px 24px 18px;
  }

  @media (max-width: 900px) {
    font-size: 22px;
    padding: 19px 51px 16px;
  }

  @media (max-width: 600px) {
    margin-top: 41px;
    font-size: 18px;
    padding: 16px 30px 18px;
  }

  @media (max-width: 450px) {
    margin-bottom: 100px;
    margin-top: 30px;
    font-size: 16px;
    padding: 12px 25px 14px;
  }
}
</style>
