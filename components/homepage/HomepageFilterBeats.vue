<template>
    <div>
      <div v-for="beat in beats" :key="beat.title">
        <h1>{{ beat.title }}</h1>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HomepageFilterBeats",
      computed: {
        beats() {
          return this.$store.getters.allBeats
        },
      }
    }
</script>

<style scoped>

</style>
