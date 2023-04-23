<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="item"
          v-for="({ date, category, value, id }, idx) in items"
          :key="idx"
        >
          <th>{{ id }}</th>
          <td>{{ date }}</td>
          <td>{{ category }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
