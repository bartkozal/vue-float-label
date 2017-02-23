<template>
  <div>
    <div class="container">
      <float-label>
        <input type="text" placeholder="First name">
      </float-label>

      <float-label>
        <input type="email" placeholder="Email">
      </float-label>

      <float-label>
        <input type="password" placeholder="Password">
      </float-label>

      <float-label>
        <textarea placeholder="Text area"></textarea>
      </float-label>
    </div>
  </div>
</template>

<style>
.container {
  width: 150px;
  margin: auto;
}

body {
  padding: 2em;
}

input,
textarea {
  margin-bottom: 2.5em;
}

input:focus,
textarea:focus {
  outline: 0;
}
</style>
