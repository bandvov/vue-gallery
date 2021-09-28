<template>
     <v-row justify="center">
   <v-dialog
        v-model="dialog"        
        max-width="290"
      >
      <v-card>
      <v-card-title>{{photo.title}}</v-card-title>
      <v-img :src="photo.url"></v-img>

      </v-card>
      
      </v-dialog>
    </v-row>
</template>

<script>
    export default {
      props:{
        photo:{
          type: Object
        },
        dialog:{
          type: Boolean
        },
      },
  
         
    }
</script>

<style lang="scss" scoped>

</style>