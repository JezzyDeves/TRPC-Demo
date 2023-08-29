import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter } from "./appRouter";
import cors from "cors";

createHTTPServer({ router: appRouter, middleware: cors() }).listen(3000);
