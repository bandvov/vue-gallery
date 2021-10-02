<template>
  <v-row justify="center">
    <v-dialog
          max-width="290"
          v-model="$store.getters.getDialogVisible"
          @click:outside="$store.commit('hideDialog')"
      >
      <v-card>
        <v-card-title>{{$store.getters.getCurrentPhoto.title}}</v-card-title>
        <v-img :src="$store.getters.getCurrentPhoto.url"></v-img>
      </v-card>      
    </v-dialog>
  </v-row>
</template>

<script>
    export default {
  
    }
</script>

<style lang="scss" scoped>

</style>