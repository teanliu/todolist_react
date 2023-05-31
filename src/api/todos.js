import axios from 'axios';
// const baseUrl = 'http://localhost:3001';
// "start": "react-scripts start",
//     "dev-server": "json-server --watch db.json --port 3001",
const baseUrl = 'https://todo-list-reactapplication.herokuapp.com/api';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (e) {
    console.error('[get todos failed]: ', e);
  }
};

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseUrl}/todos`, {
      title,
      isDone,
    });
    return res.data;
  } catch (e) {
    console.error("[create todos failed]: ", e);
  }
  
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;
  try {
    const res = await axios.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (e) {
    console.error("[patch todos failed]: ", e);
  }
};

export const deleteTodo = async (id) => {
  try {
    const data = await axios.delete(`${baseUrl}/todos/${id}`);
    return data.data;
  } catch (e) {
    console.error("[delete todos failed]: ", e);
  }
};
