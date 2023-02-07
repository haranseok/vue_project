<template>
    <article>
        pinia counter
        <p>name: {{ counter.name }}</p>
        <p>count: {{ counter.count }}</p>
        <p>doubleCount: {{ counter.doubleCount }}</p>
        <button @click="counter.increment">increment</button>
        <button @click="counter.$reset">reset</button>
        <div class="todoBox">
            <h2>to-do list</h2>
            <form @submit.prevent="addItemAndClear(todo)">
                <input type="text" v-model="todo"><button>Add</button>
            </form>
            <ul class="todoList">
                <li v-for="todo in todoList" :key="todo.id">
                    <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
                    <div>
                        <span class="check cp" @click.stop="toggleCompleted(todo.id)">✔</span>
                        <span class="cp" @click="deleteTodo(todo.id)">🗑</span>
                    </div>
                </li>
            </ul>
            <button class="cp" @click="store.$reset">전체 삭제</button>
        </div>
    </article>
</template>
<script>
import { useCounterStore } from '@/store/counter';
import { useTodoListStore } from '@/store/useTodoList';
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
export default {
    setup() {
        const counter = useCounterStore();
        const todo = ref("");
        const store = useTodoListStore();
        const { todoList } = storeToRefs(store);
        const { toggleCompleted, deleteTodo } = store;
        return {
            counter,
            todo,
            store,
            todoList,
            toggleCompleted,
            deleteTodo
        }
    },
    methods: {
        addItemAndClear(item) {
            if(item.length === 0) {
                return
            }
            this.store.addTodo(item)
            this.todo.value = ""
        }
    }
}
</script>

<style lang="scss" scoped>
    article {
        padding: 3%;
        button{
            padding:10px;
            margin: 0 5px;
            border-radius: 5px;
            background: lightblue;
        }
        
        .todoBox{
            width: 100%;
            text-align: center;
            h2{
                margin: 20px 0;
                color: rgb(4, 36, 47);
                font-size: 2.3rem;
                text-transform: capitalize;
            }
            input {
                padding: 8px;
                border-radius: 3px;
                border: 1px solid #888;
            }
            .todoList{
                width: 500px;
                margin: 0 auto;
                padding: 5%;
                li{
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid #999;
                    span{
                        margin: 0 20px;
                    }
                }
            }
        }
    }
    .completed{
        color: rgb(255, 77, 0);
        text-decoration: line-through;
    }
</style>