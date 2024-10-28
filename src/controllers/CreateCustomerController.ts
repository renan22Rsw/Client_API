import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomersService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const customerService = new CreateCustomerService();
    const custumer = await customerService.execute({ name, email });

    reply.send(custumer);
  }
}

export { CreateCustomerController };
