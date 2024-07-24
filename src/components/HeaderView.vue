<template>
    <div>
        <v-app-bar :elevation="2">
            <img src="@/assets/logo1.jpg" width="150" height="150" alt="logo" class="ml-20" @click="this.$router.push({name:'home'})">
            <v-app-bar-title class="text-3xl font-bold font-mono">Order Your Food Anywhere Everywhere</v-app-bar-title>
            <template v-slot:append>
                <v-btn icon="mdi-magnify"></v-btn>
                <v-btn icon="mdi-account"></v-btn>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'HeaderView'
}
</script>

<style scoped></style>