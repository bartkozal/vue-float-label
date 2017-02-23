<template>
  <div class="vfl-has-label">
    <div class="vfl-label" :style="{ width }" @click="">
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
      placeholder: '',
      width: 'auto'
    }
  },
  mounted () {
    const el = this.$el.querySelector('input, textarea')
    const rightPadding = 6

    this.placeholder = el.placeholder
    this.width = `${el.clientWidth - rightPadding}px`
    el.placeholder = ''
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
