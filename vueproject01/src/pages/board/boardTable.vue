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
                    <tr v-for="(tr, i) in table.td" :key="i" @click="getDetailPage(tr)">
                        <td v-for="(td, j) in tr" :key="j">
                            <div v-if="j < 4">{{ td }}</div>
                            <div v-else>
                                <v-btn @click.stop="deleteData(tr)"><v-icon>mdi-{{ td }}</v-icon></v-btn>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btnBox">
            <v-btn @click="setWrite"
                color="#395B64">글쓰기</v-btn>
        </div>
        <v-pagination
            v-model="page"
            :length="5">
        </v-pagination>
        <confirm 
            :title="title"
            :text="text"
            :btnText="btnText"
            :isCencle="isCencle"
            :isConfirm="isConfirm"
            :isTextShow="isTextShow"
            @close="this.isConfirm = false"
            @confirmBtn="confirmBtn"/>
            <Update 
                :isUpdate="isUpdate"
                :sendBtnText="sendBtnText"
                @updateWrite="updateWrite"
                @close="this.isUpdate = false"/>
    </div>
</template>
<script>
import searchBar from '@/components/item/input/searchInput';
import confirm from '@/components/popup/confirmPopup';
import Update from '@/pages/board/boardWrite';
import { useUserInfoStore } from '@/store/userInfo';
import { useBoardInfoStore } from '@/store/board';

const token = useUserInfoStore()
const boardid = useBoardInfoStore()

let apiUrl = process.env.VUE_APP_API_URL;
          
  export default {
    data () {
      return {
        page:1,
        pageSize: 5,
        isConfirm: false,
        isUpdate: false,
        table: {
            th: ['no.','제목','작성자','작성날짜'],
            td: []
        },
        boardid,
      }
    },
    created(){
        this.getList()
    },
    components: {
        searchBar,
        confirm,
        Update,
    },
    methods: {
        getList(){
            this.axios.get(`${apiUrl}/board/list`, {
                headers:token.token,
            }).then((res)=>{
                res.data.data.forEach((e) => {
                let list = [];
                    list.push(e['id'])
                    list.push(e['title'])
                    list.push(e['users_id'])
                    list.push(e['created_at'])
                    // list.push('수정')
                    list.push('delete')
                    this.table.td.push(list)
                })
            })
        },
        confirmPopupShow(open, title, textShow, text, cencleBtn, btnText){
            this.isConfirm = open,
            this.title = title,
            this.isTextShow = textShow
            this.text = text,
            this.isCencle = cencleBtn,
            this.btnText = btnText
        },
        search(value){
            console.log(value)
        },
        deleteData(id){
            this.id = `${id[0]}`
            this.confirmPopupShow(true, '정말로 삭제하시겠습니까?', true, '삭제한 게시물은 복구가 불가능합니다.', true, '취소')
        },
        async confirmBtn(option){
            if(option === 1) {
            // url, body, header 순으로 인자를 넘겨줘야함
            const deleteApiRes = await this.axios.post(`${apiUrl}/board/delete`, {id:this.id},{headers:token.token});
                if(deleteApiRes.data.code === 200){
                    this.confirmPopupShow(true, '정상적으로 삭제되었습니다.', false, '', false, '확인')
                    this.table.td = []
                    this.getList()
                }
            }else{
                this.isConfirm = false;
            }
        },
        setWrite(){
            this.sendBtnText = '작성'
            this.isUpdate = true;
        },
       async updateWrite(option, data) {
            if(option === 0) {
                this.isUpdate = false;
            }else{
                await this.axios.post(`${apiUrl}/board/create`, data, {headers: token.token})
                this.table.td = []
                this.getList()
            }
        },
        getDetailPage(content){
            this.boardid.detailContent(content)
            this.$emit('detailPage', 'detail')
        }
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
        padding:0;
        .v-icon{
            font-size: 1rem;
        }
    }
}
.v-pagination{
    clear: both;
}
</style>