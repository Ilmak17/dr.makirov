<template>
  <nav>
    <div class="container d-flex justify-content-between">
      <a class="nav__link" v-for="(item, index) in navItems"
         :key="item.id">
        {{ item.name }}
      </a>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
      navItems: [
        {
          id: 0,
          name: "Врачи",
          path: "",
        },
        {
          id: 1,
          name: "Адреса",
          path: "",
        },
        {
          id: 2,
          name: "Вопросы",
          path: "",
        },
        {
          id: 3,
          name: "Отзывы",
          path: "",
        },
        {
          id: 4,
          name: "Стационар",
          path: "",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  margin-top: 35px;
  padding: 15px 0 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.13), inset 0 12px 12px rgba(255, 255, 255, 0.08);
}

.nav__link {
  color: #003D4A;
  font-size: 22px;
  line-height: 1.1;
  font-weight: 400;

  &:hover {
    text-decoration: none;
    color: #1ca3ba;
    cursor: pointer;
  }
}
</style>
