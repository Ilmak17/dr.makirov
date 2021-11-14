<template>
  <div class="treatment">
    <div class="container">
      <div class="treatment__title">
        Лечение
      </div>
      <div class="treatment__inner d-flex flex-column">

        <div class="treatment__part ml-auto text-right first">
          Шейный отдел
        </div>

        <div class="treatment__part second">
          Грудной отдел
        </div>
        <div class="treatment__part ml-auto text-right third">
          Поясничный отдел
        </div>
        <div class="treatment__part">
          Крестец
        </div>
        <div class="treatment__part ml-auto text-right fourth">
          Копчик
        </div>
        <div class="treatment__photo d-flex justify-content-center">
          <img src="/images/treatment/spine2.png" class="treatment__spine" alt="spine">
        </div>
      </div>
      <ul class="treatment__item">
        <li>Радикулит</li>
        <li>Перелом позвоночника</li>
        <li>Остеохондроз</li>
        <li>Опухоль спинного мозга</li>
        <li>Спондилолистез</li>
        <li>Спондилоартроз</li>
        <li>Стеноз позвоночного канала</li>
        <li>Сколиоз</li>
        <li>Опухоль позвоночника</li>
        <li>Межпозвонковая грыжа</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TreatmentMobile"
}
</script>

<style scoped lang="scss">
.treatment {
  background: url("/images/treatment/bg2.jpg");
  background-size: cover;
}

.treatment__title {
  padding-top: 65px;
  padding-bottom: 21px;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 27px;
    padding-top: 72px;
    padding-bottom: 55px;
  }

  @media (max-width: 450px) {
    font-size: 24px;
    padding-top: 55px;
  }
}

.treatment__part {
  width: 265px;
  padding-top: 38px;
  border-top: 2.6476px dashed #FFFFFF;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 600px) {
    width: 197px;
    font-size: 20px;
  }

  @media (max-width: 450px) {
    padding-top: 25px;
    width: 160px;
    font-size: 18px;
  }

  @media (max-width: 400px) {
    padding-top: 20px;
    width: 130px;
    font-size: 16px;
  }

  @media (max-width: 350px) {
    width: 100px;
  }

}

.treatment__photo {
  position: absolute;
  left: 40%;

  @media (max-width: 500px) {
    left: 35%;
  }

  @media (max-width: 350px) {
    left: 30%;
  }

  & > img {
    @media (max-width: 450px) {
      width: 125px;
      height: 500px;
    }
  }
}

.first {
  margin-bottom: 49px;

  @media (max-width: 600px) {
    margin-bottom: 63px;
  }

  @media (max-width: 450px) {
    margin-bottom: 70px;
  }
}

.second {
  margin-bottom: 76px;

  @media (max-width: 600px) {
    margin-bottom: 115px;
  }

  @media (max-width: 450px) {
    margin-bottom: 90px;
  }
}

.third {
  margin-bottom: 49px;

  @media (max-width: 600px) {
    margin-bottom: 30px;
  }

}

.treatment__item {
  margin-top: 81px;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 127px;

  @media (max-width: 600px) {
    margin-top: 73px;
    font-size: 20px;
    padding-bottom: 97px;
  }

  & > li {
    margin-bottom: 39px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 450px) {
      margin-bottom: 25px;
    }
  }
}

</style>
