<template>
<v-container fluid>

  <v-app-bar
        color="orange"
        dense
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/">
            <v-btn>Main page</v-btn>
        </router-link>
        <router-link to="/photos">
            <v-btn>Gallery</v-btn>
        </router-link>
      </v-app-bar>
    </v-container>
</template>

<script>
    export default {
      
      }
</script>

<style lang="scss" scoped>

</style>