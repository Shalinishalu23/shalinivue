<template>
    <v-card :loading="loading" class="mx-4 my-12 rounded-lg" width="300"  height="360" onClick="testing()"
    elevation="1">
    <v-img :src="imgUrl2 + resData.cloudinaryImageId" alt="Image{{ resData.id }}"></v-img>
        <v-card-title class="font-bold">{{ resData.name }}</v-card-title>
        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating v-model="resData.avgRating" color="amber" dense half-increments readonly size="14"></v-rating>
                <div class="grey--text ms-4">
                    {{ resData.avgRating }} ({{ resData.totalRatingsString }})
                </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
                {{ resData.cuisines[0] }} , {{ resData.cuisines[1] }}
            </div>
            <v-chip>{{ resData.sla.slaString }}</v-chip> <br>
        </v-card-text>
    </v-card>
</template>
<script>
import { IMG_CDN_URL1 } from '@/store/constant'
export default {
    name: "Card",
    props: {
        resData: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            imgUrl2: IMG_CDN_URL1
        }
    },
    methods: {
        testing(){
            console.log('testing: ')
        }
    }
}
</script>

<style scoped></style>