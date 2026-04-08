import * as taskService from '../services/taskService.js';
import { getTasksByCompletionStatus } from '../services/taskService.js';

export async function getTasks(req, res, next) { 
  const {completed} = req.query; //Need to make this optional for case where no query parameter is provided 
  if (completed) { 
    const isCompleted = completed.toLowerCase() === 'true'; 
    const filteredTasks = await getTasksByCompletionStatus(isCompleted); 
    res.json(filteredTasks);
  } if (completed && completed.toLowerCase() === 'false') { 
    const notCompleted = completed.toLowerCase() === 'false'; 
    const incompletedFilteredTasks = await getTasksByCompletionStatus(notCompleted); 
    res.json(incompletedFilteredTasks);
  }
  if (completed && completed.toLowerCase() !== 'true' && completed.toLowerCase() !== 'false') {  
    await next(); // Passing to error handling middleware! 
    res.status(400).json({error: 'Invalid query parameter'});
  }
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
