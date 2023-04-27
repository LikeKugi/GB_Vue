<template>
  <main>
    <button @click="show = !show">add payment</button>
    <add-payment-form v-if="show" />
    <payments-display :items="currentElements" />
    <div class="total" v-if="fullPrice">Total cost: {{ fullPrice }}</div>
    <pagination-list
      :cur="page"
      :n="n"
      :length="paymentsList.length"
      @paginate="changePage"
    />
  </main>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import PaymentsDisplay from "@/components/PaymentsDisplay.vue";
import AddPaymentForm from "@/components/AddPaymentForm.vue";
import PaginationList from "@/components/PaginationList.vue";

export default {
  name: "DashboardView",
  components: {
    PaymentsDisplay,
    PaginationList,
    AddPaymentForm,
  },
  data() {
    return {
      show: false,
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
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style></style>
