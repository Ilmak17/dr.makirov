<template>
  <div class="block">
    <div class="container">
      <div class="title">СМИ о нас</div>

      <div class="media d-flex justify-content-between" id="Media">
            <iframe width="400" height="250" src="https://www.youtube.com/embed/ssHDR7tkfJk" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="400" height="250" src="https://www.youtube.com/embed/u3DtL6uY0-I" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                  gyroscope; picture-in-picture" allowfullscreen></iframe>

            <iframe width="400" height="250" src="https://www.youtube.com/embed/7a5nup3TOf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
    <Certificates/>
  </div>
</template>

<script>
import Certificates from "~/components/Certificates";

export default {
  name: "Media",
  components: {
    Certificates
  },
}
</script>

<style lang="scss">
.block {
  padding-bottom: 152px;
  background: url("/images/questions/bg.jpg");
  background-size: cover;

  @media (max-width: 1290px) {
    padding-bottom: 100px;
  }

  @media (max-width: 900px) {
    background: url("/images/questions/bg2.jpg");
    background-size: cover;
  }

  @media (max-width: 380px) {
    padding-bottom: 70px;
  }
}

.media {
  margin-top: 60px;
  margin-bottom: 70px;

  @media (max-width: 500px) {
    margin-top: 30px;
  }

  @media (max-width: 950px) {
    align-items: center;
    flex-direction: column;
  }
}

iframe {

  @media (max-width: 1280px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 1100px) {
    width: 300px;
    height: 150px;
  }

  @media (max-width: 950px) {
    width: 450px;
    height: 251.43px;
    margin-bottom: 60px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 590px) {
    margin-top: 45px;
    width: 450px;
    height: 251.43px;

    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 460px) {
    width: 350px;
    height: 200px;


    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 360px) {
    width: 280px;
    height: 150px;
  }
}

</style>
