<template>
  <section class="content">
    <transition name="page" mode="out-in">
      <div class="list-group layout-list">
        <a
          v-for="element in elements"
          class="list-group-item list-group-item-action option" href="#"
          :key="element.id" @click.prevent="select(element)">
          <picture class="option__thumbnail">
            <img
              v-if="element.image" class="option__image"
              :src="element.image" :alt="element.title">
          </picture>
          <div class="option__desc align-middle">
            <span class="option__title">{{ element.title }}</span> / <span class="text-primary option__type">{{ element.hasLayout ? 'Custom' : 'Default' }}</span>
            <a
              v-if="element.hasLayout" href="#" class="option__action option__action--edit"
              title="Edit Custom Layout"><span class="glyphicon glyphicon-pencil" />
            </a>
            <a
              v-if="element.hasLayout" href="#" class="option__action option__action--remove"
              title="Remove Custom Layout" @click.stop.prevent="remove(element)"><span class="glyphicon glyphicon-remove"/>
            </a>
            <p class="option__small text-muted" :title="element.description">{{ element.description }}</p>
          </div>
        </a>
      </div>
    </transition>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import swal from 'sweetalert2'

export default {
  computed: {
    ...mapState('route', ['meta']),
    ...mapGetters('Catalogs', ['elements'])
  },
  beforeMount () {
    this.fetch(this.meta.elementType)
    this.fetchCustomLayouts(this.meta.layoutName)
  },
  methods: {
    ...mapActions('Catalogs', {
      fetch: 'fetch'
    }),
    ...mapActions('Layouts', {
      removeLayout: 'deleteLayout',
      fetchCustomLayouts: 'fetchCustomLayouts'
    }),
    select (element) {
      this.$router.push({
        name: this.meta.elementRoute,
        params: {
          elementId: element.id
        },
        query: {
          elementName: element.title
        }
      })
    },
    remove (element) {
      swal({
        title: 'Warning',
        text: `Please, confirm to remove Custom Layout for ${element.title}!`,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!'
      }).then(() => this.removeCustomLayout(element))
        .catch()
    },
    async removeCustomLayout (element) {
      await this.removeLayout(`${this.meta.layoutName}+${element.id}`)
        .then(async response => {
          if (response.data && response.data.statusCode === 200) {
            await this.fetchCustomLayouts(this.meta.layoutName)
          }
        })
        .catch((error) => {
          console.log('Remove layout Error:', error)
        })
    }
  }
}
</script>

<style scoped>
.layout-list {
  padding: 0 15px;
}

.option {
  min-height: 100px;
}

.option__desc {
  display: inline-block;
  margin-left: 85px;
  padding: 15px 0 0;
  vertical-align: middle;
  width: calc(100% - 75px);
}

.option__title, .option__type {
  font-size: 16px;
  font-weight: 500;
}

.option__small {
  margin-top: 4px;
  overflow: hidden;
  overflow-wrap: break-word;
  padding-right: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option__thumbnail {
  display: block;
  height: 80px;
  left: 10px;
  overflow: hidden;
  position: absolute;
  top: 10px;
  width: 80px;
}

.option__image {
  display: block;
  left: 50%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
}

.option__action {
  color: gray;
  opacity: 0;
}

.option__action--edit {
  padding: 0 3px 0 6px;
}

.option__action--edit:hover {
  color: darkgray;
}

.option__action--remove:hover {
  color: red;
}

.list-group-item-action:hover .option__action {
  opacity: 1;
}
</style>
