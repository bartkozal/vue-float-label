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

1. Install package using `yarn` or `npm`:

    ```sh
    $ yarn add vue-float-label

    # or

    $ npm install --save vue-float-label
    ```

2. Load the plugin by calling `Vue.use()`:

    ```js
    import Vue from 'vue'
    import VueFloatLabel from 'vue-float-label'

    Vue.use(VueFloatLabel)
    ```

3. Now you have access in your templates to the `<float-label>` component.

## Usage

Wrap text/email/password input or textarea:

```html
<float-label>
  <input type="email" placeholder="E-mail">
</float-label>

<float-label>
  <textarea placeholder="comment"></textarea>
</float-label>
```

### Examples

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
