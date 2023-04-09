<template>
  <div>
    <div class="display">
      <input v-model.number="operand1" type="number" />
      <input v-model.number="operand2" type="number" />
      =
      {{ result }}
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="error" v-show="error">
      {{ error }}
    </div>
    <div class="strange-messages">
      <template v-if="result < 0">Result &lt; 0</template>
      <template v-else-if="result < 100"> result is less then 100</template>
      <template v-else>result is greater than or equal 100</template>
    </div>
    <div class="keyboards">
      <button
        v-for="operand in operands"
        :key="operand"
        @click="calculate(operand)"
        :disabled="['/', '//'].includes(operand) && operand2 === 0"
        :title="`Operation: ${operand}`"
      >
        {{ operand }}
      </button>
    </div>
    <div class="fibonacci">
      first cell fibonacci: {{ fib1 }} second cell fibonacci:
      {{ fib2 }}
    </div>
    <div class="logs-box">
      <div v-for="(log, date, idx) in logs" :key="date">
        Index: {{ idx }} || Date:
        {{ new Date(+date).toLocaleString("en-GB") }} || Operation: {{ log }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator-component",
  data() {
    return {
      operands: ["+", "-", "*", "/", "**", "//"],
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      logs: {},
    };
  },
  methods: {
    calculate(operation = "+") {
      this.fib1result = this.fib1;
      this.fib2result = this.fib2;
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.subtract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.inPower();
          break;
        case "//":
          this.floorDiv();
          break;
      }
      this.logs[
        Date.now()
      ] = `${this.operand1} ${operation} ${this.operand2} = ${this.result}`;
    },
    add() {
      this.result = this.operand1 + this.operand2;
    },
    subtract() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    divide() {
      if (this.operand2) {
        this.result = this.operand1 / this.operand2;
      } else {
        this.error = "Error: Division by zero";
      }
    },
    inPower() {
      this.result = this.operand1 ** this.operand2;
    },
    floorDiv() {
      if (this.operand2) {
        this.result = Math.floor(this.operand1 / this.operand2);
      } else {
        this.error = "Error: Division by zero";
      }
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
  },
  computed: {
    fib1() {
      return this.fib(this.operand1);
    },
    fib2() {
      return this.fib(this.operand2);
    },
  },
};
</script>
