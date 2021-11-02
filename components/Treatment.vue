<template>
  <div class="treatment">
    <div class="container">
      <div class="treatment__inner">
        <div class="treatment__title">Лечение</div>
        <div class="treatment__item d-flex align-items-center">
          <div class="treatment__spine">
            <img src="/images/treatment/spine.png" alt="spine">
          </div>
          <div class="treatment__spine__about">
            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Радикулит
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Перелом позвоночника
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Остеохондроз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Опухоль спинного мозга
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Спондилолистез
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Спондилоартроз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Стеноз позвоночного канала
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Сколиоз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Опухоль позвоночника
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex">
              <div class="line"></div>
              <div class="treatment__spine__about__text">
                Межпозвонковая грыжа
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Treatment"
}
</script>

<style scoped lang="scss">
.treatment {
  background: url("/images/treatment/bg.jpg");
  background-size: cover;
}

.treatment__inner {
  padding-top: 145px;
}

.treatment__title {
  font-size: 39px;
  font-weight: 600;
  color: #ffffff;
}

.treatment__item {
  margin-top: 67px;
}
</style>
