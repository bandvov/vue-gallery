<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <Photo
                v-for="photo in $store.getters.getAllPhotos"
                v-bind:key="photo.id"
                v-bind:photo="photo"
            />
        </v-row>
    <Modal />
    </v-container>
</template>

<script>
import Photo from '../components/photo/Photo.vue';
import PhotoForm from '../components/photo/PhotoForm.vue';
import Modal from '../components/photo/Modal.vue';

    export default {
        components:{
            Photo,
            PhotoForm,
            Modal
        },
        
      mounted(){
        // this.fetchPhotos();
        this.$store.dispatch("fetchPhotos");
    },
    methods:{
        // fetchPhotos(){
        // this.axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        // .then(res=> this.photos = res.data);
        // },
        addPhoto(photo){
            this.$store.commit("addPhoto",photo);
        },
    }

}
</script>

<style lang="scss" scoped>

</style>