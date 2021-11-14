<template>
  <div class="diagnostic">
    <div class="container">
      <div class="title">Диагностика</div>

      <div class="diagnostic__inner">
        <div class="diagnostic__img d-flex justify-content-center">
          <img src="/images/diagnostics/diagnostic2.png" alt="diagnostic">
        </div>
        <div class="diagnostic__items d-flex flex-column">
          <div class="diagnostic__item">
            <div class="diagnostic__name d-flex align-items-center">
              <div>Рентгеновский снимок</div>
              <div class="diagnostic__line"></div>
            </div>

            <div class="diagnostic__text">
              при рентгенологическом <br> исследовании определяется <br>
              искривление позвоночника и <br> деформация позвонков
            </div>
          </div>

          <div class="diagnostic__item ml-auto">
            <div class="diagnostic__name d-flex align-items-center ">
              <div class="diagnostic__line second"></div>
              <div>МРТ</div>
            </div>

            <div class="diagnostic__text text-right">
              магнитно-резонансная томография позвоночника
            </div>
          </div>

          <div class="diagnostic__item">
            <div class="diagnostic__name d-flex align-items-center">
              <div>КТ</div>
              <div class="diagnostic__line"></div>
            </div>

            <div class="diagnostic__text">
              компьютерная томография позвоночника
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiagnosticMobile"
}
</script>

<style scoped lang="scss">
.diagnostic {
  background: url("/images/diagnostics/bg2.jpg") center;
  background-size: cover;
}

.diagnostic__inner {
  margin-top: 50px;
  padding-bottom: 120px;

  @media (max-width: 600px) {
    padding-bottom: 79px;
  }

  @media (max-width: 450px) {
    margin-top: 30px;
    padding-bottom: 50px;
  }
}

.diagnostic__img > img {
  @media (max-width: 600px) {
    width: 332.94px;
    height: 338px;
  }

  @media (max-width: 450px) {
    width: 300px;
    height: 305px;
  }
}

.diagnostic__item {
  color: #003D4A;
  width: 100%;
  max-width: 480px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
}

.diagnostic__name {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 12px;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
  }
}

.diagnostic__text {
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
  }
}

.diagnostic__line {
  margin-left: 40px;
  width: 40px;
  border-radius: 3px;
  border-top: 2px dashed #0197B8;

  @media (max-width: 600px) {
    margin-left: 33px;
    width: 33px;
  }
}

.second {
  margin-left: auto;
  margin-right: 40px;

  @media (max-width: 600px) {
    margin-right: 33px;
  }
}

</style>
