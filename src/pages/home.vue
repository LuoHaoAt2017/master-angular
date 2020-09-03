<template>
  <div class="home">
    hello home
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Home'
})
export default class App extends Vue {
  mounted() {
  }
}
</script>

<style lang="less" scoped>

</style>