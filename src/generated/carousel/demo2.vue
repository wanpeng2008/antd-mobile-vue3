<template>
  <div class="demo">
    <code-box :code="code"
              :markdown="md">
    </code-box>
  </div>
</template>
<script lang="ts">
  import source from './demo2.txt';
  import md from '../../packages/carousel/demo/demo2.md';

  import {Options, Vue} from 'vue-class-component';
  import CodeBox from '../../components/code-box.vue';

  @Options({
    name: 'Demo2',
    components: {CodeBox}
 })
  export default class Demo2 extends Vue {
    public code = source;
    public md = md;
  }
</script>
