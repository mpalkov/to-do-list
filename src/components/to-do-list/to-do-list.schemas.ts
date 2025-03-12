import { z } from "zod";

export const TaskData = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export type TaskData = z.infer<typeof TaskData>;