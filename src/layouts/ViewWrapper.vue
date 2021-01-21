<template>
  <el-container
    class="view-wraper"
  >
    <el-aside
      width="64px"
    >
      <i
        class="el-icon-notebook-1"
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
      this.$alert(this.information, 'Note', {
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
  ::v-deep i {
    font-size: 32px;
    color: teal;
    cursor: pointer;
  }
  &_main {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
