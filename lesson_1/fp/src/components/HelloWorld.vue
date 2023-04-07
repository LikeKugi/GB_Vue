<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <br />
    {{ message }}
    <br />
    <button v-on:click="onClickBtn">Click me</button>
    <button @click="onClickBtn">Click me</button>
    <br />
    <input
      type="text"
      name="text"
      id="text"
      @focus="onInputFocus"
      @blur="onBlur"
    />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
  methods: {
    onClickBtn() {
      console.log("clicked btn");
    },
    onInputFocus() {
      console.log("is focused");
    },
    onBlur() {
      console.log("Blured");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
