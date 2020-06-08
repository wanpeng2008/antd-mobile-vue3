import classnames from 'classnames';

import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
  name: 'WingBlank'
})
class WingBlank extends Vue {
  @Prop({
    type: String,
    default: 'am-wingblank'
  })
  public prefixCls?: string;
  @Prop({default: 'lg'})
  public size?: 'sm' | 'md' | 'lg';
  public static install: (Vue) => void;

  public render() {
    const {prefixCls, size} = this;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`);

    return (
      <div class={wrapCls}>
        {this.$slots.default}
      </div>
    );
  }
}

export default WingBlank as any;
