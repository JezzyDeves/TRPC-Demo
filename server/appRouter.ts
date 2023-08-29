import z from "zod";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello!"),
  customGreeting: publicProcedure.input(z.string()).mutation((opts) => {
    const { input } = opts;

    return input;
  }),
});
