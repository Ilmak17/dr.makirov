<template>
  <div class="diagnostic">
    <div class="container">
      <div class="diagnostic__inner">
        <div class="title">Диагностика</div>
        <div class="diagnostic__about d-flex">
          <div class="diagnostic__items">
            <div class="diagnostic__item d-flex item-1">
              <div class="diagnostic__line"></div>
              <div class="diagnostic__text">
                <div class="diagnostic__title">
                  Рентгеновский снимок
                </div>
                <div class="diagnostic__item__text">
                  при рентгенологическом исследовании определяется искривление позвоночника и деформация позвонков
                </div>
              </div>
            </div>

            <div class="diagnostic__item d-flex item-2">
              <div class="diagnostic__line"></div>
              <div class="diagnostic__text">
                <div class="diagnostic__title">
                  МРТ
                </div>
                <div class="diagnostic__item__text">
                  магнитно-резонансная томография позвоночника
                </div>
              </div>
            </div>

            <div class="diagnostic__item d-flex item-3">
              <div class="diagnostic__line"></div>
              <div class="diagnostic__text">
                <div class="diagnostic__title">
                  КТ
                </div>
                <div class="diagnostic__item__text">
                  компьютерная томография позвоночника
                </div>
              </div>
            </div>
          </div>

          <div class="diagnostic__img">
            <img src="/images/diagnostics/diagnostic.png" alt="diagnostic">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Diagnostics"
}
</script>

<style scoped lang="scss">
.diagnostic {
  background: url("/images/diagnostics/bg.jpg") center;
  background-size: cover;
}

.diagnostic__about {
  padding-top: 58px;
  padding-bottom: 140px;
}

.diagnostic__item {
  margin-bottom: 45px;

  &:last-child {
    margin-bottom: 0;
  }
}

.diagnostic__line {
  margin-top: 20px;
  margin-right: 18px;

  border-top: 2.5px dashed #0197B8;
  width: 100%;
  max-width: 62px;
  height: 0;
  border-radius: 3px;
}

.diagnostic__title {
  font-size: 34px;
  font-weight: 500;
  color: #003D4A;
}

.diagnostic__item__text {
  margin-top: 18px;

  font-size: 28px;
  font-weight: 400;
  color: #003D4A;
  line-height: 1.2;
}

.item-1 {
  margin-left: 53px;
}

.item-2 {
  margin-left: 180px;
}

.item-2 {
  margin-left: 180px;
}


</style>
