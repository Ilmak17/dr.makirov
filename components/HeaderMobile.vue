<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div>
        <img class="header__logo" src="/images/logoMobile.png" alt="logo">
      </div>

      <div class="header__inner d-flex align-items-center justify-content-between">
        <a href="https://www.youtube.com/channel/UC_naXlwqsuWZPU5qSuXsZRg">
          <img class="youtube transform" src="/images/youtube__mobile.svg" alt="youtube">
        </a>
        <a href="https://www.instagram.com/dr.makirov">
          <img class="instagram transform" src="/images/instagram__mobile.svg" alt="instagram">
        </a>
        <div class="header__burger" @click="openNav()">
          <img src="/images/burger.svg" alt="burger">
        </div>
      </div>

      <div id="myNav" class="overlay">
        <a class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <a v-for="(item, id) in navItems" @click="openSection(item.path)"
              :key="item.id">{{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderMobile",
  data() {
    return {
      navItems: [
        {
          id: 0,
          name: "Врачи",
          path: "Team",
        },
        {
          id: 1,
          name: "Адреса",
          path: "Address",
        },
        {
          id: 2,
          name: "Заболевания",
          path: "TreatmentMobile",
        },
        {
          id: 3,
          name: "Отзывы",
          path: "Reviews",
        },
        {
          id: 4,
          name: "Стационар",
          path: "Hospital",
        },
        {
          id: 5,
          name: "СМИ о нас",
          path: "Media",
        },
        {
          id: 6,
          name: "Сертификаты",
          path: "Certificates",
        },
      ]
    }
  },
  methods: {
    /* Open when someone clicks on the span element */
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },

    /* Close when someone clicks on the "x" symbol inside the overlay */
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },

    openSection(index) {
      let services = document.getElementById(index);
      let top = window.scrollY + services.getBoundingClientRect().y - 100;
      window.scrollTo({left: 0, top, behavior: 'smooth'});
      this.closeNav();
    }
  }
}
</script>

<style scoped lang="scss">
header {
  padding: 30px 0;
  background: #FFFFFF;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

.header__logo {
  @media (max-width: 360px) {
    width: 140px;
    height: 35px;
  }
}

.youtube {
  @media (max-width: 380px) {
    width: 35px;
    height: 29px;
  }
}

.instagram {
  @media (max-width: 380px) {
    width: 25px;
    height: 25px;
  }
}

.header__inner {
  margin-left: 50px;
  width: 100%;
  max-width: 180px;

  @media (max-width: 350px) {
    margin-left: 30px;
  }
}

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  background: rgba(82, 76, 76, 0.51);
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 0;
  right: 20px;
  width: 100%; /* 100% width */
  margin-top: 100px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  text-align: right;
  font-size: 18px;
  color: #FFFFFF;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */

</style>
