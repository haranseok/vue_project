import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todo', {
    state: () => ({
        todoList: [], // todoList 담을 배열
        id: 0, // todoList index
    }),
    actions: {
        // todo 추가
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false })
        },
        //todo 삭제
        deleteTodo(itemID) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemID;
            })
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    },

})