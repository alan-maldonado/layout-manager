<template>
  <section class="content-header">
    <span class="page-header">{{ title }}</span>
    <!-- Preview and publish buttons -->
    <button
      @click.prevent="submit"
      :disabled="uiLock"
      type="button"
      class="btn btn-primary btn-submit pull-right"
    >
      <span v-show="!isLoading">Publish</span>
      <span v-show="isLoading">
        <i class="fa fa-spinner fa-pulse fa-fw"/>
      </span>
    </button>
    <button
      v-if="isCustomLayout"
      @click.prevent="remove"
      :disabled="uiLock"
      type="button"
      class="btn btn-danger btn-submit pull-right"
    >
      <span v-show="!isLoadingRemove">Remove</span>
      <span v-show="isLoadingRemove">
        <i class="fa fa-spinner fa-pulse fa-fw"/>
      </span>
    </button>

    <button type="button"
            v-if="routeElements"
            @click="redirect(routeElements)"
            :disabled="uiLock"
            class="btn btn-default btn-all-layouts pull-right">All Layouts</button>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import swal from 'sweetalert2'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    layoutName: {
      type: String,
      required: true
    },
    routeElements: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isLoading: false,
      isLoadingRemove: false,
      uiLock: false
    }
  },
  computed: {
    ...mapState(['route']),
    isCustomLayout () {
      return !!this.route.meta.elementType
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      await this.submitLayout(this.layoutName)
        .then(res => {
          if (res.status === 200) {
            this.showSuccessPopup()
          } else {
            this.showErrorPopup()
          }
        })
        .catch(() => {
          this.showErrorPopup()
        })
      this.isLoading = false
    },
    remove () {
      swal({
        title: 'Warning',
        text: `Please, confirm to remove ${this.title}!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!'
      }).then(() => this.removeCustomLayout())
        .catch()
    },
    async removeCustomLayout () {
      this.isLoadingRemove = true
      await this.removeLayout(this.layoutName)
        .then(res => {
          console.log(res)
          if (res.status === 204) {
            this.fetchLayout(this.layoutName)
            this.showSuccessPopup()
          } else {
            this.showErrorPopup()
          }
        })
        .catch((error) => {
          console.log('Remove layout Error:', error)
          this.showErrorPopup()
        })
      this.isLoadingRemove = false
    },
    ...mapActions({
      openPreview: 'openPreview'
    }),
    ...mapActions('Layouts', {
      fetchLayout: 'fetchLayout',
      submitLayout: 'saveLayout',
      removeLayout: 'deleteLayout'
    }),
    showSuccessPopup () {
      swal({
        title: 'Success',
        text: 'The layout has been saved successfully!',
        type: 'success'
      })
    },
    showErrorPopup () {
      swal({
        title: 'Warning',
        text: 'Something went wrong, please try again later',
        type: 'error'
      })
    },
    redirect (routeName) {
      this.$router.push({
        name: routeName
      })
    }
  }
}
</script>
