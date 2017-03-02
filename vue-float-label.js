import FloatLabel from './components/FloatLabel'

const VueFloatLabel = {
  install (Vue, _) {
    Vue.component(FloatLabel.name, FloatLabel)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFloatLabel)
}

export default VueFloatLabel
