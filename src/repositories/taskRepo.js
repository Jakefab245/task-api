import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function findByCompletionStatus(isCompleted){ 
  return prisma.task.findMany({ 
      where: { completed: isCompleted }
  })
}


// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
