<template>
  <div class="battlefield"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Battlefield',
})
export default class Battlefield extends Vue {

}
</script>

<style lang="less" scoped>
.battlefield {
  height: 700px;
  width: 700px;
  margin: 0 auto;
  border: 1px solid #ccc;
  // border-radius: 4px;
}
</style>