<template>
  <div>
    <div class="w-50 mx-auto mt-5">
      <v-text-field
            label="chat"
            variant="filled"
            v-model="chat"
      ></v-text-field>
      <v-btn @click="addChat">Send</v-btn>
      <div v-for="(chat, index) in chats" :key="index" class="mt-5 d-flex align-center justify-space-between">
        <p>{{chat.text}}</p>
        <div>
          <v-btn class="mr-4" @click="deleteChat(chat.id)">delete</v-btn>
          <router-link :to="{ name: 'edit', params: { txt: chat.text, id: chat.id } }"><v-btn>edit</v-btn></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/plugins/firebase'
export default {
  data(){
    return {
      chat: '',
      chat2: '',
      chats: []
    }
  },
  firestore: {
    chats: firestore.collection('chats')
  },
  methods: {
    async addChat(){
      try {
        firestore.collection('chats').add({
          text: this.chat
        })
      } catch (error) {
        alert(error)
      }
    },
    async deleteChat(id){
      try {
        await firestore.collection('chats').doc(id).delete()
      } catch (error) {
        alert(error)
      }
    },
  }
}
</script>

<style>

</style>