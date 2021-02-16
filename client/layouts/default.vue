<template>
  <section>
    <navigation />
    <Nuxt />
  </section>
</template>

<script>
import Navigation from '../components/navigation';

export default {
  name: 'DefautlLayout',
  components: { Navigation },
}
</script>
