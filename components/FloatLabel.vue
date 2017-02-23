<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :class="classObject" :style="{ width }" @click="focusEl">
      {{ placeholder }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  data () {
    return {
      el: undefined,
      hasContent: false,
      isFocused: false,
      placeholder: '',
      placeholderRightIndent: 6,
      width: 'auto'
    }
  },
  mounted () {
    this.el = this.$el.querySelector('input, textarea')
    this.width = `${this.el.clientWidth - this.placeholderRightIndent}px`
    this.placeholder = this.el.placeholder
    this.el.placeholder = ''
    this.el.addEventListener('input', this.updateHasContent)
    this.el.addEventListener('input', this.updateIsFocused)
    this.el.addEventListener('blur', this.updateIsFocused)
    this.el.addEventListener('focus', this.updateIsFocused)
  },
  methods: {
    focusEl () {
      this.el.focus()
    },
    updateHasContent (e) {
      this.hasContent = e.target.value.length > 0
    },
    updateIsFocused (e) {
      this.isFocused = e.target === document.activeElement && this.hasContent
    }
  },
  computed: {
    classObject () {
      return {
        'vfl-label-on-input': this.hasContent,
        'vfl-label-on-focus': this.isFocused
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
