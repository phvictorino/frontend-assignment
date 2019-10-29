<template>
  <div class="side-menu">
    <ul>
      <li
        v-for="item in list"
        :key="item.route"
        @click="redirect(item)"
        :class="isActiveMenu(item) ? 'active' : null"
      >
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      { label: "COMPANY DATA", route: "companyData" },
      { label: "COMPANY TABLE", route: "companyTable" },
      { label: "COMPANY PAGE", route: "companyPage" }
    ]
  }),
  methods: {
    redirect(item) {
      if (this.$route.name !== item.route) {
        this.$router.push({ name: item.route });
      }
    },
    isActiveMenu(item) {
      return item.route === this.$route.name;
    }
  }
};
</script>

<style>
.side-menu {
  position: relative;
  width: 200px;
  height: 100px;
}

.side-menu > ul {
  display: block;
  padding-left: 0px;
  border: 1px solid #d8d9dd;
  border-radius: 5px;
}

.side-menu li {
  border-bottom: 1px solid #d8d9dd;
  list-style: none;
  padding: 20px;
  cursor: pointer;
  color: #394883;
  font-size: 12px;
  font-weight: bold;
}

.side-menu li.active {
  background-color: #fafbfd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.side-menu li:last-child.active {
  background-color: #fafbfd;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.side-menu li:last-child {
  border-bottom: none;
}
</style>