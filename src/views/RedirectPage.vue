<template>
  <div>
    <v-btn @click="testRe">go home</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    testRe(){
      setTimeout(() => this.reDi(), 2000)
    },
    reDi(){
      this.$router.push({path: '/'})
    }
  },
  
}
</script>

<style>

</style>