<template>
  <div>
    <HeroCentered />

    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <Content />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    HeroCentered: () => import('../components/HeroCentered.vue'),
  }
}
</script>

<style lang="scss">
  @import '../assets/css/main';
</style>