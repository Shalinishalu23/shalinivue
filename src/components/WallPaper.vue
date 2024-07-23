<template>
    <div>
        <v-card class="gradient-card">
            <div class="d-flex justify-content-between mx-20">
                <div class="p-20">
                    <span class="text-6xl font-bold">Order Food</span> <br>
                    <span class="text-6xl font-bold">Online in</span> <br>
                    <span class="text-6xl font-bold">Bengaluru </span>
                </div>
                <v-img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
                    height="300"></v-img>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "WallPaper"
}
</script>

<style scoped>
.gradient-card {
    background: linear-gradient(0deg, rgb(201, 188, 244) 0%, rgb(255, 255, 255) 95.83%);
    color: black;
}
</style>