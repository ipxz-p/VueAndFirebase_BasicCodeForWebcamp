<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/cera-round-pro');
*{
  font-family: 'Cera Round Pro', sans-serif;
}
.container{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}
a{
  text-decoration: none;
}
img{
  width: 100%;
  height: auto;
}
.mybg-sky{
  background:#38bdf8;
}
.mybg-blue{
  background: #0B1120;
}
.mybg-gray{
  background: #1E293B;
}
.all-post{
  margin-top: 20px;
  display: grid;
  gap: 20px;
  margin-bottom: 20px;
}
.btn-create-text{
  display: none;
}
@media only screen and (min-width: 550px) {
  .all-post{
    grid-template-columns: repeat(2, 1fr);
  }
  .btn-create-text{
    display: block;
  }
}
@media only screen and (min-width: 800px) {
  .all-post{
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1000px) {
  .all-post{
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
