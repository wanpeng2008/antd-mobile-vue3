<template>
  <div>
    <div id="basic">
      <markdown :source="title"/>
    </div>
    <div class="markdown-body m-b" id="demo">
      <span></span>
      <h2>示例代码</h2>
    </div>
    <demo1 id="demo1"/>
    
 </div>
</template>

<script lang="ts">
  import demo1 from './demo1.vue';
  
  
  import Component from 'vue-class-component';
  import Radio from '@/packages/radio';
  import title from '../../packages/radio/demo/README.md';

  Vue.use(Radio);
  @Options({
    name: 'ComponentDemo',
    components: {
      demo1
    }
  })
  export default class ComponentDemo extends Vue {
    public title = title;

    public getContainer() {
      return document.getElementById('app-content');
    }
  }
</script>
<style lang="less" scoped>
  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
    bottom: 250px;
    z-index: 500;
  }
</style>
