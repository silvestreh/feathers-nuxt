<template>
  <ul class="main-menu">
    <li class="main-menu__item"><nuxt-link to="/" exact>Home</nuxt-link></li>
    <li class="main-menu__item" v-if="isAuthenticated"><nuxt-link to="/protected">Protected</nuxt-link></li>
    <li class="main-menu__item" v-if="isAuthenticated"><a href="#" @click.prevent="exit">Sign out</a></li>
    <li class="main-menu__item" v-else><nuxt-link to="/sign-in">Sign in</nuxt-link></li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  computed: {
    ...mapState('auth', ['user']), // Not updating consistently ¯\_(ツ)_/¯

    isAuthenticated() {
      return !!this.user;
    },
  },

  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),

    async exit() {
      await this.logout();
      this.$router.replace('/');
    },
  },
};
</script>

<style>
.main-menu {
  border-bottom: 1px solid #F2F2F2;
  font-size: 0;
  list-style: none;
  padding: 1.5rem 0;
  text-align: center;
}

.main-menu__item {
  display: inline-block;
  font-size: 1rem;
}

.main-menu__item a {
  color: #999;
}

.main-menu__item .nuxt-link-active {
  color: #92D3CE;
}

.main-menu__item + .main-menu__item {
  margin-left: 1rem;
}
</style>
