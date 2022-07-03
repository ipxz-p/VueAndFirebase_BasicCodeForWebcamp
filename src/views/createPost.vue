<template>
  <div>
    <NavBar>
      <section class="create-main container">
        <h1>Create Post</h1>
        <!-- <v-text-field
        
          class="mt-4 "
          label="Photo URL"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-image"
          hint="Place your photo url here"
          required
        ></v-text-field>
        <v-text-field
          label="Title"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-tag"
          hint="Place your photo url here"
          required
        ></v-text-field>
        <v-text-field
          label="Detail"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-comment-text-multiple"
          hint="Place your photo url here"
          required
        ></v-text-field>
        <div class="btn-con">
          <button class="btn mybg-blue py-2 px-4 rounded" type="submit">
            Create
          </button>
        </div> -->
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
        
          class="mt-4 "
          label="Photo URL"
          variant="outlined"
          clearable
          :rules="[v => !!v || 'Photo URL is required']"
          prepend-inner-icon="mdi-image"
          hint="Place your photo url here"
          required
          v-model="img"
        ></v-text-field>
        <v-text-field
          label="Title"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-tag"
          hint="Place your photo url here"
          :rules="[v => !!v || 'Title is required']"
          required
          v-model="title"
        ></v-text-field>
        <v-text-field
          label="Detail"
          variant="outlined"
          clearable
          prepend-inner-icon="mdi-comment-text-multiple"
          hint="Place your photo url here"
          :rules="[v => !!v || 'Detail URL is required']"
          required
          v-model="text"
        ></v-text-field>
        <div class="btn-con">
          <button class="btn mybg-blue py-2 px-4 rounded" type="submit" @click="createPost">
            Create
          </button>
        </div>
        </v-form>
      </section>
    </NavBar>
  </div>
</template>

<script>
import { firestore, auth } from '@/plugins/firebase'
import NavBar from '@/components/NavBar.vue'
export default {
  data(){
    return {
      valid: true,
      img: '',
      title: '',
      text: '',
      user: null
    }
  },
  methods: {
    async getUserFromFirestore(){
        const data = await firestore.collection('users').doc(this.user.uid).get()
        this.user = {
          ...this.user,
          ...data.data()
        }
    },
    async createPost(){
      try {
        firestore.collection('posts').add({
          img: this.img,
          title: this.title,
          text: this.text,
          user: this.user.email
      })
      
      alert('seccess')
      this.$router.push({path: '/'})
      } catch (error) {
        alert(error)
      }
    },
  },
  components: {
    NavBar
  },
  created() {
      auth.onAuthStateChanged(user => {
        this.user = user
        if(user){
          this.getUserFromFirestore()
        }
      })
    },
}
</script>

<style scoped>
.create-main{
  margin-top: 80px;
}
.btn-con{
  display: flex;
  justify-content: flex-end;
}
.btn{
  border: 2px solid #0B1120;
  color: #fff;
  transition: all .3s;

}
</style>