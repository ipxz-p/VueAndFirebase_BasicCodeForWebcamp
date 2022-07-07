<template>
  <div>
    <div class="mx-auto mt-5 w-50">
        <v-btn @click="sortBy('title')">title</v-btn>
        <v-btn @click="sortBy('text')">text</v-btn>

      <div v-for="post in posts" :key="post.id">
        <div class="d-flex">
            <p class="mr-5">title : {{post.title}} </p>
            <p> text: {{post.text}}</p>
        </div>
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
            title: "a",
            text: "b"
            },
            {
            id: 2,
            title: "b",
            text: "a"
            },
        ]
        }
    },
    methods: {
        sortBy(prop){
        this.posts.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    }

}
</script>

<style>

</style>