import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { firestorePlugin } from 'vuefire'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightFromBracket, faUser, faUserPen, faPlus, faImage, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
library.add(faArrowRightFromBracket, faUser, faUserPen, faPlus, faImage, faPenToSquare, faTrash )

loadFonts()


createApp(App)
  .use(router)
  .use(vuetify)
  .use(firestorePlugin)
  .use(VueSweetalert2)
  .component('font-awesome-icon', FontAwesomeIcon)
  
  .mount('#app');
