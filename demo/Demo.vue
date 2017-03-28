<template>
  <div>
    <div class="container">
      <float-label>
        <input type="text" placeholder="First name">
      </float-label>

      <float-label>
        <input type="email" placeholder="Email" v-model="email">
      </float-label>

      <float-label label="Overridden label">
        <input type="password" placeholder="Password">
      </float-label>

      <float-label :on="isActive">
        <input type="text" placeholder="Inactive">
      </float-label>

      <float-label>
        <textarea placeholder="Comment"></textarea>
      </float-label>

      <float-label :dispatch="false">
        <select>
          <option disabled selected>Framework</option>
          <option>Vue</option>
          <option>React</option>
          <option>Angular</option>
          <option>Ember</option>
        </select>
      </float-label>

      <float-label label="Version">
        <select v-model="version">
          <option v-for="option in options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </float-label>

      <div class="example">
        <float-label>
          <input type="text" placeholder="Website">
        </float-label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      email: 'bkzl@me.com',
      version: 'beta',
      options: [
        { value: 'alpha', text: 'Alpha' },
        { value: 'beta', text: 'Beta' },
        { value: 'stable', text: 'Stable' },
      ]
    }
  },
  computed: {
    isActive () {
      return false
    }
  }
}
</script>

<style>
.container {
  width: 150px;
  margin: auto;
}

body {
  padding: 2em;
}

input,
textarea,
select {
  margin-bottom: 2em;
  line-height: 1.15;
  font-size: 14px;
  padding: .4em;
  width: 100%;
}

.example .vfl-label {
  text-transform: uppercase;
}

.example .vfl-label-on-input {
  top: -1em;
}

.example .vfl-label-on-focus {
  color: #ff851b;
}

.example .vfl-label + input {
  padding-left: 0;
  font-size: 100%;
  border: 0;
  border-bottom: 2px solid #aaa;
  transition: border 0.2s;
}

.example .vfl-label-on-focus + input  {
  border-bottom: 2px solid #ff851b;
}
</style>
