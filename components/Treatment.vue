<template>
  <div class="treatment" id="Treatment">
    <div class="container">
      <div class="treatment__inner">
        <div class="treatment__title">Заболевания</div>
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

  @media (max-width: 1290px) {
    padding-top: 71px;
  }
}

.treatment__title {
  font-size: 39px;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 1290px) {
    font-size: 28px;
  }
}

.treatment__item {
  margin-top: 67px;

  @media (max-width: 1290px) {
    margin-top: 44px;
  }
}

.treatment__spine__about__item {
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1290px) {
    margin-bottom: 27px;
  }
}

.treatment__spine > img {
  @media (max-width: 1290px) {
    width: 190px;
    height: 630px;
  }
}

.treatment__spine__about__text {
  font-size: 26px;
  font-weight: 600;
  color: #FFFFFF;
  text-transform: uppercase;
  line-height: 1.2;

  @media (max-width: 1290px) {
    font-size: 20px;
  }

  @media (max-width: 990px) {
    font-size: 18px;
  }
}

.treatment__line {
  width: 247px;
  border-top: 2px dashed #FFFFFF;
  border-bottom: none;
  height: 0;
  border-radius: 3px;
  transform: rotate(-180deg);

  @media (max-width: 1290px) {
    width: 223px;
  }


  @media (max-width: 950px) {
    width: 150px;
  }
}

.line-1 {
  margin-left: 47px;
  margin-right: 65px;

  @media (max-width: 1290px) {
    margin-left: 49px;
    margin-right: 159px;
  }

  @media (max-width: 950px) {
    margin-left: 10px;
    margin-right: 130px;
  }
}
.line-2 {
  margin-left: 123px;
  margin-right: 83px;

  @media (max-width: 1290px) {
    margin-left: 161px;
    margin-right: 106px;
  }

  @media (max-width: 950px) {
    margin-left: 125px;
    margin-right: 70px;
  }
}
.line-3 {
  margin-left: 187px;
  margin-right: 88px;

  @media (max-width: 1290px) {
    margin-left: 219px;
    margin-right: 92px;
  }

  @media (max-width: 950px) {
    margin-left: 180px;
    margin-right: 50px;
  }
}

.line-4 {
  margin-left: 123px;
  margin-right: 83px;

  @media (max-width: 1290px) {
    margin-left: 161px;
    margin-right: 106px;
  }

  @media (max-width: 950px) {
    margin-left: 125px;
    margin-right: 70px;
  }
}

.line-5 {
  margin-left: 47px;
  margin-right: 65px;

  @media (max-width: 1290px) {
    margin-left: 92px;
    margin-right: 116px;
  }

  @media (max-width: 950px) {
    margin-left: 70px;
    margin-right: 90px;
  }
}

.line-6 {
  margin-left: 123px;
  margin-right: 83px;

  @media (max-width: 1290px) {
    margin-left: 161px;
    margin-right: 106px;
  }

  @media (max-width: 950px) {
    margin-left: 125px;
    margin-right: 70px;
  }
}

.line-7 {
  margin-left: 187px;
  margin-right: 88px;

  @media (max-width: 1290px) {
    margin-left: 219px;
    margin-right: 92px;
  }

  @media (max-width: 950px) {
    margin-left: 180px;
    margin-right: 50px;
  }
}

.line-8 {
  margin-left: 123px;
  margin-right: 83px;

  @media (max-width: 1290px) {
    margin-left: 161px;
    margin-right: 106px;
  }

  @media (max-width: 950px) {
    margin-left: 125px;
    margin-right: 70px;
  }
}

.line-9 {
  margin-left: 47px;
  margin-right: 65px;

  @media (max-width: 1290px) {
    margin-left: 92px;
    margin-right: 116px;
  }

  @media (max-width: 950px) {
    margin-left: 70px;
    margin-right: 90px;
  }

}

.line-10 {
  margin-left: 123px;
  margin-right: 83px;

  @media (max-width: 1290px) {
    margin-left: 161px;
    margin-right: 106px;
  }

  @media (max-width: 950px) {
    margin-left: 125px;
    margin-right: 70px;
  }
}
</style>
