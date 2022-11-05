import ListCarsUseCase from "./LisCarsUseCase";

let listCarUseCase: ListCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    listCarUseCase = new ListCarsUseCase();
  });

  it("should be able to list all available cars", async () => {
    await listCarUseCase.execute();
  });
});
