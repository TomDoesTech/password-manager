import { FastifyError, FastifyInstance, FastifyPluginOptions } from "fastify";
import { loginHandler, registerUserHandler } from "./user.controller";

function userRoutes(
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: (err?: FastifyError) => void
) {
  app.post("/", registerUserHandler);

  app.post("/login", loginHandler);

  done();
}

export default userRoutes;
