<template>
    <div>
        <v-app-bar :elevation="2">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <img src="@/assets/logo1.jpg" width="150" height="150" alt="logo" class="ml-20"
                @click="this.$router.push({ name: 'home' })">
            <v-app-bar-title class="text-3xl font-bold font-mono">
                Order Your Food Anywhere Everywhere</v-app-bar-title>
            <template v-slot:append>
                <img src="@/assets/offer.png" width="30" height="30" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
                <img src="@/assets/cart.png" width="30" height="30" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
                <img src="@/assets/signup.jpg" width="35" height="35" alt="logo" class="ml-20"
                    @click="this.$router.push({ name: 'home' })">
            </template>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
            <br>
            <v-text-field label="Search Location" variant="outlined" v-model="location"></v-text-field>
            <v-list-item-group>
                <v-list-item v-for="(item, index) in searchedLocation" :key="index"
                    @click="menuActionClick(item.place_id)">
                    <v-list-item-icon>
                        <v-icon dark color="#7E6990" v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.description }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    name: 'HeaderView',
    data() {
        return {
            location: null,
            drawer: true,
        }
    },
    watch: {
        group() {
            this.drawer = true
        },
        location(newVal, oldVal) {
            this.getLocation(newVal)
        }
    },
    computed: {
        ...mapGetters({
            searchedLocation: 'GET_SEARCH_LOCATION',
        })
    },
    mounted() {
    },
    methods: {
        ...mapActions(['getLocation', 'getAddress']),
        menuActionClick(item) {
            this.getAddress(item)
            this.drawer = false
        }
    },
}
</script>
<style scoped></style>