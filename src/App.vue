<template>
  <div id="app">
   <div class="wrapper">
     <div class="box1"></div>
     <div class="box2"></div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.wrapper div{
  height: 1rem;
}
.box1{
  width: 100px;
  background-color: coral;
}
.box2{
  width: 200px;
  background-color: skyblue
}
</style>
