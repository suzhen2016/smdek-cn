<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide text-box" v-for="(item,key,index) in model" :key='index'>
        <img class="swiper-slide" v-show='!item.hasText' :src='item.url'>
        <div v-if='item.hasText' class="height">
        </div>
        <div class='text' v-if='item.hasText'>
          <h5>项目大事件</h5>
          <p v-for="(txt,key,index) in item.text" :key='index'>
            {{txt}}
          </p>
          <div class="middle-img">
            <img src="../assets/logo.png" alt="">
          </div>
          <p>感谢大家的支持与关注</p>
          <p>项目组</p>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'swiper-bar',
  props: ['model'],
  data () {
    return {
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 100,
      autoplay: 1000
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // onInit: function (swiper) {
      //   console.log('uu')
      // }
    })
    console.log(this.model)

    //
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 60%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-pagination-bullet {
  width: 0.833rem;
  height: 0.833rem;
  display: inline-block;
  background: #7c5e53;
}
.text-box {
  position: relative;
  text-align: center;
}
.height {
  height: 30rem;
}
.text {
  position: absolute;
  top: 20px;
  left: 20%;
  z-index: 9999;
  /* color: #fff; */
  width: 60%;
  height: 28rem;
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
}
.text p {
  margin: 0 auto;
  font-size: 1.4rem;
  overflow: hidden;
}
.text p:last-child,
.text p:nth-last-child(2) {
  text-align: right;
}

.text h5 {
  margin: 0.4rem auto;
}
.middle-img {
  width: 15rem;

  display: inline-block;
}
.middle-img img {
}
</style>
