<template>
  <div>
    <div v-for="(item, index) in palm" :key="index">
        <p>{{item.name}}</p>
        <p>{{item.num}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["palm"]
}
</script>

<style>

</style>