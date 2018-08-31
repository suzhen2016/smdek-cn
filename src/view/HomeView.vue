<template>
  <div class="home-view has-header">
    <!-- <div class="luo_box">
      <img src="../../static/img/lunbo_one.png" alt="">
    </div> -->
    <swiper-bar :model='listImg'></swiper-bar>

    <line-bar title='公告'>
    </line-bar>
    <swiper-bar :model='listChannel'></swiper-bar>

    <line-bar title='app下载'>
    </line-bar>

    <div style='height:40rem'>

    </div>
    <line-bar title='团队介绍'>
    </line-bar>

    <div style='height:40rem'>

    </div>
    <line-bar title='新闻动态'>
    </line-bar>
    <div style='height:40rem'>

    </div>

    <footer-we class="footer"></footer-we>

  </div>

</template>

<script>
import FooterWe from '../components/FooterWe'
import LineBar from '../components/LineBar'
import SwiperBar from '../components/SwiperBar'
export default {
  name: 'home-view',
  components: { FooterWe, LineBar, SwiperBar },
  data () {
    return {
      listImg: [{ url: '../../static/img/lunbo_one.png', hasText: false }, { url: '../../static/img/lunbo_two.png', hasText: false }],
      listChannel: [{ url: '../../static/img/lunbo_one.png', hasText: true, text: ['案件实打实的打哈萨克大大好大', '好好地哈师大看哈看的发动机还房贷'] }, { url: '../../static/img/lunbo_two.png', hasText: true, text: ['哈哈大很符合大姐大就是件大事件很大很大声粉底防静电', 'hi大海的还好回复电话费的方法大幅度'] }]
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
