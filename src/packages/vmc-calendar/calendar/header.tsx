import Vue, {VNode} from 'vue';
import Component from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {Locale} from '../data-types';

export interface PropsType {
  title?: string;
  locale?: Locale;
  showClear?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  closeIcon?: VNode;
  clearIcon?: VNode;
}

@Component({
  name: 'Header'
})
class Header extends Vue {
  @Prop({type: String})
  public title?: string;
  @Prop({})
  public locale?: Locale;
  @Prop({type: Boolean})
  public showClear?: boolean;
  @Prop({default: 'X'})
  public closeIcon?: VNode;
  @Prop({})
  public clearIcon?: VNode;

  public render() {
    const {
      title,
      locale = {} as Locale,
      showClear,
      closeIcon,
      clearIcon
    } = this;

    return (
        <div class="header">
          <span class="left" onClick={() => this.$emit('cancel')}>{closeIcon}</span>
          <span class="title">{title || locale.title}</span>
          {
            showClear &&
            <span class="right"
                  onClick={() => this.$emit('clear')}
            >{clearIcon || locale.clear}</span>
          }
        </div>
    );
  }
}
export default Header as any;
