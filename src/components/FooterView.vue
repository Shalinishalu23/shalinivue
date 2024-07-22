<template>
    <div>
        <v-bottom-navigation :elevation="24">
            <v-btn value="recent">
                <a target="_blank" href="http://www.linkedin.com/company/naukri.com" title="Follow Naukri.com on LinkedIn" data-ga-track="Footer Section|LinkedIn Link"><img loading="lazy" alt="naukri social icons" src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" height="18" width="18"></a>
            </v-btn>

            <v-btn value="favorites">
                <a target="_blank" href="https://www.facebook.com/Naukri" title="Follow Naukri.com on Facebook" data-ga-track="Footer Section|Facebook Link"><img loading="lazy" alt="naukri social icons" src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg" height="18" width="18"></a>
            </v-btn>

            <v-btn value="nearby">
                <a target="_blank" href="https://www.facebook.com/Naukri" title="Follow Naukri.com on Facebook" data-ga-track="Footer Section|Facebook Link"><img loading="lazy" alt="naukri social icons" src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg" height="18" width="18"></a>
            </v-btn>
            <v-btn value="nearby">
                <a target="_blank" href="https://www.facebook.com/Naukri" title="Follow Naukri.com on Facebook" data-ga-track="Footer Section|Facebook Link"><img loading="lazy" alt="naukri social icons" src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg" height="18" width="18"></a>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style scoped></style>