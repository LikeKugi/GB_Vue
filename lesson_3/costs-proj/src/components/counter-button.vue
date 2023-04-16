<template>
  <div class="btn-box">
    <button @click="onClick">Clicked {{ counter }} times!</button>
  </div>
</template>

<script>
export default {
  name: "counter-button",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter += 1;
    },
    mousover() {
      console.log(this.counter);
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    const btn = this.$el.querySelector("button");
    if (btn) {
      btn.addEventListener("mouseover", this.mousover);
    }
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("unmount");
    const btn = this.$el.querySelector("button");
    if (btn) {
      btn.removeEventListener("mouseover", this.mousover);
    }
  },
};
</script>

<style>
button {
  display: block;
  padding: 10px 15px;
  margin: 0 auto;
}
</style>
