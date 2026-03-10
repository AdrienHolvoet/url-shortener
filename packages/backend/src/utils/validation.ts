import type { Request } from "express";
import { z } from "zod";

export const validateBody = async <S extends z.Schema>(
  body: Request["body"],
  schema: S,
): Promise<z.infer<typeof schema>> => {
  const validatedBody = await schema.parseAsync(body);
  return validatedBody;
};
