<template>
  <div class="profile-page">
    <h1>Hello {{ user.name }}</h1>
    <router-link :to="{ name: 'profile.about', params: { id: user.id } }">About</router-link>
    <br>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",

  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>
