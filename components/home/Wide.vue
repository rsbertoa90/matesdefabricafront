<template>
    <div>
        <div class="banner-container">
            
                <homeBanner></homeBanner>
            
        </div>
    </div>
</template>

<script>
import homeBanner from './banner.vue';
export default {
    components:{homeBanner}
}
</script>


<style lang="scss" scoped>
.banner-container{
    
    width: 70%;
    margin-left: -3px;
}
</style>
