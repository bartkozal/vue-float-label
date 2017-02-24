<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :class="classObject" :style="{ width }" @click="focusInput">
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
      input: undefined,
      hasValue: false,
      isActive: false,
      label: '',
      placeholderIndentation: 6,
      width: 'auto'
    }
  },
  mounted () {
    this.input = this.$el.querySelector('input, textarea')
    this.width = `${this.input.clientWidth - this.placeholderIndentation}px`
    this.label = this.input.placeholder
    this.input.placeholder = ''
    this.input.addEventListener('input', this.updateHasValue)
    this.input.addEventListener('input', this.updateIsActive)
    this.input.addEventListener('blur', this.updateIsActive)
    this.input.addEventListener('focus', this.updateIsActive)
  },
  methods: {
    focusInput () {
      this.input.focus()
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
  top: 0.25em;
  left: 0.3em;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 0.7em;
  color: #aaa;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: top 0.2s ease-out;
}

.vfl-label-on-input {
  top: -1.3em;
}

.vfl-label-on-focus {
  color: #0074d9;
}
</style>
