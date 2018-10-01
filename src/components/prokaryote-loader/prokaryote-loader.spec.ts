import { ProkaryoteLoader } from './prokaryote-loader';

describe('prokaryote-loader', () => {
  it('should build', () => {
    expect(new ProkaryoteLoader()).toBeTruthy();
  });
});
