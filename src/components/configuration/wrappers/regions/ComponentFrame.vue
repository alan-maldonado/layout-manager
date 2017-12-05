<script>
  import Vue from 'vue'
  import _ from 'lodash'
  export default {
    name: 'ComponentFrame',
    props: {
      stylesheet: {
        type: String,
        default: ''
      },
      stylesheets: {
        type: Array,
        default: () => []
      }
    },
    beforeUpdate () {
      // freezing to prevent unnessessary Reactifiation of vNodes
      this.iApp.children = Object.freeze(this.$slots.default)
    },
    methods: {
      renderChildren () {
        const children = this.$slots.default
        const body = this.$el.contentDocument.body
        // const iframe = this.$el

        if (this.stylesheet) {
          const cssLink = document.createElement('link')
          cssLink.href = this.stylesheet
          cssLink.rel = 'stylesheet'
          cssLink.type = 'text/css'
          body.appendChild(cssLink)
        }

        this.stylesheets.forEach(stylesheet => {
          const cssLink = document.createElement('link')
          cssLink.href = stylesheet
          cssLink.rel = 'stylesheet'
          cssLink.type = 'text/css'
          body.appendChild(cssLink)
        })

        const el = document.createElement('div') // we will mount or nested app to this element
        body.appendChild(el)
        // <link href='http://global.fncstatic.com/static/orion/styles/css/fox-news/article-new.rs.css' rel="stylesheet" type="text/css">
        const iApp = new Vue({
          name: 'IApp',
          // freezing to prevent unnessessary Reactifiation of vNodes
          data: { children: Object.freeze(children) },
          beforeDestroy () {
            const doc = this.$el.ownerDocument
            const win = doc.defaultView
            win.removeEventListener('resize', this.resize)
          },
          mounted () {
            this.$nextTick(() => {
              const doc = this.$el.ownerDocument
              const win = doc.defaultView
              win.addEventListener('resize', this.resize)
              this.resize()
            })
          },
          methods: {
            resize: _.debounce(() => {
              /* resize */
              // const iframeDoc = iframe.contentWindow.document
              // iframe.style['height'] = iframeDoc.body.children[1].scrollHeight + 'px'
            }, 200)
          },
          render (h) {
            return h('div', this.children)
          }
        })
        iApp.$mount(el) // mount into iframe
        this.iApp = iApp // cache instance for later updates
      }
    },
    render (h) {
      return h('iframe', { on: { load: this.renderChildren } })
    }
  }
</script>
