import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByName(email: string): Promise<void>;
}

export { IUsersRepository };
