<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <Photo
                v-for="photo in $store.getters.getAllPhotos"
                v-bind:key="photo.id"
                v-bind:photo="photo"
                @show='showModal'
            />
        </v-row>
    <Modal v-model="dialogVisible" :photo="currentPhoto" />
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
        data:()=>{
            return {
                photos:[],
                currentPhoto: {},
                dialogVisible: false,
        }
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
            this.photos.push(photo);
        },
        showModal(photo){
            this.currentPhoto = photo;
            this.dialogVisible = true;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>