import {VNode} from 'vue';
import {Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

@Options({
  name: 'TouchFeedback'
})
class TouchFeedback extends Vue {
  @Prop({type: Boolean, default: false})
  public disabled?: boolean;
  @Prop({type: String})
  public activeClassName?: string;
  public active: boolean = false;

  public updated() {
    if (this.disabled && this.active) {
      this.active = false;
    }
  }

  public triggerEvent(type, isActive, ev) {
    const eventType = `on${type}`;
    const children = this.$slots.default && this.$slots.default()[0];
    if (children[eventType]) {
      children[eventType](ev);
    }
    if (isActive !== this.active) {
      this.active = isActive;
    }
    this.$emit(type.toLowerCase(), ev);
  }

  public onTouchStart(e) {
    this.triggerEvent('TouchStart', true, e);
  }

  public onTouchMove(e) {
    this.triggerEvent('TouchMove', false, e);
  }

  public onTouchEnd(e) {
    this.triggerEvent('TouchEnd', false, e);
  }

  public onTouchCancel(e) {
    this.triggerEvent('TouchCancel', false, e);
  }

  public onMouseDown(e) {
    // pc simulate mobile
    this.triggerEvent('MouseDown', true, e);
  }

  public onMouseUp(e) {
    this.triggerEvent('MouseUp', false, e);
  }

  public onMouseLeave(e) {
    this.triggerEvent('MouseLeave', false, e);
  }

  public render() {
    const {disabled, activeClassName} = this;
    const events = disabled ? undefined : {
      onTouchstart: this.onTouchStart,
      onTouchmove: this.onTouchMove,
      onTouchend: this.onTouchEnd,
      onTouchcancel: this.onTouchCancel,
      onMousedown: this.onMouseDown,
      onMouseup: this.onMouseUp,
      onMouseleave: this.onMouseLeave
    };
    const child: VNode = this.$slots.default()[0];
    if (!disabled && this.active) {
      if (child.el) {
        const elm = child.el as HTMLElement;
        if (!elm.classList.contains(activeClassName)) {
          elm.classList.add(activeClassName);
        }
      }
    } else {
      if (child.el) {
        const elm = child.el as HTMLElement;
        if (elm.classList.contains(activeClassName)) {
          elm.classList.remove(activeClassName);
        }
      }
    }
    if (child.props) {
      Object.assign(child.props, events);
    } else {
      child.props = events;
    }
    return child;
  }
}

export default TouchFeedback as any;
