<template>
  <WallPaper />
  <div class="m-20">
    <span>What's on your mind?</span>
    <v-infinite-scroll direction="horizontal" @load="load">
      <template v-for="(item, index) in mindFood" :key="item">
        <v-img :src="imgUrl1 + item.imageId" height="200" width="200" alt="Image {{ index }}"
          @click=onClick(item)></v-img>
      </template>
      <template v-if="!mindFood.length" key={index} v-for="(item, index) in limit" :key="item">
        <div className="shimmer-circle"></div>
      </template>
    </v-infinite-scroll>
    <span>Top restaurant</span>
    <v-infinite-scroll direction="horizontal" @load="load">
      <template v-for="(item, index) in topRestaurant" :key="index">
        <div>
          <Card :resData="item.info" :key="index" />
        </div>
      </template>
      <template v-if="!topRestaurant.length" key={index} v-for="(item, index) in limit" :key="item">
        <div className="shimmer-card"></div>
      </template>
    </v-infinite-scroll>
    <br>
    Best Places to Eat Across Cities
    <v-row>
      <div v-for="(item, index) in cities.slice(0, this.limit)">
        <v-col>
          <v-card :key="index" width="300" :title="item.text" link elevation="4"></v-card>
        </v-col>
      </div>
      <v-card @click="showMore('cities')" :key="index" width="300" title="Show More" elevation="4"></v-card>
    </v-row>
    <br>
    Best Cuisines Near Me
    <v-row>
      <div v-for="(item, index) in cuisines.slice(0, this.limit)">
        <v-col>
          <v-card :key="index" width="300" :title="item.text" link elevation="4"></v-card>
        </v-col>
      </div>
      <v-card @click="showMore('cuisines')" :key="index" width="300" title="Show More" elevation="4"></v-card>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import WallPaper from '@/components/WallPaper'
import { IMG_CDN_URL, IMG_CDN_URL1 } from '@/store/constant'
import Card from '@/components/Card'
export default {
  name: 'HomeView',
  components: {
    WallPaper,
    Card
  },
  data() {
    return {
      imgUrl1: IMG_CDN_URL,
      imgUrl2: IMG_CDN_URL1,
      limit: 7
    }
  },
  computed: {
    ...mapGetters({
      mindFood: 'GET_MIND_FOOD',
      topRestaurant: 'GET_TOP_RESTAURANT',
      cities: 'GET_CITIES',
      cuisines: 'GET_CUISINES',
    })
  },
  async mounted() {
    await this.getRequest()
  },
  methods: {
    ...mapActions(['getRequest']),
    showMore(data) {
      this.limit = this[data].length - 1
    },
    onClick(id) {
      // console.log('id: ', id.action.link)
      // this.$router.push({name:'collections', params: { collectionId:id}})
      // window.location.href(id.action.link);
      // window.location.replace(id.action.link);
      window.open(id.action.link, '_blank');
    },
  }
}
</script>
<style>
.shimmer-card {
  width: 200px;
  height: 200px;
  background: lightgray;
  margin: 20px;
}

.shimmer-circle {
  width: 150px;
  height: 120px;
  background: lightgray;
  margin: 20px;
  border-radius: 50%;
}
</style>