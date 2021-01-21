<template>
  <div
    id="app"
    class="app"
  >
    <el-container
      class="app_container"
    >
      <el-header>
        <el-tabs
          :value="currentRouteName"
          @input="transit"
        >
          <el-tab-pane
            v-for="routeName in allRouteNames"
            :key="routeName"
            :name="routeName"
            :label="routeName"
          />
        </el-tabs>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    allRouteNames () {
      return this.$router.options.routes.map(route => route.name)
    },
    currentRouteName () {
      return this.$route.name
    }
  },
  methods: {
    transit (name) {
      if (name === this.currentRouteName) return
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
}
.app {
  position: absolute;
  width: 100%;
  height: 100%;
  &_container {
    height: 100%;
  }
}
</style>
