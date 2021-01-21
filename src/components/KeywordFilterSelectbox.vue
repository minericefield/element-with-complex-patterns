<template>
  <div
    class="selectbox-with-keyword-filtering"
    :class="{ 'focused': isPopoverVisible }"
  >
    <el-popover
      v-model="isPopoverVisible"
      placement="bottom"
      trigger="click"
      class="selectbox-with-keyword-filtering_field"
      @hide="keyword = ''"
    >
      <div
        slot="reference"
        class="selectbox-with-keyword-filtering_field_selected"
      >
        <div class="selectbox-with-keyword-filtering_field_selected_text">
          {{ value }}
        </div>
        <i
          class="el-collapse-item__arrow el-icon-arrow-down"
          :class="{ 'is-active': isPopoverVisible }"
        />
      </div>
      <el-input
        v-model="keyword"
        placeholder="Please input keyword"
        class="selectbox-with-keyword-filtering_field_input"
      />
      <div class="selectbox-with-keyword-filtering_field_table">
        <el-table
          :data="searchedItems"
          :show-header="false"
          @row-click="isPopoverVisible = false, $emit('input', $event)"
        >
          <el-table-column
          >
            <template #default="scope">
              <div :class="{ 'is-selected': scope.row === value }">
                {{ scope.row }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      keyword: '',
      isPopoverVisible: false
    }
  },
  computed: {
    searchedItems () {
      return this.items.filter(item => item.toLowerCase().match(this.keyword.toLowerCase()))
    }
  }
}
</script>

<style lang="scss" scoped>
.selectbox-with-keyword-filtering {
  display: flex;
  align-items: center;
  border: solid 1px #E4E7ED;
  border-radius: 4px;
  &.focused {
    border-color: teal;
  }
  &_field {
    position: relative;
    min-width: 176px;
    padding: 4px 0 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    &_selected {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-icon-arrow-down {
        margin-left: 4px;
        &.is-active {
          transform: rotate(-180deg);
        }
      }
    }
    &_input {
      margin-bottom: 4px;
    }
    &_table {
      max-height: 320px;
      overflow-y: auto;
      ::v-deep td {
        padding-top: 6px;
        padding-bottom: 6px;
      }
      ::v-deep .is-selected {
        color: teal;
      }
    }
  }
}
</style>
