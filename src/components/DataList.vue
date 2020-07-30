<template>
    <div class="container">
        <SearchBar :filterKey="'name'" :data="breedsList" @pageChanged="onPageChange" @onInputChange="onSearch" :page="page" />
        <div class="cards">
            <Card v-for="(breed, i) in paginatedList" :key="i" :breed="breed"/>
        </div>
        <Footer v-on:intersect="intersected" />
    </div>
</template>
<script>

    import Card from './Card'
    import SearchBar from "./SearchBar";
    import Footer from "./Footer";
    export default {
        components: {
            Card,
            SearchBar,
            Footer
        },
        data() {
            return {
                search: '',
                page: 0,
                items: []
            }
        },
        computed: {
            breedsList() {
                return this.$store.getters.allBreeds
            },
            paginatedList() {
                return this.$store.getters.paginatedBreeds
            }
        },
        methods: {
            onSearch(value) {
                this.page = 0;
                this.$store.dispatch('fetchFilteredBreeds', value)
            },
            async onPageChange (value) {
                await this.$store.dispatch('fetchMoreBreeds', value)
            },
            intersected() {
                this.page++
            },
        },

        mounted() {
            this.$store.dispatch('fetchBreedsList')
        },

    }

</script>