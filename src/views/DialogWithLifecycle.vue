<template>
  <view-wrapper
    :information="information"
  >
    <div class="centerd">
      <el-button
        type="primary"
        @click="isDialogVisible = true"
      >
        Click me to open dialog
      </el-button>
    </div>

    <empty-dialog
      v-if="isDialogVisible"
      @onClose="isDialogVisible = false"
    />
  </view-wrapper>
</template>

<script>
import ViewWrapper from '@/layouts/ViewWrapper.vue'
import EmptyDialog from '@/components/EmptyDialog.vue'

export default {
  name: 'DialogWithLifecycle',
  components: {
    ViewWrapper,
    EmptyDialog
  },
  data () {
    return {
      information: 'When using dialog with v-if to use lifecycle hook, maybe we need to define property to bind visible.sync. <br /> And then, make it truthy after mount. <br /> Otherwise the transition animation would not be fired for the first time.',

      isDialogVisible: false
    }
  }
}
</script>

<style scoped>
.centerd {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>