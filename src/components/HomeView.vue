<template>
  <WallPaper />
  <br>
  <span>What's on your mind?</span>
  <v-row>
  <div v-for="(items, index) in mindFood" :key="index"  >
      <v-col>
        <v-img
          :src="imgUrl1 + items.imageId"
          height="150" width="150" alt="Image {{ index }}"></v-img>
      </v-col>
    </div>
  </v-row>
  <v-divider class="bg-red-700"></v-divider>

  <span>Top restaurant</span>
  <v-row>
  <div v-for="(items, index) in topRestaurant" :key="index"  >
      <v-col>
        <v-img
          :src="imgUrl2 + items.info.cloudinaryImageId"
          height="250" width="250" alt="Image {{ index }}"></v-img>
      </v-col>
    </div>
  </v-row>
  <br>
  <br>
  <br>
  <div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState, mapGetters } from 'vuex'
import WallPaper from '@/components/WallPaper.vue'
import { IMG_CDN_URL, IMG_CDN_URL1 } from '@/store/constant'
export default {
  name: 'HomeView',
  components: {
    WallPaper
  },
  data() {
    return {
      imgUrl1: IMG_CDN_URL,
      imgUrl2: IMG_CDN_URL1
    }
  },
  computed: {
    ...mapGetters({
      mindFood: 'GET_MIND_FOOD',
      topRestaurant: 'GET_TOP_RESTAURANT'
    })
  },
  async mounted() {
    await this.getRequest()
  },
  methods: {
    ...mapActions(['getRequest'])
  }
}
</script>