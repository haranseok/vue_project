<template>
  <div class="table_container">
    <h1>board</h1>
    <div class="search">
      <searchBar
        @searchEvent="search"
      ></searchBar>
    </div>
    <div @click="aaa()">sdfsdfsdf</div>
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
              <v-btn v-if="j === 4" variant="plain" @click.stop="updateData(tr)">{{ td }}</v-btn>
              <v-btn v-else @click.stop="deleteData(tr)"
                     color="error" variant="plain">
                <v-icon>mdi-{{ td }}</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="btnBox">
      <v-btn @click="setWrite"
             color="#395B64">작성
      </v-btn>
    </div>
    <paging
      :isPagination="isPagination"
      @pageUpdate="pageUpdate"
    />
    <confirm
      :title="title"
      :text="text"
      :btnText="btnText"
      :isCencle="isCencle"
      :isConfirm="isConfirm"
      :isTextShow="isTextShow"
      @close="this.isConfirm = false"
      @confirmBtn="confirmBtn"
    />
    <boardWrite
      :isUpdate="isUpdate"
      :title="title"
      :sendBtnText="sendBtnText"
      :isBoardData="isBoardData"
      @updateWrite="updateWrite"
      @close="this.isUpdate = false"
    />
  </div>
</template>
<script>
import searchBar from '@/components/item/input/searchInput';
import paging from '@/components/item/PaginationLayout';
import ConfirmPopup from '@/components/popups/ConfirmPopup';
import boardWrite from '@/pages/boards/BoardCreate';
import { GlobalStore } from '@/store/GlobalStore';
import { BoardService } from '@/services/BoardService';
import { useBoardInfoStore } from '@/store/board';
import { UserInfoService } from "@/services/UserInfoService";
import { UserInfoStore } from "@/store/UserInfoStore";

const boardid = useBoardInfoStore()
const userInfo = GlobalStore();
const userInfoStore = UserInfoStore()



export default {
  data() {
    return {
      limit: 7,
      totalCount: 3,
      page: 1,
      isPagination: 0,
      isConfirm: false,
      isUpdate: false,
      table: {
        th: ['no.', '제목', '작성자', '작성날짜'],
        td: []
      },
      boardid,
      userInfo,
      userInfoStore,
    }
  },
  async created() {
    await this.getList(this.page, this.limit)
  },
  components: {
    searchBar,
    confirm: ConfirmPopup,
    boardWrite,
    paging
  },
  methods: {
    async aaa() {
      const aaa = await UserInfoService.getUserInfoByToken()
      console.log("--------------------")
      console.log(aaa.data.data)
      userInfoStore.setter(aaa.data.data)
    },
    pageUpdate(data) {
      this.page = data.page;
      this.table.td = []
      this.getList(data.page, this.limit)
    },
    async getList(page, limit) {
      let res = await BoardService.getList(page, limit);
      let pageSize = Math.ceil(res.count / this.limit)
      this.isPagination = { pageView: pageSize }
      res.list.forEach((e) => {
        let list = [];
        list.push(e['id'])
        list.push(e['title'])
        list.push(e['users_id'])
        list.push(this.$dayjs.unix(e['created_at']).format('YYYY.MM.DD HH:mm'))
        list.push('수정')
        list.push('delete')
        this.table.td.push(list)
      })
    },
    confirmPopupShow(open, title, textShow, text, cencleBtn, btnText) {
      this.isConfirm = open
      this.title = title
      this.isTextShow = textShow
      this.text = text
      this.isCencle = cencleBtn
      this.btnText = btnText
    },
    search(value) {
      console.log(value)
    },
    deleteData(id) {
      this.id = `${id[0]}`
      this.confirmPopupShow(true, '정말로 삭제하시겠습니까?', true, '삭제한 게시물은 복구가 불가능합니다.', true, '취소')
    },
    async confirmBtn(option) {
      if (option === 1) {
        let deleteApi = await BoardService.doDeleteById({ id: this.id })
        if (deleteApi.data.code === 200) {
          this.confirmPopupShow(true, '정상적으로 삭제되었습니다.', false, '', false, '확인')
          this.table.td = []
          await this.getList(this.page, this.limit)
        }
      } else {
        this.isConfirm = false;
      }
    },
    setWrite() {
      this.title = '작성'
      this.sendBtnText = '작성'
      this.isBoardData = { users_id: userInfo.username }
      this.isUpdate = true;
    },
    async updateData(tr) {

      const getData = await BoardService.getOneById({ id: `${tr[0]}` })
      if (getData.status === 200) {
        this.title = '수정'
        this.sendBtnText = '수정'
        this.isBoardData = {
          id: `${tr[0]}`,
          users_id: getData.data.data.users_id,
          title: getData.data.data.title,
          content: getData.data.data.content
        }
        this.isUpdate = true
      }
    },
    async updateWrite(option, data) {
      if (option === 0) {
        this.isUpdate = false;
      } else {
        if (this.sendBtnText === '작성') {
          const createState = await BoardService.doInsert(data)
          if (createState.data.code === '200') {
            this.confirmPopupShow(true, '정상적으로 등록되었습니다.', false, '', false, '확인')
          }
        } else if (this.sendBtnText === '수정') {
          const updateState = await BoardService.doUpdateById(data)
          if (updateState.data.code === 200) {
            this.confirmPopupShow(true, '정상적으로 수정되었습니다.', false, '', false, '확인')
          }
        }
        this.table.td = []
        await this.getList(this.page, this.limit)
        this.isUpdate = false;
      }
    },
    getDetailPage(content) {
      this.boardid.detailContent(content)
      this.$emit('detailPage', 'detail')
    }
  },
}
</script>
<style lang="scss" scoped>
.table_container {
  width: 100%;
  h1 {
    text-transform: capitalize;
  }
  .search {
    float: right;
    margin-bottom: 20px;
    background: #fff;
  }
}
.table_box {
  clear: both;
  margin: 5% 0;
  table {
    width: 100%;
    font-size: 0.9rem;
    border-radius: 3px;
    background: #fff;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    thead {
      tr {
        white-space: nowrap;
        border-bottom: 2px solid #395B64;
        th {
          text-transform: uppercase;
          &:nth-child(1) {
            width: 5%;
          }
          &:nth-child(2) {
            width: 50%;
          }
        }
      }
    }
    tbody {
      tr {
        color: #6c6c6c;
        border-bottom: 1px solid #dcdcdc;
        td {
          &:not(:nth-child(2)) {
            text-align: center;
          }
          &:nth-child(1) {
            width: 5%;
          }
          &:nth-child(2) {
            width: 50%;
          }
        }
      }
    }
  }
}
.btnBox {
  float: right;
  .v-btn {
    color: #dddddd;
    padding: 0;
    .v-icon {
      font-size: 1rem;
    }
  }
}
.v-pagination {
  clear: both;
}
</style>