import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function getTasksByCompletionStatus(isCompleted){ 
  return taskRepository.findByCompletionStatus(isCompleted);
}


export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
