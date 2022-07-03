<template>
  <div>
    <NavBar>
      <div class="create-con container">
        <router-link to="/create">
          <div class="d-inline-flex py-2 px-4 rounded align-center mybg-blue btn-create">
            <font-awesome-icon icon="fa-solid fa-plus" />
            <p class="ml-3 btn-create-text" >Create post</p>
          </div>
        </router-link>
      </div>
      <section class="all-post container">
        <div class="post" v-for="(post, index) in posts" :key="index">
          <div class="editall">
            <router-link :to="{path: `/edit/${post.id}`, params: {id: post.id}}" ><font-awesome-icon class="btn-edit" icon="fa-solid fa-pen-to-square" /></router-link>
            <font-awesome-icon class="btn-edit ml-1" icon="fa-solid fa-trash" />
          </div>
          <img :src="post.img" alt="">
          <div class="post-data py-2 px-4">
            <div>
              <h2 class="post-title">{{post.title}}</h2>
              <p class="text-caption">{{post.text}}</p>
            </div>
            <p class="post-usercreate"><font-awesome-icon icon="fa-solid fa-user-pen" /> | {{post.user}}</p>
          </div>
        </div>
        
        
      </section>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { firestore } from '@/plugins/firebase'
export default {
  data(){
    return {
      posts: []
    }
  },
  firestore:{
    posts: firestore.collection('posts')
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
.create-con{
  margin-top: 90px;
  display: flex;
  justify-content: flex-end;
}
.create-con{
  cursor: pointer;
}
.btn-create{
  border: 2px solid #0B1120;
  color: #fff;
  transition: all .3s;
}
.btn-create:hover{
  background: #fff;
  color: #0B1120;
  border: 2px solid #0B1120;
}
.post{
  position: relative;
  display: grid;
  grid-template-rows: 150px 200px;
  cursor: pointer;
  transition: all .3s;
}
.editall{
  position: absolute;
  top: 2%;
  right: 1%;
  opacity: 0;
  transition: all .3s;
}
.post:hover{
  transform: translateY(-5px);
}
.post:hover .editall{
  opacity: 1;
  transform: translateX(-7px);
}

.btn-edit{
  background: #fff;
  color: rgb(149, 151, 155);
  padding: 5px;
  border-radius: 50%;
}
.post-data{
  background: #fff;
  border-radius: 0 0 20px 20px;
  border-bottom: 2px solid rgb(203 213 225);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.post img{
  border-radius: 10px 10px 0 0;
  height: 150px;
}
.post-title{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.post-usercreate{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(149, 151, 155);
  font-size: 12px;
}
</style>