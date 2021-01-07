import { Vue, Component } from 'vue-property-decorator';

@Component
export default class FormBase extends Vue {

  headerActions: any[] = [];

  footerActions: any[] = [];

  handleChange(evt) {
    const opt = evt.target.value;
    if (opt === 'view') {
      this.headerActions = [
        {
          label: '打印',
          value: 'print'
        }, {
          label: '分享',
          value: 'share'
        }
      ];
      this.footerActions = [];
    } else {
      this.headerActions = [
        {
          label: '打印',
          value: 'print'
        }, 
        {
          label: '分享',
          value: 'share'
        }
      ];
      this.footerActions = [
        {
          label: '提交',
          value: 'submit'
        }, {
          label: '暂存',
          value: 'stash'
        }
      ];
    }
  }
}
