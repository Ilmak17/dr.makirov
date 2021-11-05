<template>
  <div>
    <Header/>
    <Nav/>
    <Intro/>
    <AboutMe/>
    <Treatment/>
    <Diagnostics/>
    <Request/>
    <Team/>
    <Address/>
    <Reviews/>
  </div>
</template>

<script>

import Header from "~/components/Header";
import Nav from "~/components/Nav";
import Intro from "~/components/Intro";
import AboutMe from "~/components/AboutMe";
import Treatment from "~/components/Treatment";
import Diagnostics from "~/components/Diagnostics";
import Request from "~/components/Request";
import Team from "~/components/Team";
import Address from "~/components/Address";
import Reviews from "~/components/Reviews";

export default {
  name: "index",
  components: {
    Header,
    Nav,
    Intro,
    AboutMe,
    Treatment,
    Diagnostics,
    Request,
    Team,
    Address,
    Reviews
  },
  data() {
    return {}
  },
  methods: {}
};
</script>
<style lang="scss">

body {
  line-height: 1.2;
  color: #FFFFFF;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0 0 15px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1300px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
}

.transform {
  &:hover {
    transform: translateY(-5px);
  }
}

.title {
  padding-top: 114px;
  font-size: 39px;
  font-weight: 600;
  text-align: right;
  color: #003D4A;
}
</style>
