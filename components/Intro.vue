<template>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">
          Центр вертебрологии профессора Макирова
        </h1>
        <div class="intro__line"></div>
        <div class="intro__text">
          Современные методы лечения заболеваний позвоночника
        </div>
      </div>
      <button class="btn">
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
  padding-top: 220px;
  background: url("/images/intro/bg.jpg");
  background-size: cover;
}

.intro__inner {
  width: 100%;
  max-width: 660px;
}

.intro__title {
  font-size: 52px;
  font-weight: 600;
  color: #003D4A;
}

.intro__line {
  margin-bottom: 28px;
  margin-top: 29px;
  width: 100%;
  max-width: 337px;
  background: #0197B8;
  height: 4px;
  border-radius: 2px;
}

.intro__text {
  width: 100%;
  max-width: 490px;
  font-size: 28px;
  font-weight: 400;
  color: #003D4A;
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
}
</style>
