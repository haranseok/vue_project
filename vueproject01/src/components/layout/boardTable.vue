<template>
    <div class="table_container">
        <div class="search">
            <searchBar
                @searchEvent="search"
            ></searchBar>
        </div>
        <div class="table_box">
            <table>
                <tr>
                    <th>1</th>
                </tr>
            </table>
        </div>
        <v-pagination
            v-model="page"
            :length="6">
        </v-pagination>
    </div>
</template>
<script>
import searchBar from '@/components/item/searchInput';
  export default {
    data () {
      return {
      }
    },
    components: {
        searchBar
    },
    methods: {
        search(value){
            console.log(value)
        }
    }
  }
</script>
<style lang="scss" scoped>
    .table_container{
        width: 100%;
        height: 500px;
        padding: 3%;
        .search{
            float: right;
        }
        .table_box{
            clear: both;
        }
    }
</style>