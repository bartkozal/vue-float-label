<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :class="classObject" :style="{ width }" @click="focusFormEl">
      {{ label }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  data () {
    return {
      formEl: undefined,
      hasValue: false,
      isActive: false
    }
  },
  mounted () {
    this.formEl = this.$el.querySelector('input, textarea, select')
    this.formEl.addEventListener('input', this.updateHasValue)
    this.formEl.addEventListener('input', this.updateIsActive)
    this.formEl.addEventListener('blur', this.updateIsActive)
    this.formEl.addEventListener('focus', this.updateIsActive)
  },
  beforyDestroy () {
    this.formEl.removeEventListener('input', this.updateHasValue)
    this.formEl.removeEventListener('input', this.updateIsActive)
    this.formEl.removeEventListener('blur', this.updateIsActive)
    this.formEl.removeEventListener('focus', this.updateIsActive)
  },
  methods: {
    focusFormEl () {
      this.formEl.focus()
    },
    updateHasValue (e) {
      this.hasValue = e.target.value.length > 0
    },
    updateIsActive (e) {
      this.isActive = e.target === document.activeElement && this.hasValue
    }
  },
  computed: {
    classObject () {
      return {
        'vfl-label-on-input': this.hasValue,
        'vfl-label-on-focus': this.isActive
      }
    },
    formElType () {
      return this.formEl ? this.formEl.tagName.toLowerCase() : ''
    },
    width () {
      return this.formEl ? `${this.formEl.clientWidth}px` : 'auto'
    },
    label () {
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
