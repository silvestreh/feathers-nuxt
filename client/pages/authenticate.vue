<template>
  <section>
    <navigation />
    <h1>Authenticate!</h1>
    <form class="auth-form">
      <ul>
        <li><input v-model="email" placeholder="email" /></li>
        <li><input v-model="password" placeholder="password" type="password" /></li>
      </ul>
      <button @click.prevent="login">Login</button> or <button class="ghost" @click.prevent="signup">Sign up</button>
    </form>
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
      email: 'hey@silvestre.io',
      password: 'password'
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

<style>
.auth-form ul {
  list-style: none;
  padding: 0;
}

.auth-form li + li {
  margin-top: .5em;
}
</style>

