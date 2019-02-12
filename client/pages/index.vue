<template>
  <section>
    <navigation />
    <h1>Feathers + Nuxt</h1>
    <p>This is a <strong>very basic</strong> demo/boilerplate for <code>nuxt</code> + <code>feathers</code> + <code>feathers-vuex</code>.</p>
    <p>Use the nav links above to switch between pages. There's a secret page that requires user authentication.</p>
    <p>For simplicity's sake, the <code>users</code> service is using NeDB. Feel free to switch to MongoDB, PostgreSQL, or whatever you feel like using.</p>
  </section>
</template>

<script>
import Navigation from '../components/navigation';

export default {
  name: 'Home',
  components: { Navigation }
}
</script>

