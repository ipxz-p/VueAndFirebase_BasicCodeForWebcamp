<template>
  <div>
    <div>
      <div class="mybg-blue nav">
        <div class="d-flex align-center justify-space-between container">
          <div>
            <router-link to="/"><h1 class="nav-font">PWB</h1></router-link>
          </div>
          <router-link v-if="!user" class="login nav-icon" to="/login"><font-awesome-icon icon="fa-solid fa-user" /></router-link>
          <font-awesome-icon v-else class="logout nav-icon" icon="fa-solid fa-arrow-right-from-bracket" @click="logOut" />
        </div>
      </div>
      <slot>
      
      </slot>
    </div>
  </div>
</template>

<script>
import { auth, firestore } from '../plugins/firebase'
export default {
    data(){
      return {
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
      async logOut(){
        auth.signOut()
      }
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
@import url('http://fonts.cdnfonts.com/css/bublo');

.nav-font{
  font-family: 'Bublo', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 2.8rem;
}
.nav{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
}
.nav-icon{
  color: #fff;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
}
.login{
  padding: 4px 8px;
}
.logout{
  padding: 8px;

}
</style>