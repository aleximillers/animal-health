<template>
    <div class="card">
        <div class="card-img">
            <img  v-bind:src="imagePath" @load="onImgLoad" alt="">
        </div>
        <div class="card-label">
            <p>{{breed.name}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: [ 'breed' ],
        data() {
            return {
                imagePath: './images/spinner.gif'
            }
        },
        methods: {
            onImgLoad () {
                this.imagePath = this.breed.imgPath
            }
        },
        watch: {
            breed: function(val) {
                this.imagePath = val.imgPath
            }
        }
    }
</script>