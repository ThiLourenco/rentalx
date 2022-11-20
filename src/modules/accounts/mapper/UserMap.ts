import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    avatar,
    driver_license,
  }: User): IUserResponseDTO {
    return {
      email,
      name,
      id,
      avatar,
      driver_license,
    };
  }
}

export { UserMap };
