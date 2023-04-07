<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      =
      {{ result }}
    </div>
    <div class="keyboards">
      <button @click="sumOperands(operand1, operand2)">+</button>
      <button @click="subtractOperands">-</button>
      <button @click="result = operand1 * operand2">*</button>
      <button @click="result = operand1 / operand2">/</button>
      <button @click="inPower(operand1, operand2)">**</button>
      <button @click="floorDiv">//</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "calc-ulator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    onChangeInput(event) {
      console.log(event);
      this.operand3 = event.target.value;
    },
    sumOperands(operand1, operand2) {
      this.result = operand1 + operand2;
    },
    subtractOperands() {
      this.result = this.operand1 - this.operand2;
    },
    inPower(operand1, operand2) {
      this.result = operand1 ** operand2;
    },
    floorDiv() {
      this.result = Math.floor(this.operand1 / this.operand2);
    },
  },
};
</script>
