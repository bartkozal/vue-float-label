<template>
  <div class="vfl-has-label">
    <div class="vfl-label">{{ placeholder }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'float-label',
  data () {
    return {
      placeholder: ''
    }
  },
  mounted () {
    const el = this.$el.querySelector('input, textarea')
    this.placeholder = el.placeholder
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
  width: 100%;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 0.7em;
  color: #aaa;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
