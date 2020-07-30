<template>
    <input type="text" v-model="searchField" placeholder="Search">
</template>
<script>
    export default {
        props: ['data', 'filterKey', 'page'],
        data() {
            return {
                searchField: '',
                resultsPerPage: 6,

            }
        },
        computed: {
            filteredData() {
                const from = this.page * this.resultsPerPage;
                const to = this.page * this.resultsPerPage + this.resultsPerPage;
                return this.data.filter(value => {
                    return value[this.filterKey].match(this.searchField.toLowerCase())
                }).slice(from, to)
            }
        },
        watch: {
            data: function() {
                this.$emit('onInputChange', this.filteredData)
            },
            searchField: function() {
                this.$emit('onInputChange', this.filteredData)
            },
            page: function () {
                this.$emit('pageChanged', this.filteredData)
            }

        }

    }
</script>