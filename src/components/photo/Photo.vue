<template>
<v-col cols="4">
    <v-card @click="showModal">
        <v-card-title>{{photo.title}}</v-card-title>
        <v-card-text>
            <v-img 
                width="200" 
                height="200" 
                v-bind:src="photo.url">
            </v-img>
        </v-card-text>
    </v-card>
</v-col>
</template>

<script>
import {mapMutations} from 'vuex';
    export default {
        props:{
            photo:{
                type: Object
            }
        },
        methods: {
            ...mapMutations(["setCurrentPhoto", "showDialog"]),
            showModal(){
                this.setCurrentPhoto(this.photo);
                this.showDialog(this.photo);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>