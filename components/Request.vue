<template>
  <div class="request">
    <div class="container">
      <div class="request__inner d-flex align-items-center justify-content-between">
        <div class="request__text">
          <div class="request__title">
            Запишитесь на прием и пройдите диагностику
          </div>
          <div class="request__subtitle">
            Получите диагностику в день консультации врача
          </div>
        </div>
        <button @click="$bvModal.show('my-modal')" class="btn">
          Записаться на прием
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Request"
}
</script>

<style scoped lang="scss">
.request {
  background: linear-gradient(90deg, #3E697E 0%, #245076 100%);
}

.request__inner {
  padding: 80px 0;

  @media (max-width: 1290px) {
    padding: 68px 0;
  }

  @media (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
  }
}

.request__title {
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
  color: #FFFFFF;

  @media (max-width: 1290px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    margin-bottom: 23px;
    text-align: center;
    width: 100%;
    max-width: 600px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
  }
}

.request__subtitle {
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;

  @media (max-width: 1290px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 32px;
  }
}

.btn {
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
    font-size: 18px;
    padding: 16px 24px 18px;
  }

  @media (max-width: 900px) {
    font-size: 22px;
    padding: 19px 51px 16px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 16px 30px 18px;
  }

  @media (max-width: 450px) {
    margin-top: 30px;
    font-size: 16px;
    padding: 12px 25px 14px;
  }

}
</style>
