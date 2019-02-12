<template>
  <section>
    <navigation />
    <h1>This place is secret</h1>
    <p>This section requires user authentication. There's nothing else going on here.</p>
    <button @click.prevent="exit">Logout</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/navigation';

export default {
  name: 'Secret',
  components: { Navigation },
  methods: {
    ...mapActions('auth', ['logout']),
    async exit() {
      await this.logout();
      this.$router.push('/');
    }
  }
}
</script>
