import { z } from "zod";
import { UserSchema as PrismaUserSchema, PostSchema } from "@repo/db/zod";

export const UserSchema = z
  .object(PrismaUserSchema.shape)
  .merge(
    z.object({
      posts: z.array(PostSchema),
    })
  )
  .openapi("User");
