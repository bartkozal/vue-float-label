# vue-float-label

[![Build Status](https://travis-ci.org/bkzl/vue-float-label.svg?branch=master)](https://travis-ci.org/bkzl/vue-float-label)

Float label pattern for Vue.js. Cross-browser compatible and easy to customize
with CSS.

![intro](https://github.com/bkzl/vue-float-label/blob/master/demo/intro.gif)

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

Load script and stylesheet files from CDN:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="//rawgit.com/bkzl/vue-float-label/v1.0.1/dist/vue-float-label.css">
</head>
<body>
  <div id="root"></div>
  <script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min.js"></script>
  <script src="//rawgit.com/bkzl/vue-float-label/v1.0.1/dist/vue-float-label.js"></script>
  <script>
    new Vue({
      el: '#root',
      template: '<float-label>...</float-label>'
    })
  </script>
</body>
</html>
```

## Usage

Wrap text/email/password input or textarea with `<float-label>`:

```html
<float-label>
  <input type="email" placeholder="E-mail">
</float-label>

<float-label>
  <textarea placeholder="comment"></textarea>
</float-label>
```

### Customization

Style `.vfl-label`, `.vfl-label-on-input` and `.vfl-label-on-focus`
to meet your design requirements:

![example](https://github.com/bkzl/vue-float-label/blob/master/demo/example.gif)

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

## Development

1. Clone the repository:

    ```sh
    $ git clone git@github.com:bkzl/vue-float-label.git
    ```

2. Start development:

    ```sh
    $ npm start
    ```

* * *

Code is open sourced [on GitHub](https://github.com/bkzl/vue-float-label). Up to date changelog is available under [the releases section](https://github.com/bkzl/vue-float-label/releases).

I appreciate any comments, feedback, and information about potential issues. Have you experienced a bug or noticed a mistake in documentation? Please [add a new issue](https://github.com/bkzl/vue-float-label/issues). Thanks!
