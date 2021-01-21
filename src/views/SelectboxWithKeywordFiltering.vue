<template>
  <view-wrapper
    :information="information"
  >
    <div class="centerd">
      <keyword-filter-selectbox
        v-model="selectedItem"
        :items="items"
      />
    </div>
  </view-wrapper>
</template>

<script>
import ViewWrapper from '@/layouts/ViewWrapper.vue'
import KeywordFilterSelectbox from '@/components/KeywordFilterSelectbox.vue'

export default {
  name: 'SelectboxWithKeywordFiltering',
  components: {
    ViewWrapper,
    KeywordFilterSelectbox
  },
  data () {
    return {
      information: 'Made selectbox with keyword filtering with popover and table.',

      items: ['Kebin', 'Sarah', 'David', 'Tom', 'Akao'],
      selectedItem: 'Kebin'
    }
  }
}
</script>

<style lang="scss" scoped>
.centerd {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ::v-deep .selectbox-with-keyword-filtering {
    position: relative;
    top: -20%;
  }
}
</style>
