<template>
  <div class="container">
    <a-button v-for="(item, index) in footerActions" :key="index">
      {{ item.label }}
    </a-button>
  </div>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator';
import FormBase from '../mixins/FormBase';
import { Button } from 'ant-design-vue';

@Component({
  name: 'bbb-bbb',
  components: {
    AButton: Button
  }
})
export default class BBBBBB extends Mixins(FormBase) {
  
}
</script>

<style lang="less" scoped>

</style>
