# vue-float-label

Float label pattern for Vue.js

TODO: gif

```html
<float-label>
  <input type="text" placeholder="First name">
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

Override `.vfl-label` class to meet yout design requirements:

TODO

## Development

1. Clone the repository:

    ```sh
    $ git clone git@github.com:bkzl/vue-fraction-grid.git
    ```

2. Start the development:

    ```sh
    $ npm start
    ```

* * *

Code is open sourced [on GitHub](https://github.com/bkzl/vue-float-label). Up to date changelog is available under [the releases section](https://github.com/bkzl/vue-float-label/releases).

I appreciate any comments, feedback, and information about potential issues. Have you experienced a bug or noticed a mistake in documentation? Please [add a new issue](https://github.com/bkzl/vue-float-label/issues). Thanks!
