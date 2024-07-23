<template>
    <v-card :loading="loading" class="mx-4 my-12 rounded-lg" max-width="300" min-width="300" max-height="320"
        min-height="320" elevation="4">
        <v-img :src="imgUrl2 + resData.cloudinaryImageId" alt="Image{{ resData.id }}" height="150"></v-img>
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
            <v-chip>{{ resData.sla.slaString }}</v-chip>
            <v-card-subtitle class="font-bold">{{ resData.name }}</v-card-subtitle>
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
    }
}
</script>

<style scoped></style>