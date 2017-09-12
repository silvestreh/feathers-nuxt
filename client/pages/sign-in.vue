<template>
  <main class="sign-in">
    <p v-if="error" class="error">{{ error }}</p>
    <div class="container">
      <form>
        <fieldset>
          <legend>Sign in</legend>
          <label>
            E-mail
            <input type="email" v-model="email">
          </label>
          <label>
            Password
            <input type="password" v-model="password">
          </label>
        </fieldset>
        <button @click.prevent="signIn">Sign in</button>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },

  methods: {
    ...mapActions({
      authenticate: 'auth/authenticate',
    }),

    async signIn() {
      const { email, password } = this;

      try {
        await this.authenticate({ strategy: 'local', email, password });
        this.$router.replace('/protected');
      } catch (e) {
        this.error = e.message;
        throw e;
      }
    },
  },

  watch: {
    error() {
      if (this.error) {
        setTimeout(() => {
          this.error = '';
        }, 3000);
      }
    },
  },
};
</script>

<style>
.sign-in {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}

.sign-in .error {
  color: firebrick;
  margin-top: -2.125rem;
}

.sign-in .container {
  padding: 2rem;
  border: 1px solid #DDD;
  border-radius: .25rem;
}

.sign-in form {
  display: flex;
  flex-direction: column;
}

.sign-in fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.sign-in legend {
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.sign-in label {
  display: flex;
}

.sign-in label + label {
  margin-top: 1rem;
}

.sign-in input {
  flex: 1;
  margin-left: 1rem;
}

.sign-in button {
  align-self: flex-end;
  margin-top: 1rem;
}
</style>

