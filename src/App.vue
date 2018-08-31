<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
// 标注模板信息
export default {
  name: 'App'
}
</script>

<style>
html {
  font-size: 62.5%; /* 10 ÷ 16 × 100% = 62.5% 相当于是10px*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-width: 59.25rem;
  margin: 0 auto;
}

.has-header {
  margin-top: 4.8rem;
}

h2 {
  font-size: 1.68rem;
  font-weight: normal;
  color: #111;
}

ul,
li,
a,
h2 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.8rem;
  background: #000;
  border-bottom: 0.1rem solid #000;
}
</style>
