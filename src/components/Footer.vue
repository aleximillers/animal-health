<template>
    <div class="footer">
<!--        // footer-->
    </div>
</template>

<script>
    export default {

        data() {
            return {
                footer: null
            }
        },
        mounted() {
            this.footer = new IntersectionObserver(([entry]) => {
                if (entry && entry.isIntersecting) {
                    this.$emit('intersect')
                }
            })

            this.footer.observe(this.$el)
        }
    }
</script>