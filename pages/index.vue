<template>
  <div>
    <Header/>
    <Nav/>
  </div>
</template>

<script>

import Header from "~/components/Header";
import Nav from "~/components/Nav";

export default {
  name: "index",
  components: {
    Header,
    Nav
  },
  data() {
    return {}
  },
  methods: {}
};
</script>
<style lang="scss">
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
</style>
