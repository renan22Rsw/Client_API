import { findSourceMap } from "module";
import prismaClient from "../prisma";

interface deleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: deleteCustomerProps) {
    if (!id) {
      throw new Error("Solicitação Invalida!");
    }

    const findCustomer = await prismaClient.customer.findFirst({
      //busca pelo id
      where: {
        id: id,
      },
    });
    if (!findCustomer) {
      throw new Error("Usuário não existe!");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });

    return { message: "Deletado com sucesso!" };
  }
}

export { DeleteCustomerService };
