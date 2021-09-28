<template>
     <v-row justify="center">
   <v-dialog
        v-model="dialogVisible"
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
        value:{
          type: Boolean
        },
      },
      created(){
        this.dialogVisible = this.value;
      },
      data:() =>({
        dialogVisible: false
      }),
      watch:{
        value(newValue) {
          this.dialogVisible = newValue;
        },
        dialogVisible(newValue) {
          this.$emit('input',newValue);
        }
      }
  
         
    }
</script>

<style lang="scss" scoped>

</style>