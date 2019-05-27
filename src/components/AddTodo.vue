<template>
    <div class="add-todo">
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    },
    data() {
        return {
            title: ''
        }
    }
}
</script>

<style scoped>
    .add-todo {
        width: 200px;
        margin: 80px auto 0px auto ;
    }
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    input[type="submit"] {
        margin-top: 4px;
        margin-left: 10px;
    }
</style>
