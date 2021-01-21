<template>
  <el-dialog
    title="Drag to change the order"
    :visible.sync="isDialogVisible"
    width="64%"
    @close="$emit('onClose')"
    class="dialog-with-dragging-order"
  >
    <draggable v-model="editingItems">
      <transition-group>
        <el-card
          v-for="item in editingItems"
          :key="item"
        >
          {{ item }}
        </el-card>
      </transition-group>
    </draggable>
    <span slot="footer">
      <el-button @click="isDialogVisible = false">Close</el-button>
      <el-button type="primary" @click="$emit('onApply', editingItems)">Apply</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isDialogVisible: false,
      editingItems: []
    }
  },
  created () {
    this.editingItems = [...this.items]
  },
  async mounted () {
    await this.$nextTick()
    this.isDialogVisible = true
  }
}
</script>

<style lang="scss" scoped>
.dialog-with-dragging-order {
  ::v-deep .el-card {
    margin-bottom: 16px;
    cursor: grab;
  }
}
</style>
