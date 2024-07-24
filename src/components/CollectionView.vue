<template>
    <div>
        inside collections
    </div>
</template>

<script>
import Card from '@/components/Card'
import { mapActions, mapState, mapGetters } from 'vuex'
import { IMG_CDN_URL, IMG_CDN_URL1 } from '@/store/constant'

export default {
    name: "CollectionView",
    components: {
        Card
    },
    data(){
        return{
            imgUrl2: IMG_CDN_URL1
        }
    },
    computed: {
        ...mapGetters({
           
        })
    },
    async mounted() {
        // console.log('this.$route.params.name', '&collection=' + this.$route.params.collectionId);
        // await this.getCollectionId('&collection=' + this.$route.params.collectionId)
    },
    methods: {
        ...mapActions(['getCollectionId'])
    }
}
</script>

<style scoped></style>

<!-- https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=117513 -->