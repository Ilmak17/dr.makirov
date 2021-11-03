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
            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-1"></div>
              <div class="treatment__spine__about__text">
                Радикулит
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-2"></div>
              <div class="treatment__spine__about__text">
                Перелом позвоночника
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-3"></div>
              <div class="treatment__spine__about__text">
                Остеохондроз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-4"></div>
              <div class="treatment__spine__about__text">
                Опухоль спинного мозга
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-5"></div>
              <div class="treatment__spine__about__text">
                Спондилолистез
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-6"></div>
              <div class="treatment__spine__about__text">
                Спондилоартроз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-7"></div>
              <div class="treatment__spine__about__text">
                Стеноз позвоночного канала
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-8"></div>
              <div class="treatment__spine__about__text">
                Сколиоз
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-9"></div>
              <div class="treatment__spine__about__text">
                Опухоль позвоночника
              </div>
            </div>

            <div class="treatment__spine__about__item d-flex align-items-center">
              <div class="treatment__line line-10"></div>
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

.treatment__spine__about__item {
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 0;
  }
}

.treatment__spine__about__text {
  font-size: 26px;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  line-height: 1.2;
}

.treatment__line {
  width: 247px;
  border-top: 2px dashed #FFFFFF;
  border-bottom: none;
  height: 0;
  border-radius: 3px;
  transform: rotate(-180deg);
}

.line-1 {
  margin-left: 47px;
  margin-right: 65px;
}
.line-2 {
  margin-left: 123px;
  margin-right: 83px;
}
.line-3 {
  margin-left: 187px;
  margin-right: 88px;
}
.line-4 {
  margin-left: 123px;
  margin-right: 83px;
}
.line-5 {
  margin-left: 47px;
  margin-right: 65px;
}
.line-6 {
  margin-left: 123px;
  margin-right: 83px;
}
.line-7 {
  margin-left: 187px;
  margin-right: 88px;
}
.line-8 {
  margin-left: 123px;
  margin-right: 83px;
}
.line-9 {
  margin-left: 47px;
  margin-right: 65px;
}
.line-10 {
  margin-left: 123px;
  margin-right: 83px;
}
</style>
