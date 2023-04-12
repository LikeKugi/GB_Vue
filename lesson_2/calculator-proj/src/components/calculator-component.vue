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
    <div class="screen-keyboard">
      <label for="screenKeyboard">Отобразить экранную клавиатуру</label>
      <input
        v-model="screenKeyboard"
        type="checkbox"
        name="screenKeyboard"
        id="screenKeyboard"
      />
      <div v-show="screenKeyboard" class="keyboards">
        <button
          v-for="btn in screenKeys"
          :key="btn"
          @click="screenKeysAdd(btn, operandTarget)"
        >
          {{ btn }}
        </button>
        <br />
        <label v-for="target in screenOperandTarget" :key="target"
          >{{ target }}
          <input
            v-model="operandTarget"
            type="radio"
            :value="target"
            name="operatorTarget"
          />
        </label>
        <br />
        checked: {{ operandTarget }}
      </div>
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
      screenKeyboard: false,
      screenKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Backspace"],
      screenOperandTarget: ["operand1", "operand2"],
      operandTarget: "operand1",
    };
  },
  methods: {
    calculate(operation = "+") {
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
    screenKeysAdd(value, target) {
      console.log(value, target);
      console.log(this[target]);
      if (Number(value)) {
        this[target] = Number(String(this[target]) + value);
      } else {
        this[target] = Number(String(this[target]).slice(0, -1));
      }
    },
  },
};
</script>
