<template>
  <el-container
    class="view-wraper"
  >
    <el-aside
      width="132px"
    >
      <div
        class="info"
        @click="showInformation"
      >
        <i class="el-icon-info" />
        <br />
        <b>
          Click to see the info
        </b>
      </div>
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
  ::v-deep aside {
    color: teal;
  }
  .info {
    cursor: pointer;
    ::v-deep i {
      font-size: 32px;
    }
    b {
      text-align: left;
      font-size: 12px;
    }
  }
  &_main {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
