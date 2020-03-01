<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <HeroCentered />
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