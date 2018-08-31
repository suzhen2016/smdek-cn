<template>
  <div class="box">
   <table>
       <tr>
           <th>1</th>
           <th>2</th>
           <th>3</th>
       </tr>
       <tr>
           <td>开始</td>
           <td>开始</td>
           <td>{{msg}}</td>
       </tr>
   </table>
  </div>
</template>

<script>
export default {
  name: 'suzhen',
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
    border: 2px solid #ccc;
}
</style>
