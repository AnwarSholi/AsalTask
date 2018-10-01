import { AddExpensesModule } from './add-expenses.module';

describe('AddExpensesModule', () => {
  let addExpensesModule: AddExpensesModule;

  beforeEach(() => {
    addExpensesModule = new AddExpensesModule();
  });

  it('should create an instance', () => {
    expect(addExpensesModule).toBeTruthy();
  });
});
