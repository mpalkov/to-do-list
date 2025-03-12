import { z } from "zod";

export const TaskData = z.object({
  userId: z.number().optional(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export const TasksData = z.array(TaskData);

export type TaskData = z.infer<typeof TaskData>;
export type TasksData = z.infer<typeof TasksData>;