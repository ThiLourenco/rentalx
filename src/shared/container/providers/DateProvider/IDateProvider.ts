interface IDateProvider {
  compare(start: Date, end_date: Date): Promise<any>;
}

export { IDateProvider };
