<template>
  <div class="home-page">
    <div>{{ appName }}</div>
    <ul>
      <li>
        <router-link :to="{ name: 'profile', params: { id: 1 } }">Neo's Profile</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'profile', params: { id: 2 } }">Morpheus' Profile</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'profile', params: { id: 3 } }">Trinity's Profile</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  computed: {
    appName() {
      return this.$store.getters.appName;
    }
  }
};
</script>

<style scoped>
.home-page {
  max-width: 500px;
  width: 100%;
  margin: auto;
}
ul {
  text-align: left;
}
</style>
