<template>
  <div class="home">
    <aaa-aaa></aaa-aaa>
    <div class="content">
      <a-radio-group @change="handleChange">
        <a-radio-button value="view">查看</a-radio-button>
        <a-radio-button value="edit">编辑</a-radio-button>
      </a-radio-group>
    </div>
    <bbb-bbb></bbb-bbb>
  </div>
</template>

<script lang="ts">
import { Radio } from 'ant-design-vue';
import { Vue, Component, Mixins } from 'vue-property-decorator';
import FormBase from '../mixins/FormBase';
import AAAAAA from '../components/aaa-aaa.vue';
import BBBBBB from '../components/bbb-bbb.vue';

@Component({
  name: 'Home',
  components: {
    'aaa-aaa': AAAAAA,
    'bbb-bbb': BBBBBB,
    ARadioButton: Radio.Button,
    ARadioGroup: Radio.Group
  }
})
export default class App extends Mixins(FormBase)  {
  mounted() {
  }
}
</script>

<style lang="less" scoped>

</style>
