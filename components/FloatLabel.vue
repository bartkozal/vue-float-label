<template>
  <div class="vfl-has-label">
    <div class="vfl-label"
      :class="{'vfl-label-active': hasContent, 'vfl-label-focus': isFocused}"
      :style="{ width }"
      @click="focusEl">
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
      width: 'auto',
      placeholder: '',
      placeholderRightIndent: 6,
      hasContent: false,
      isFocused: false
    }
  },
  mounted () {
    this.el = this.$el.querySelector('input, textarea')
    this.placeholder = this.el.placeholder
    this.width = `${this.el.clientWidth - this.placeholderRightIndent}px`
    this.el.placeholder = ''

    const updateHasContent = e => {
      this.hasContent = e.target.value.length > 0
    }

    const updateIsFocused = e => {
      this.isFocused = e.target === document.activeElement && this.hasContent
    }

    this.el.addEventListener('keyup', updateHasContent)
    this.el.addEventListener('keyup', updateIsFocused)
    this.el.addEventListener('blur', updateIsFocused)
    this.el.addEventListener('focus', updateIsFocused)
  },
  methods: {
    focusEl () {
      this.el.focus()
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
  transition: top .2s ease-out;
}

.vfl-label-active {
  top: -1.3em;
}

.vfl-label-focus {
  color: #0074d9
}
</style>
