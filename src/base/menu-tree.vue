<template>
  <div class="menu-tree">
      <div v-for="(item, index) in list" :key="index">
          <div class="menu-title">
            <h2>{{item.title}}</h2>
          </div>
          <div class="child"  v-if='item.children'>
            <menuTree :list='item.children'></menuTree>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'menuTree',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang='scss'>
  .menu-tree{
    div{
      margin-bottom: 20px;
      background-color: #fff;
      .menu-title{
        h2{
          padding: 0 20px;
          height: 88px;
          line-height: 88px;
          color: #333;
          font-size: 32px;
        }
    }
    .child{
      padding-left:20px; 
    }
  }
}


</style>
