<template>
  <div class="modal">
    <div class="header">{{ settings.header }}</div>
    <div class="content">
      <add-payment-form v-if="settings.content === 'addPaymentForm'" />
      <auth-form v-else-if="settings.content === 'auth'" />
    </div>
    <div class="footer">
      <button @click="onClickCLose">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import AuthForm from "./AuthForm.vue";
export default {
  props: {
    settings: Object,
  },
  components: { AddPaymentForm, AuthForm },
  methods: {
    onClickCLose() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(68, 61, 61, 0.6);

  & .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 61, 61, 0.2);
  }
  & .header {
    position: relative;
    z-index: 100;
  }
  & .content {
    position: relative;
    z-index: 100;
  }
  &.footer * {
    position: relative;
    z-index: 100;
  }
}
</style>
