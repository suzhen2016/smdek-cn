<template>
  <div class="footer-we">
    <div class="footer-title">
      <h3>联系我们</h3>
      <div class="line_blue"></div>
    </div>
    <div class="info">
      <img src="../assets/logo.png" alt="下载苏氏之道">
      <img src="../assets/logo.png" alt="下载苏氏之道">
      <img src="../assets/logo.png" alt="下载苏氏之道">
    </div>

  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {}
  }
}
</script>

<style scoped>
.footer-we {
  overflow: hidden;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  background-color: indigo;
}
.footer-title {
  margin-top: 3.5rem;
  text-align: center;
}
.line_blue {
  border: 1px solid #fff;
  width: 2rem;
  display: inline-block;
}
.footer-title h3 {
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0rem;
}
.info {
  margin: 0 auto 1.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1.4rem;
  display: inline-block;
  color: #111;
}

img {
  float: left;
  width: 10rem;
  height: 10rem;
}
.info img:nth-child(2) {
  margin: 0 3rem;
}
</style>
