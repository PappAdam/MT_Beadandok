import { ref } from "vue";
import axios from "axios";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const useTaskStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const { $config } = useNuxtApp();
  const API_URL = $config.public.apiUrl + "/tasks";

  const fetchTasks = async (): Promise<boolean> => {
    try {
      loading.value = true;
      const response = await axios.get<Task[]>(API_URL);
      tasks.value = response.data;
    } catch (err) {
      error.value = (err as Error).message;
      return false;
    } finally {
      loading.value = false;
      return true;
    }
  };

  const addTask = async (newTask: Omit<Task, "id">): Promise<void> => {
    try {
      const response = await axios.post<Task>(API_URL, newTask);
      tasks.value.push(response.data);
    } catch (err) {
      error.value = (err as Error).message;
    }
  };

  const deleteTask = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      tasks.value = tasks.value.filter((task) => task.id !== id);
    } catch (err) {
      error.value = (err as Error).message;
    }
  };

  const updateTask = async (
    task: Partial<Task> & Pick<Task, "id">
  ): Promise<void> => {
    try {
      await axios.put(`${API_URL}/${task.id}`, task);
      const i = tasks.value.findIndex((t) => t.id == task.id);
      tasks.value[i] = { ...tasks.value[i], ...task };
    } catch (err) {
      error.value = (err as Error).message;
    }
  };

  return { tasks, loading, error, fetchTasks, addTask, deleteTask, updateTask };
});
