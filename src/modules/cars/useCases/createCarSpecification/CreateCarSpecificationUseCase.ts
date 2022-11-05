interface IRequest {
  car_id: string;
  specifications_id: string;
}

class CreateCarSpecificationsUseCase {
  async execute({ car_id, specifications_id }: IRequest): Promise<void> {}
}

export { CreateCarSpecificationsUseCase };
