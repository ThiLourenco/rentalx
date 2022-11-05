import { CreateCarSpecificationsUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;

describe("Create Car Specification", () => {
  beforeEach(() => {
    createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase();
  });

  it("should be able to add a new specification to the car", async () => {
    await createCarSpecificationsUseCase.execute();
  });
});
