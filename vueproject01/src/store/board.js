import { defineStore } from 'pinia';

export const useBoardInfoStore = defineStore('boardInfo', {
    state: () => ({ boardContent: { id: null } }),
    actions: {
        detailContent(content) {
            this.boardContent.id = content[0]
        }
    }
})