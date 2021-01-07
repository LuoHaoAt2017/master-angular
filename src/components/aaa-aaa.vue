<template>
  <div class="container">
    <a-button v-for="(item, index) in headerActions" :key="index">
      {{ item.label }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator';
import FormBase from '../mixins/FormBase';
import { Button } from 'ant-design-vue';

@Component({
  name: 'aaa-aaa',
  components: {
    AButton: Button
  }
})
export default class AAAAAA extends Mixins(FormBase) {
  
}
</script>

<style lang="less" scoped>

</style>
