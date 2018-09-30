import { FirstPageModule } from './first-page.module';

describe('FirstPageModule', () => {
  let firstPageModule: FirstPageModule;

  beforeEach(() => {
    firstPageModule = new FirstPageModule();
  });

  it('should create an instance', () => {
    expect(firstPageModule).toBeTruthy();
  });
});
