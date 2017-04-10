# vue-float-label

[![Build Status](https://travis-ci.org/bkzl/vue-float-label.svg?branch=master)](https://travis-ci.org/bkzl/vue-float-label)

Float label pattern for Vue.js. Cross-browser compatible and easy to customize
with CSS.

![intro](https://github.com/bkzl/vue-float-label/raw/master/demo/intro.gif)

```html
<float-label>
  <input type="text" placeholder="Label">
</float-label>
```

## Installation

### yarn / npm

Install package using `yarn` or `npm`:

```sh
$ yarn add vue-float-label

# or

$ npm install --save vue-float-label
```

#### Global

Load the plugin by calling `Vue.use()`:

```js
import Vue from 'vue'
import VueFloatLabel from 'vue-float-label'

Vue.use(VueFloatLabel)
```

Now you have access in your templates to the `<float-label>` component.

#### Local

You may prefer to explicitly import the plugin and use it inside your components:

```vue
<template>
  <float-label>
    ...
  </float-label>
</template>

<script>
import FloatLabel from 'vue-float-label/components/FloatLabel'

export default {
  components: {
    FloatLabel
  }
}
</script>
```

### CDN

Load the script file from CDN:

```html
<div id="root"></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min.js"></script>
<script src="//unpkg.com/vue-float-label"></script>
<script>
  new Vue({
    el: '#root',
    template: '<float-label>...</float-label>'
  })
</script>
```

## Usage

Wrap input, textarea or select with `<float-label>`:

```html
<float-label>
  <input type="email" placeholder="E-mail">
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
```

See more examples at [Demo.vue](https://github.com/bkzl/vue-float-label/blob/master/demo/Demo.vue).

## Customization

### Design

Style `.vfl-label`, `.vfl-label-on-input` and `.vfl-label-on-focus`
to meet your design requirements:

![example](https://github.com/bkzl/vue-float-label/raw/master/demo/example.gif)

```css
.vfl-label {
  text-transform: uppercase;
}

.vfl-label-on-input {
  top: -1em;
}

.vfl-label-on-focus {
  color: #ff851b;
}

.vfl-label + input {
  padding-left: 0;
  font-size: 100%;
  border: 0;
  border-bottom: 2px solid #aaa;
  transition: border 0.2s;
}

.vfl-label-on-focus + input  {
  border-bottom: 2px solid #ff851b;
}
```

### Props

Set `:on` prop to add an additional condition for label activation:

```vue
<template>
  <float-label :on="isActive">
    <input type="text" placeholder="Inactive">
  </float-label>
</template>

<script>
export default {
  computed: {
    isActive () {
      return false
    }
  },
  components: {
    FloatLabel
  }
}
</script>
```

Set `:label` prop to override `placeholder` attribute for input/textarea or
`option[disabled][selected]` for select:

```html
<float-label label="Last name">
  <input type="text" placeholder="Surname">
</float-label>
```

```vue
<template>
  <float-label label="Version">
    <select v-model="version">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </float-label>
</template>

<script>
export default {
  data () {
    return {
      version: 'beta',
      options: [
        { value: 'alpha', text: 'Alpha' },
        { value: 'beta', text: 'Beta' },
        { value: 'stable', text: 'Stable' },
      ]
    }
  },
  components: {
    FloatLabel
  }
}
</script>
```

Set `:dispatch` to `false` to disable triggering `input` event
once the component is mounted:

_By default it's set to true to activate label when form element has value._

```vue
<template>
  <float-label :dispatch="false">
    <input type="email" placeholder="Email" v-model="email">
  </float-label>
</template>

<script>
export default {
  data () {
    return {
      email: 'john@example.com'
    }
  },
  components: {
    FloatLabel
  }
}
</script>
```

## Development

1. Clone the repository:

    ```sh
    $ git clone git@github.com:bkzl/vue-float-label.git
    ```

2. Install dependencies:

    ```sh
    $ yarn install
    ```

3. Start development:

    ```sh
    $ yarn start
    ```

* * *

Code is open sourced [on GitHub](https://github.com/bkzl/vue-float-label). Up to date changelog is available under [the releases section](https://github.com/bkzl/vue-float-label/releases).

I appreciate any comments, feedback, and information about potential issues. Have you experienced a bug or noticed a mistake in documentation? Please [add a new issue](https://github.com/bkzl/vue-float-label/issues). Thanks!
