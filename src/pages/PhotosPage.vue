<template>
    <v-container>
        <PhotoForm @addPhoto="addPhoto" />
        <v-row>
            <Photo
                v-for="photo in photos"
                v-bind:key="photo.id"
                v-bind:photo="photo"
            />
        </v-row>
    </v-container>
</template>

<script>
import Photo from '../components/photo/Photo.vue';
import PhotoForm from '../components/photo/PhotoForm.vue';

    export default {
        components:{
            Photo,
            PhotoForm,
        },
        data:()=>{
            return {
                photos:[]
        }
    },
      mounted(){
        this.fetchToDo();
    },
    methods:{
        fetchToDo(){
        this.axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then(res=> this.photos = res.data);
        },
        addPhoto(photo){
            this.photos.push(photo);
        }
    }

}
</script>

<style lang="scss" scoped>

</style>