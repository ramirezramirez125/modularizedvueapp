<template>
  <div class="profile-about-page">
    <h1>About {{ user.name }}</h1>
    <p>{{ user.about }}</p>
    <div class="pagination">
      <router-link :to="{ name: 'profile', params: { id: user.id } }">Back to Profile</router-link>      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAboutPage",

  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>
