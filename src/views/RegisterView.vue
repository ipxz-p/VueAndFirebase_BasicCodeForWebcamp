<template>
  <div>
    <div v-for="chat in chats" :key="chat.text">
      <router-link :to="{path: `/chats/${chat.id}`, params: {id: chat.id}}"><p>{{chat.text}}</p></router-link>
    </div>
  </div>
</template>

<script>

import {firestore} from "../plugins/firebase.js"
export default {
  data(){
    return {
      chats: []
    }
  },
  firestore: {
    chats : firestore.collection('chats')
  },
  
}
</script>
