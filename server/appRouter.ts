import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello!"),
});
