<template lang="pug">
.template-vue
  h1.template-vue__title {{ 'Vue template-vue rendered' }}
  p(v-if="c") {{ 'axios success' }}
  p(v-if="!c") {{ 'wait axios' }}
  code {{ c }}
</template>

<script>
import axios from "axios";

export default {
  name: "template-vue",
  data() {
    return {
      c: null,
    }
  },
  mounted() {
    this.c = this.get();
  },
  methods: {
    async get() {
      return await axios.get('http://httpbin.org/get');
    }
  }
}
</script>

<style lang="scss" scoped>
.template-vue {
  padding: 20px 0;
  margin: 20px 0;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
}
p {
  margin: 10px 0;
}
</style>
