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
                  МРТ
                </div>
                <div class="diagnostic__item__text">
                  магнитно-резонансная томография позвоночника
                </div>
              </div>
            </div>

            <div class="diagnostic__item d-flex item-2">
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

            <div class="diagnostic__item d-flex item-3">
              <div class="diagnostic__line"></div>
              <div class="diagnostic__text">
                <div class="diagnostic__title">
                  Рентгеновский снимок
                </div>
                <div class="diagnostic__item__text">
                  рентгеновский снимок позвоночникарентгеновский снимок позвоночника
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

  @media (max-width: 1290px) {
    padding-bottom: 50px;
  }
}

.diagnostic__item {
  margin-bottom: 45px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 1290px) {
    margin-bottom: 42px;
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

  @media (max-width: 1290px) {
    width: 33px;
    margin-right: 12px;
    margin-top: 10px;
  }
}

.diagnostic__title {
  font-size: 34px;
  font-weight: 500;
  color: #003D4A;


  @media (max-width: 1290px) {
    font-size: 20px;
  }
}

.diagnostic__item__text {
  margin-top: 18px;

  font-size: 28px;
  font-weight: 400;
  color: #003D4A;
  line-height: 1.2;


  @media (max-width: 1290px) {
    margin-top: 12px;
    font-size: 20px;
  }
}

.item-1 {
  margin-left: 70px;


  @media (max-width: 1290px) {
    margin-left: 160px;
  }
}

.item-2 {
  margin-left: 160px;

  @media (max-width: 1290px) {
    margin-left: 200px;
  }
}

.item-3 {
  @media (max-width: 1290px) {
    margin-left: 100px;
  }
}

.diagnostic__img > img {
  width: 340px;
  height: 350px;
}

</style>
