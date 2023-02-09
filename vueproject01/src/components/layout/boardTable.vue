<template>
    <div class="table_container">
        <h1>board</h1>
        <div class="search">
            <searchBar
                @searchEvent="search"
            ></searchBar>
        </div>
        <div class="table_box">
            <table>
                <thead>
                    <tr>
                        <th v-for="(th, i) in table.th" :key="i">{{ th }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tr, i) in table.td" :key="i" @click="boardDate($event)">
                        <td v-for="(td, j) in tr" :key="j">
                            {{ td }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btnBox">
            <v-btn @click="write"
                color="#395B64">글쓰기</v-btn>
        </div>
        <v-pagination
            v-model="page"
            :length="5">
        </v-pagination>
    </div>
</template>
<script>
import searchBar from '@/components/item/input/searchInput';
import data from '@/data/board.js';

  export default {
    data () {
      return {
        page:1,
        pageSize: 5,
        table: {
            th: ['no.','제목','작성자','작성날짜'],
            td: []
        }
      }
    },
    created(){
        data.forEach((e) => {
            let list = [];
            list.push(e['no'])
            list.push(e['title'])
            list.push(e['writer'])
            list.push(e['date'])
            this.table.td.push(list)
        })
    },
    components: {
        searchBar
    },
    methods: {
        search(value){
            console.log(value)
        },
        boardDate(event){
            this.$emit('boardDetail', event.currentTarget)
        },
        write(){
            this.$emit('update', 'write')
        },
    },
  }
</script>
<style lang="scss" scoped>
    .table_container{
        width: 100%;
        height: 500px;
        padding: 3%;
        h1{
            text-transform: capitalize;
        }
        .search{
            float: right;
        }
    }
    
    .table_box{
        clear: both;
        margin: 5% 0;
        table{
            width: 100%;
            font-size: 0.9rem;
            border-radius: 3px;
            box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.2);
            thead{
                tr{
                    border-bottom: 2px solid #395B64;
                    th{
                        text-transform: uppercase;
                        &:nth-child(1){
                            width: 5%;
                        }
                        &:nth-child(2){
                            width: 70%;
                        }
                    }
                }
            }
            tbody{
                tr{
                    color:#6c6c6c;
                    border-bottom: 1px solid #dcdcdc;
                    td{
                        &:not(:nth-child(2)){
                            text-align: center;
                        }
                        &:nth-child(1){
                            width: 5%;
                        }
                        &:nth-child(2){
                            width: 70%;
                        }
                    }
                }
            }
        }
    }
.btnBox{
    float: right;
    .v-btn{
        color: #dddddd;
    }
}
.v-pagination{
    clear: both;
}
</style>