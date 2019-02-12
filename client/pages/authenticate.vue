<template>
  <section>
    <navigation />
    <h1>Authenticate!</h1>
    <input v-model="email" placeholder="email" />
    <input v-model="password" placeholder="password" type="password" />
    <button @click.prevent="login">Login</button>
    <button @click.prevent="signup">Sign up</button>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from '../components/navigation';

export default {
  name: 'Login',
  components: { Navigation },

  data() {
    return {
      email: 'hello@silvestre.io',
      password: 'retrete'
    };
  },

  methods: {
    ...mapActions('auth', ['authenticate']),
    ...mapActions('users', ['create']),

    async login() {
      const credentials = { email: this.email, password: this.password };
      await this.authenticate({ ...credentials, strategy: 'local' });
      this.$router.push('/secret');
    },

    async signup() {
      const credentials = { email: this.email, password: this.password };
      await this.create(credentials);
      await this.authenticate({ ...credentials, strategy: 'local' });
      this.$router.push('/secret');
    }
  }
}
</script>

