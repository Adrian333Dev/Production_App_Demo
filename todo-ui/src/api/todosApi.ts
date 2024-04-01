import axios from 'axios';
import { CreateTodoDto, UpdateTodoDto } from '../types';

const API_URL = 'http://localhost:3001/todos'; // Adjust the port if needed

export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (todo: CreateTodoDto) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const updateTodo = async (id: string, todo: UpdateTodoDto) => {
  const response = await axios.patch(`${API_URL}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
