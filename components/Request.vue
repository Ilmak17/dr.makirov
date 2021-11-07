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
}

.request__title {
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 600;
  color: #FFFFFF;
}

.request__subtitle {
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
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
}
</style>
