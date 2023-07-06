<template>
    <div class="entry-container mb-3 pointer p-2" @click="postid">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">06</span>
            <span class="mx-1 fs-5">julio</span>
            <span  class="mx-2 fw-light">2023, jueves</span>
        </div>
        <div class="entry-description">
            Aute ipsum mollit enim elit aute pariatur voluptate nulla tempor consectetur. Aliquip sit elit proident duis. Pariatur deserunt sint adipisicing sunt elit minim veniam. Fugiat incididunt culpa aliquip qui aliquip velit tempor et sint laboris velit. Aliqua mollit sit eu cupidatat pariatur labore ad dolor pariatur consequat excepteur. Ex in cupidatat eu irure excepteur aliqua officia exercitation quis veniam.
        </div>
    </div>
</template>

<script>
export default {
    name: "entry-vue",
    methods: {
        postid() {
            this.$router.push({name: "entry",  params:{id :1}})
        }
    }
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1 px solid #2c3e50 ;
    transition: 0.2s all ease-in;
    &:hover {
       background-color: lighten($color: grey, $amount: 45);
       transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>