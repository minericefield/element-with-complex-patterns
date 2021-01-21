<template>
  <el-dialog
    title="Empty dialog"
    :visible.sync="isDialogVisible"
    width="64%"
    @close="$emit('onClose')">
    <span>Empty dialog</span>
    <span slot="footer">
      <el-button @click="isDialogVisible = false">Close</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      isDialogVisible: false
    }
  },
  async mounted () {
    await this.$nextTick()
    this.isDialogVisible = true
  }
}
</script>
