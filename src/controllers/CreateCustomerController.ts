import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomersService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new CreateCustomerService();

    const custumer = await customerService.execute();

    reply.send(custumer);
  }
}

export { CreateCustomerController };
