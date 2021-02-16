<template>
  <main>
    <h1>This place is secret</h1>
    <p>This section requires user authentication. There's nothing else going on here.</p>
    <button @click.prevent="exit">Logout</button>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Secret',
  methods: {
    ...mapActions('auth', ['logout']),
    async exit() {
      await this.logout();
      this.$router.push('/');
    }
  }
}
</script>
