<template>
  <el-container
    class="view-wraper"
  >
    <el-aside
     width="64px"
    >
      <el-button
        type="primary"
        icon="el-icon-info"
        circle
        @click="showInformation"
      />
    </el-aside>
    <el-main
      class="view-wraper_main"
    >
      <slot />
    </el-main>
  </el-container>
</template>

<script>
export default {
  props: {
    information: {
      type: String,
      required: true
    }
  },
  methods: {
    showInformation () {
      this.$alert(this.information, 'Info', {
        confirmButtonText: 'OK',
        dangerouslyUseHTMLString: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.view-wraper {
  height: 100%;
  &_main {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
