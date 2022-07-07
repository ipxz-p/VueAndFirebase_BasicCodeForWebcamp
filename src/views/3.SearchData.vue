<template>
  <div>
    <div class="mx-auto mt-5 w-50">
      <v-text-field
          label="Search"
          v-model="search"
      ></v-text-field>
      <div v-for="post in filteredPosts" :key="post.id">
        <p>{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search: '',
      posts: [
        {
          id: 1,
          text: "test2",
        },
        {
          id: 2,
          text: "test",
        },
      ]
    }
  },
  computed: {
    filteredPosts(){
      return this.posts.filter(post => post.text.includes(this.search))
    }
  }

}
</script>

<style>

</style>