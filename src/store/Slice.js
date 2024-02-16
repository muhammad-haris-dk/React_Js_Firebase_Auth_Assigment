import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  theme: "light",
  isloggedin: false,
};

const Slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push({
        task: action.payload.task,
        id: action.payload.id,
        completed: false,
      });
    },
    sortTodo: (state, action) => {
      state.sortCriteria = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, task } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === id);
      state.todoList[index].task = task;
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const index = state.todoList.findIndex((todo) => todo.id === id);
      state.todoList[index].completed = !state.todoList[index].completed;
    },
    theme_toggle_dynamic: (state) => {
      if (state.theme === "dark") {
        state.theme = "light";
      } else {
        state.theme = "dark";
      }
    },
    conditional_Public_Private: (state, action) => {
      state.isloggedin = action.payload;
    },
  },
});

export const {
  setTodoList,
  addTodo,
  sortTodo,
  updateTodo,
  toggleCompleted,
  theme_toggle_dynamic,
  conditional_Public_Private
} = Slice.actions;

export default Slice.reducer;
