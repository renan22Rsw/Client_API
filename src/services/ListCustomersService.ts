import prismaClient from "../prisma";

class ListCustomersService {
  async execute() {
    const customers = await prismaClient.customer.findMany(); //busca item do banco
    return customers;
  }
}

export { ListCustomersService };
