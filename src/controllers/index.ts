import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'base-controller'
})
export default class BaseController extends Vue {
  public x: number = 0;
  private y: number = 0;
  protected z: number = 0;
  r: number = 1;

  public foo() {
    console.log('foo');
  }

  bar() {
    console.log('bar');
  }
}