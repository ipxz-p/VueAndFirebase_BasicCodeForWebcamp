<template>
  <div>
    <div v-for="post in posts" :key="post.text">
      <div v-if="post.id === id">
        <p>{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/plugins/firebase'
export default {
  data(){
    return {
      posts: [],
    }
  },
  firestore:{
    posts: firestore.collection('posts')
  },
  props: {
    id: {}
  }
}
</script>

<style>

</style>