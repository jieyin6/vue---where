<template>
  <div id="app">
   <top-header></top-header>
   <top-container></top-container>
   <index-content></index-content>
   <index-footer></index-footer>
  </div>
</template>

<script>
import topHeader from './components/TopHeader'
import topContainer from './components/Topcontainer'
import indexContent from './components/index-content'
import indexFooter from './components/index-footer'
export default {
  name: 'App',
  components: {
    topHeader,
    topContainer,
    indexContent,
    indexFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
