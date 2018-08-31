<template>
  <div class="home-view has-header">
    <div class="luo_box">
      <img src="../../static/img/lunbo_one.png" alt="">
    </div>
    <h1>合作伙伴</h1>
    <footer-we class="footer"></footer-we>

  </div>

</template>

<script>
import FooterWe from '../components/FooterWe'
import LineBar from '../components/LineBar'
export default {
  name: 'home-view',
  components: { FooterWe, LineBar },
  data () {
    return {
      msg: '欢迎来到我的家园'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  /* border: 2px solid #ccc; */
}
.luo_box {
  width: 100%;
}
.luo_box img {
  width: 100%;
}

.line {
  width: 100%;
  height: 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
}
.line .left {
  border: 2px solid blue;

  flex: 3;
}
.line span {
  flex: 1;
  text-align: center;
  color: blue;
}
.line .right {
  border: 2px solid blue;

  flex: 3;
}
</style>
