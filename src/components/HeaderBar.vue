<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        smartcard
      </router-link>

    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'HomeView'}">
          首页
        </router-link>
      </li>
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'CardEcoView'}">
          卡得生态
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'PartnerView'}">
          合作伙伴
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'HomeView'}">
          联系我们
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
      name: '关闭'
    }
  },
  methods: {

  }
}
</script>

<style >
/* .header-bar { */
.header-bar {
}
.title {
  flex: 1;
  height: 2.2rem;
  max-width: 8.6rem;
  max-height: 2.2rem;
  margin-right: 1.8rem;
  font-size: 0;
  line-height: 3.2rem;
  color: #00b600;
  word-break: break-all;
  background-image: url('../../static/img/logo.png');
  background-size: cover;
  a {
    display: block;
  }
}

ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}

li {
  display: inline-block;
  font-size: 1.6rem;
  margin-right: 1.2rem;
}

.talion {
  font-size: 0;

  background-size: cover;
  width: 2.4rem;
  height: 1.8rem;
  margin-top: 0.4rem;
}
/* } */
</style>
