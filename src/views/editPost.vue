<template>
  <div>
    <NavBar>
      <div class="edit-con container" v-for="post in posts" :key="post.text">
        <div v-if="post.id === id">
          <p>{{post.text}}</p>
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import { firestore } from '@/plugins/firebase'
import NavBar from '@/components/NavBar.vue'
export default {
  data(){
    return {
      posts: [],
    }
  },
  components:{
    NavBar
  },
  firestore:{
    posts: firestore.collection('posts')
  },
  props: {
    id: {}
  }
}
</script>

<style scoped>
.edit-con{
  margin-top: 90px;
}
</style>