<template>
    <div class='todo-item' v-bind:class="{'completed':todo.completed}">
        <p>
            <input type='checkbox' v-on:change="markComplete" name='' id=''/>
            {{todo.title}}
            <button @click="$emit('del-todo', todo.id)" class="del">X</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
    .todo-item {
        position: relative;
        background-color: lightgray;
        border: 1px solid gray;
        padding: 10px;
        margin-top: 16px;
        width: 560px;
    }

    .completed {
        text-decoration: line-through;
    }

    .del {
        position: absolute;
        right: 16px;
        border: none;
        padding: 4px 7px;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
    }
</style>

