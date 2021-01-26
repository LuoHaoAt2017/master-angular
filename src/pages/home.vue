<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import Battlefield from '../components/Battlefield.vue';
@Component({
  name: 'Home',
  components: {
    Battlefield
  }
})
export default class App extends Vue  {

  render(h: CreateElement): VNode {
    return h('div', {
      staticClass: 'container'
    }, [h(Battlefield)]);
  }

  mounted() {

  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  padding: 10px;
}
</style>
