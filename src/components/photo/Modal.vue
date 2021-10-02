<template>
  <v-row justify="center">
    <v-dialog
          max-width="290"
          v-model="$store.getters.getDialogVisible"
          @click:outside="hideModal"
      >
      <v-card>
        <v-card-title>{{$store.getters.getCurrentPhoto.title}}</v-card-title>
        <v-img :src="$store.getters.getCurrentPhoto.url"></v-img>
      </v-card>      
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
  methods:{
    ...mapMutations(["hideDialog"]),
    hideModal(){
      this.hideDialog();
    }
  }
    }
</script>

<style lang="scss" scoped>

</style>