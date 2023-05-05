<template>
  <div>
    <button @click="show = !show">add payment</button>
    <payments-display :items="currentElements" />
    <div class="total" v-if="fullPrice">Total cost: {{ fullPrice }}</div>
    <pagination-list
      :cur="page"
      :n="n"
      :length="paymentsList.length"
      @paginate="changePage"
    />
    <button @click="addFormShow = true">Add new cost +</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import PaginationList from "@/components/PaginationList.vue";

export default {
  name: "DashboardView",
  components: {
    PaymentsDisplay,
    PaginationList,
  },
  data() {
    return {
      addFormShow: false,
      page: 1,
      n: 10,
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
  },
  computed: {
    ...mapGetters({
      fullPrice: "getPaymentsFullValuePrice",
      paymentsList: "getPaymentsList",
    }),
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  async created() {
    // this.$store.dispatch("fetchData");
    await this.fetchData();
    if (this.$route.params?.page) {
      this.page = +this.$route.params?.page;
    }
  },
};
</script>

<style></style>
