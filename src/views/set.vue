<template>
  <div class="button-container">
    <a href="#" @click.prevent="logout">Выход</a>
  </div>
</template>

<script>
  export default {
    name: "set",
    methods: {
      async logout() {
        await this.$store.dispatch('logout');
        this.$router.push('/');
        localStorage.setItem('userAuth', 'no');
      }
    },
  }
</script>

<style scoped>

</style>
