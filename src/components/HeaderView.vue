<template>
    <div>
        <v-app-bar :elevation="2">
            <img src="@/assets/logo1.jpg" width="150" height="150" alt="logo" class="ml-20" @click="this.$router.push({name:'home'})">
            <v-app-bar-title class="text-3xl font-bold font-mono">Order Your Food Anywhere Everywhere</v-app-bar-title>
            <template v-slot:append>
                <img src="@/assets/offer.png" width="30" height="30" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
                <img src="@/assets/cart.png" width="30" height="30" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
                <img src="@/assets/signup.jpg" width="35" height="35" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
            </template>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import GoogleMapsLoader from 'google-maps'
export default {
    name: 'HeaderView',
    data() {
        return {
            city: 'Bangalore'
        }
    },
    computed: {
        ...mapGetters({
        })
    },
    mounted() {
    },
    methods: {
    },
}
</script>
<style scoped></style>