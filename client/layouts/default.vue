<template>
  <div class="default-layout">
    <main-menu />
    <nuxt />
  </div>
</template>

<script>
import mainMenu from '@/components/main-menu.vue';
import { mapActions, mapState } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  name: 'default-layout',

  components: { mainMenu },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    ...mapActions({
      authenticate: 'auth/authenticate',
      logout: 'auth/logout',
    }),
  },

  async created() {
    try {
      if (this.user) await this.authenticate();
    } catch (e) {
      this.logout();
      throw e;
    }
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}

main {
  box-sizing: border-box;
  padding: 1rem 2rem;
}
</style>
