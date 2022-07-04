<template>
    <div>
        <div class="w-50 mx-auto mt-5">
            <v-text-field
                variant="filled"
                v-model="text"
            ></v-text-field>
            <v-btn @click="editChat">Edit</v-btn>
        </div>
    </div>
</template>

<script>
import { firestore } from '@/plugins/firebase'
export default {
    data(){
        return {
            text: this.txt
        }
    },
    props: {
        txt: {},
        id: {}
    },
    methods: {
        async editChat(){
            try {
                firestore.collection('chats').doc(this.id).update({
                    text: this.text
                })
                this.$router.push({path: '/'})
            } catch (error) {
                alert(error)
            }
        }
    }
}
</script>

<style>

</style>