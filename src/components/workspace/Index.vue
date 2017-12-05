<template>
  <div id="content-wrap" class="content-wrapper clearfix">
    <content-header :title="routeTitle" :layout-name="layoutName" :route-elements="meta.elementRoute" />
    <content-workspace :layout-name="layoutName" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ContentHeader from './ContentHeader'
import ContentWorkspace from './ContentWorkspace'

const frontendUrl = process.env.FE_URL

export default {
  components: {
    ContentHeader,
    ContentWorkspace
  },
  data () {
    return {
      frontendUrl: frontendUrl
    }
  },
  computed: {
    ...mapState('route', {
      meta: 'meta',
      params: 'params',
      routeName: 'name',
      query: 'query'
    }),
    layoutName () {
      if (this.params.elementId) {
        return `${this.meta.layoutName}+${this.params.elementId}`
      }
      return this.meta.layoutName
    },
    routeTitle () {
      if (this.query.elementName) {
        return this.meta.title.replace('Custom', this.query.elementName)
      }
      return this.meta.title
    }
  },
  async created () {
    await this.fetch('categories')
    await this.fetch('tags')
  },
  methods: {
    ...mapActions('Catalogs', ['fetch'])
  }
}
</script>

<style>
.content-wrapper {
  min-height: 100vh;
}

.content-header {
  padding: 15px 15px 4px 30px;
  margin-bottom: 10px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.btn-preview, .btn-all-layouts {
  margin-right: 10px;
}
.btn-submit {
  margin-right: 15px;
}

.input-group .input-group-addon {
  min-width: 48px;
  border-radius: 5px 0 0 5px;
}
</style>
