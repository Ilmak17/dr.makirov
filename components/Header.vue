<template>
  <header>
    <div class="container d-flex align-items-center">
      <div class="header__logo">
       <img src="/images/logo.png" alt="logo">
      </div>
      <div class="header__info d-flex justify-content-between align-items-center">
        <div class="header__city d-flex">
          <img src="/images/place.svg" class="icon transform" alt="place">
          Москва
        </div>
        <div class="header__phone d-flex">
          <img src="/images/phone.svg" class="icon transform" alt="phone">
          <a class="header__phone" href="tel:84953613226">8 (495) 361 32 26</a>
        </div>
        <div class="header__instagram">
          <a href="https://www.instagram.com/dr.makirov">
            <img class="transform" src="/images/instagram.svg" alt="instagram">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
header {
  padding-top: 33px;
}

.icon {
  margin-right: 14px;
}

.header__info {
  margin-left: auto;
  width: 100%;
  max-width: 645px;
}

.header__city {
  font-weight: 600;
  font-size: 22px;
  color: #003D4A;
}

.header__phone {
  font-weight: 600;
  color: #003D4A;
  font-size: 31px;

  &:hover {
    text-decoration: none;
    color: #196274;
  }
}
</style>
