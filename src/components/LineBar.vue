<template>
  <div class="line">
    <div class="left"></div>
    <span>·</span>
    <span>{{title}}</span>
    <span>·</span>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'line-bar',
  props: ['title'],
  comments: {},
  data: function () {
    return {

    }
  }
}
</script>
<style scoped>
.line {
  width: 90%;
  height: 1rem;
  margin: 2rem auto;
  display: flex;
  align-items: center;
}
.line .left {
  border: 2px solid blue;

  flex: 7;
}
.line span {
  flex: 2;
  text-align: center;
  color: blue;
}
.line span:nth-child(2),
.line span:nth-child(4) {
  font-size: 5rem;
  font-style: inherit;
  font-weight: bold;
}
.line span:nth-child(3) {
  font-size: 1.5rem;
  font-style: inherit;
}
.line .right {
  border: 2px solid blue;

  flex: 7;
}
</style>
