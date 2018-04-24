<template>
  <div class="index">
      <top-header></top-header>
      <top-container></top-container>
      <index-content></index-content>
      <index-footer></index-footer>
  </div>
</template>

<script>
import topHeader from './TopHeader'
import topContainer from './Topcontainer'
import indexContent from './index-content'
import indexFooter from './index-footer'
export default {
  components: {
    topHeader,
    topContainer,
    indexContent,
    indexFooter
  }
}
</script>

<style>

</style>
