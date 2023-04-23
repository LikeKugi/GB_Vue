<template>
  <div class="wrapper">
    <input type="text" placeholder="date" v-model="date" />
    <!-- <input type="text" placeholder="category" v-model="category" /> -->
    <div class="categoryList">
      <select v-model="category">
        <option
          v-for="(category, idx) in categoryList"
          :key="idx"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <input type="text" placeholder="value" v-model="value" />
    <button @click="onClick">Save</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

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
    ...mapGetters({ categoryList: "getCategoryList" }),
    getCurrentDate() {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    },
  },
  methods: {
    ...mapMutations(["addPaymentListData"]),
    ...mapActions(["fetchCategory"]),
    onClick() {
      const data = {
        value: this.value,
        date: this.date || this.getCurrentDate,
        category: this.category,
      };
      this.addPaymentListData(data);
      // this.$emit("addNewPayment", data);
    },
  },
  async mounted() {
    if (!this.getCategoryList?.length) {
      await this.fetchCategory();
      this.category = this.categoryList[0];
    }
  },
};
</script>
