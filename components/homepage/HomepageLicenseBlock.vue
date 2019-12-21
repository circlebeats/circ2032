<template>
  <div class="license">
    <h2 class="licenceBlockTitle">{{type}}</h2>
    <p style="text-align: justify" >{{description}}</p>
    <h4 style="font-size: 2rem; text-decoration: underline">Terms:</h4>
    <h4>Sales Cap:</h4>
    <p>{{salesCap}}</p>
    <h4>Streams:</h4>
    <p>{{streams}}</p>
    <h4>Duration:</h4>
    <p>{{duration}}</p>
    <h4>Performance Rights</h4>
    <p>{{performanceRights}}</p>
    <h4>Publishing Split:</h4>
    <p>{{publishingSplit}}</p>
    <h4>Territory:</h4>
    <p>{{territory}}</p>
    <h4>Mechanical Royalty Percentage: </h4>
    <p>{{mechanicalRoyaltyPercentage}}</p>
    <h4>Credits:</h4>
    <p>{{credits}}</p>
<!--    TODO: find a fix for quality text boxes -->
    <h4>Quality:</h4>
    <p v-for="quality in qualities" :key="quality">
      {{ quality }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "HomepageLicenseBlock",
    props: ['type','description','salesCap','streams','duration','performanceRights','publishingSplit','territory','mechanicalRoyaltyPercentage','credits','qualities']
  };
</script>

<style scoped>

</style>
