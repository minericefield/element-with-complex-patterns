<template>
  <view-wrapper
    :information="information"
  >
    <el-button
      type="primary"
      @click="isDialogVisible = true"
    >
      Change column orders
    </el-button>
    <el-divider />
    <el-table
      :data="items"
    >
      <el-table-column
        v-for="(itemProperty, index) in itemProperties"
        :key="itemProperty + index"
        :prop="itemProperty"
        :label="itemProperty"
      />
    </el-table>

    <dialog-with-dragging-order
      v-if="isDialogVisible"
      :items="itemProperties"
      @onClose="isDialogVisible = false"
      @onApply="itemProperties = $event, isDialogVisible = false"
    />
  </view-wrapper>
</template>

<script>
import ViewWrapper from '@/layouts/ViewWrapper.vue'
import DialogWithDraggingOrder from '@/components/DialogWithDraggingOrder.vue'

export default {
  name: 'LoopColumnsInTable',
  components: {
    ViewWrapper,
    DialogWithDraggingOrder
  },
  data () {
    return {
      information: 'When looping columns with v-for, only giving identitcal property for each item cannot realize reactivity of columns. <br /> We also have to mix it with index, like <strong>:key="itemProperty + index"</strong>',

      isDialogVisible: false,
      items: [
        {
          id: 1,
          name: 'Item 1',
          someProperty1: 'AAAAA',
          someProperty2: 'あいう'
        },
        {
          id: 2,
          name: 'Item 2',
          someProperty1: 'BBBBB',
          someProperty2: 'かきく'
        },
        {
          id: 3,
          name: 'Item 3',
          someProperty1: 'CCCCC',
          someProperty2: 'さしす'
        },
        {
          id: 4,
          name: 'Item 4',
          someProperty1: 'DDDDD',
          someProperty2: 'たちつ'
        },
        {
          id: 5,
          name: 'Item 5',
          someProperty1: 'EEEEE',
          someProperty2: 'なにぬ'
        }
      ],
      itemProperties: [
        'id',
        'name',
        'someProperty1',
        'someProperty2'
      ]
    }
  }
}
</script>
