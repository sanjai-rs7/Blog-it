import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

blogRouter.get("/:blogId", (c) => {
  const id = c.req.param();
  console.log(id);
  return c.text("Get Blog Route");
});

blogRouter.post("/", (c) => {
  return c.text("blog post Route");
});

blogRouter.put("/", (c) => {
  return c.text("put blog Route");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Bulk get route");
});
