<template>
    <v-pagination
        v-model="paging.page"
        :length="paging.pageView"
        :total-visible="paging.totalPage"
        @click="pageChange">
    </v-pagination>
</template>
<script>
export default {
    data() {
        return {
            paging: {
                page: 1,
                pageView: 0,
                totalPage: 0,
            }
        }
    },
    props: {
        isPagination: Object
    },
    methods: {
        pageChange() {
            this.$emit('pageUpdate', this.paging)
        }
    },
    watch: {
        isPagination(data) {
            this.paging.pageView = data.pageView

        }
    }
}
</script>

<style lang="scss" scoped>

</style>