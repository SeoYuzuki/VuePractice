<template>
  <div id="app">
    <h1>Stateful vs. Functional Component Benchmark</h1>

    <p>
      Open devtools console, select component type below, click the "Add Items"
      button.
    </p>
    <p>
      1,000 random items will be generated, and the time to render will be
      logged to the console.
    </p>

    <form @submit.prevent="onSubmit">
      <label>
        Component type:
        <select v-model="component">
          <option value="StatefulLi">Stateful</option>
          <option value="FunctionalLi">Functional</option>
        </select>
      </label>

      <br />
      <br />
      <button type="submit">Add Items</button>
    </form>
    <ul>
      <component
        :is="component"
        v-for="item in items"
        :key="item"
        :index="item"
        >{{ item }}</component
      >
    </ul>
  </div>
</template>

<script>
import FunctionalLi from "./functionalComponent";
import StatefulLi from "./functionalComponentNot";

export default {
  components: {
    StatefulLi,
    FunctionalLi,
  },

  data: () => ({
    component: "StatefulLi",
    items: [],
  }),

  beforeUpdate() {
    console.time();
  },

  updated() {
    console.log("Time for render:");
    console.timeEnd();
  },

  methods: {
    onSubmit() {
      this.items = Array.from({ length: 10000 }, () => {
        return Math.random();
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
