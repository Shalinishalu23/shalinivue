<template>
  <v-app>
    <HeaderView />
    <br>
    <br>
    <br>
    <router-view/>
    <FooterView />
  </v-app>
  </template>
<script>
import HeaderView from '@/components/HeaderView'
import FooterView from '@/components/FooterView'
import '@/assets/style.css'

    export default {
        name:'App',
        components:{
          HeaderView,
          FooterView
        }
    }
</script>

<style>
</style>
