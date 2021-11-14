<template>
  <header>
    <div class="container d-flex justify-content-between">
        <div>
          <img src="/images/logoMobile.png" alt="logo">
        </div>

        <div class="header__instagram">
          <a href="https://www.instagram.com/dr.makirov">
            <img class="transform" src="/images/instagram.svg" alt="instagram">
          </a>
        </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderMobile"
}
</script>

<style scoped>
header {
  padding: 30px 0;
  background: #FFFFFF;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}
</style>
