<template>
  <div>
    <router-view :key="moduleKey" v-if="moduleIsReady"/>
    <div v-else>Loading profile...</div>
  </div>
</template>

<script>
import { FETCH_USER_BY_ID } from "./store";

export default {
  name: "ProfileModule",

  created() {
    this.bootstrap();
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    moduleIsReady() {
      return this.user;
    },

    moduleKey() {
      return this.user ? this.user.id : 0;
    }
  },

  methods: {
    async bootstrap() {
      const id = +this.$route.params.id;
      await this.$store.dispatch(FETCH_USER_BY_ID, { id });
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>