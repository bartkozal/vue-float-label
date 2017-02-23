<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :style="{ width }" @click="focusEl">
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
      placeholderRightIndent: 6
    }
  },
  mounted () {
    this.el = this.$el.querySelector('input, textarea')
    this.placeholder = this.el.placeholder
    this.width = `${this.el.clientWidth - this.placeholderRightIndent}px`
    this.el.placeholder = ''
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
}
</style>
