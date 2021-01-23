<template>
  <view-wrapper
    :information="information"
  >
    <div class="centered">
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

      items: ['Kevin', 'Sarah', 'David', 'Tom', 'Akao', 'Matthrew Forrest Matthrew Forrest', 'Oliver', 'Jake', 'Harry', 'Tom', 'James', 'Smith', 'Thomas', 'Daxtor', 'Ken', 'Tailor', 'Jessy', 'Kate', 'Pat'],
      selectedItem: 'Kevin'
    }
  }
}
</script>

<style lang="scss" scoped>
.centered {
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
