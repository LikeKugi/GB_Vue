<template>
  <div class="wrapper">
    <input type="text" placeholder="date" v-model="date" />
    <input type="text" placeholder="category" v-model="category" />
    <input type="text" placeholder="value" v-model="value" />
    <button @click="onClick">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    onClick() {
      const data = {
        value: this.value,
        date: this.date || this.getCurrentDate,
        category: this.category,
      };
      this.$emit("addNewPayment", data);
    },
  },
};
</script>
