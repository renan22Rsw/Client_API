import { ok } from "assert";
import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/home", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });
};

export default routes;
