<template>
  <div class="menu-tree">
      <ul v-for="(item, index) in list" :key="index">
        <li>
            <h2>{{item.title}}</h2>
            <menuTree v-if='item.children' :list='item.children' :class="child"></menuTree>
        </li>
      </ul>
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
    ul{
      margin-bottom: 20px;
      background-color: #fff;
      li{
        h2{
          padding: 0 20px;
          height: 88px;
          line-height: 88px;
          color: #333;
          font-size: 32px;
        }
    }
  }
}
.child{
  li{
    margin-bottom: -1px;
    padding: 24px 20px;
    height: 96px;
    line-height: 96px;
    border-bottom: 1px solid #eee;
    font-size: 30px;
  }
}
            
        
 

</style>
