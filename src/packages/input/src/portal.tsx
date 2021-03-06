import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
  name: 'Portal'
})
class Portal extends Vue {
  @Prop({required: true})
  public getContainer: () => Element;
  public container: Element;

  public created() {
    this.container = this.getContainer();
  }

  public mounted() {
    this.container.appendChild(this.$el);
  }

  public render() {
    return this.$slots.default();
  }
}

export default Portal as any;
