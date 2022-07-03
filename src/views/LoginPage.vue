<template>
  <div>
    <div class="d-flex align-center justify-center h-screen mybg-blue">
      <div class="px-6 mx-auto rounded-lg card" ref="form" >
        <h1 class="text-center my-2">Login</h1>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
              v-model="formemail"
              label="Email"
              variant="underlined"
              hint="Inter your email"
              append-icon="mdi-email"
              clearable
              required
              :rules="[rules.required, rules.email]"
              class="text-h6"
              
          ></v-text-field>
          <v-text-field
                v-model="formpassword"
                label="Password"
                variant="underlined"
                hint="Inter your password at least 6 characters"
                required
                clearable
                counter
                minlength="6"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                @click:append="show1 = !show1"
                :type="show1 ? 'text' : 'password'"
          ></v-text-field>
          <div class="btn-con mb-1">
            <div class="btn btn-pri" @click="signIn">
              Login
            </div>
            <div class="btn btn-sec" @click="signUp">
              Register
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, firestore } from '@/plugins/firebase'
export default {
  data(){
    return{
      valid: true,
      user: null,
      users: [],
      formemail: '',
      formpassword: '',
      show1: false,
      password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => (`The email and password you entered don't match`),
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
    }
  },
  firestore:{
    users: firestore.collection('users')
  },
  methods:{
    async signUp(){
      try {
        const cred = await auth.createUserWithEmailAndPassword(this.formemail, this.formpassword)
        await firestore.collection('users').doc(cred.user.uid).set({
          uid: cred.user.uid,
          email: cred.user.email,
        })
        await this.$swal({
          icon: 'success',
          title: 'Succeesfully registered',
          timer: 2000,
          timerProgressBar: true,
        });
        this.$router.push({path: '/'})
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: `${error}`,
        });
      }
    },
    async signIn(){
      try {
        await auth.signInWithEmailAndPassword(this.formemail, this.formpassword)
        alert('Succeesfully Logged in')
        this.$router.push({path: '/'})
      } catch (error) {
        alert(error)
      }
    }
  },
  created(){

  }
}
</script>

<style scoped>
  .card{
    max-width: 400px;
    width: 100%;
    background: #fff;
  }
  .btn-con{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .btn{
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
  }
  .btn-pri{
    background: #38bdf8;
    color: #fff;
    transition: all .3s;
  }
  .btn-pri:hover {
    opacity: .7;
  }
  .btn-sec{
    border: 2px solid #000;
  }
  .btn-sec:hover{
    opacity: .7;
    border: 2px solid rgb(46, 44, 44);
  }
</style>