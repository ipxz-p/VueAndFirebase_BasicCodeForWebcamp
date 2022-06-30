<template>
  <div>
    <div v-for="chat in chats" :key="chat.text">
      <div v-if="chat.id === id">
        <p>{{chat.text}}</p>
        <p>{{chat.num}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/plugins/firebase'
export default {
  data(){
    return {
      chats: [],
      
    }
  },
  
  firestore: {
    chats: firestore.collection('chats')
  },
  props: {
    id: {}
  }
}
</script>

<style>

</style>