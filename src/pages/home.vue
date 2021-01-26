<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
@Component({
  name: 'Home',
  components: {
  }
})
export default class App extends Vue  {

  render(h: CreateElement): VNode {
    return h('div', {
      props: {},
      class: {},
      staticClass: 'container'
    }, [
      h('p', {
        staticClass: 'child-1'
      }, 'hello world')
    ]);
  }

  mounted() {

  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  height: 60px;
  width: 200px;
  line-height: 60px;
  text-align: center;
  transform: skewX(-45deg);
  border: 1px solid #ccc;
  .child-1 {
    transform: skewX(45deg);
  }
  .child-2 {

  }
  .child-3 {

  }
}
</style>
