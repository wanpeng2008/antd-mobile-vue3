<template>
  <div class="demo-preview-item">
    <div class="demo-title">
      {{title}}
    </div>
    <div class="demo-container">
      <slot/>
    </div>
  </div>
</template>
<script lang="tsx">
  import {Options, Vue} from 'vue-class-component';
  import {Prop} from 'vue-property-decorator';

  @Options({
    name: 'DemoWrapper'
  })
  export default class DemoWrapper extends Vue {

    @Prop({type: String})
    public title: string;

  }
</script>
<style lang="less">
  .demo-title {
    padding: 15px 0 9px 15px;
    color: #000;
    font-size: 16px;
    line-height: 16px;
    font-weight: bolder;
    position: relative;
  }
</style>
