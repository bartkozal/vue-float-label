<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :class="classObject" :style="{ width }" @click="focusFormEl">
      {{ floatLabel }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  props: {
    on: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      formEl: undefined,
      isActive: false,
      isFocused: false
    }
  },
  mounted () {
    this.formEl = this.$el.querySelector('input, textarea, select')
    this.formEl.addEventListener('input', this.updateIsActive)
    this.formEl.addEventListener('input', this.updateIsFocused)
    this.formEl.addEventListener('blur', this.updateIsFocused)
    this.formEl.addEventListener('focus', this.updateIsFocused)
  },
  beforeDestroy () {
    this.formEl.removeEventListener('input', this.updateIsActive)
    this.formEl.removeEventListener('input', this.updateIsFocused)
    this.formEl.removeEventListener('blur', this.updateIsFocused)
    this.formEl.removeEventListener('focus', this.updateIsFocused)
  },
  methods: {
    focusFormEl () {
      this.formEl.focus()
    },
    updateIsActive (e) {
      this.isActive = e.target.value.length > 0
    },
    updateIsFocused (e) {
      this.isFocused = e.target === document.activeElement && this.isActive
    }
  },
  computed: {
    classObject () {
      return {
        'vfl-label-on-input': this.on && this.isActive,
        'vfl-label-on-focus': this.isFocused
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    width () {
      return this.formEl ? `${this.formEl.clientWidth}px` : 'auto'
    },
    floatLabel () {
      if (this.label) return this.label

      switch (this.formElType) {
        case 'input':
        case 'textarea':
          return this.formEl.placeholder
        case 'select':
          return this.formEl.querySelector('option[disabled][selected]').innerHTML
        default:
          return ''
      }
    }
  }
}
</script>

<style>
.vfl-has-label {
  position: relative;
}

.vfl-label {
  position: absolute;
  top: 0;
  left: 0.1em;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 0.8em;
  color: #aaa;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: all 0.2s ease-out;
}

.vfl-label-on-input {
  top: -1.3em;
  pointer-events: all;
  opacity: 1;
}

.vfl-label-on-focus {
  color: #0074d9;
}

.vfl-has-label input:focus,
.vfl-has-label textarea:focus,
.vfl-has-label select:focus {
  outline: 0;
}
</style>
