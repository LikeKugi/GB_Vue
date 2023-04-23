<template>
  <div class="pagination__wrapper">
    <div class="" @click="onClickPage(cur - 1)">-</div>
    <div
      :class="{ active: page === cur }"
      v-for="page in amount"
      :key="page"
      @click="onClickPage(page)"
    >
      {{ page }}
    </div>
    <div class="" @click="onClickPage(cur + 1)">+</div>
  </div>
</template>

<script>
export default {
  name: "PaginationList",
  props: {
    n: Number,
    cur: Number,
    length: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClickPage(p) {
      if (p < 1 || p > this.amount) return;
      this.$emit("paginate", p);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  &__wrapper {
    display: flex;
    justify-content: center;

    & > div {
      padding: 10px;
      cursor: pointer;
    }
  }
}
.active {
  background-color: #030303;
  color: #f2f2f2;
}
</style>
