import Vue from 'vue'
import FloatLabel from 'components/FloatLabel'

export const ctorInput = () => {
  return new Vue({
    components: { FloatLabel },
    render: h => {
      return h('float-label', [
        h('input', {
          attrs: {
            type: 'text',
            placeholder: 'Name'
          }
        })
      ])
    }
  }).$mount().$children[0]
}

export const ctorTextArea = () => {
  return new Vue({
    components: { FloatLabel },
    render: h => {
      return h('float-label', [
        h('textarea', {
          attrs: {
            placeholder: 'Comment'
          }
        })
      ])
    }
  }).$mount().$children[0]
}

export const ctorSelect = () => {
  return new Vue({
    components: { FloatLabel },
    render: h => {
      return h('float-label', [
        h('select', [
          h('option', {
            attrs: {
              disabled: 'disabled',
              selected: 'selected'
            }
          }, 'Framework')
        ])
      ])
    }
  }).$mount().$children[0]
}
